import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {GetPartiesResponse, Party, TipoParty} from '../models/party';
import {catchError, filter, map, mergeMap, tap, toArray} from 'rxjs/operators';
import {ConfigurationService} from './configuration.service';
import {RSQLUtils} from '../utilities/rsqlUtil';
import {FormatterUtils} from '../utilities/formatterUtils';
import {SearchModel} from "../models/search";

@Injectable({
    providedIn: 'root'
})
export class PartyService {

    private apiEndpoint = '';

    public searchModel: SearchModel;
    public insertContoSearchPartyModel: SearchModel;

    constructor(private http: HttpClient, private configurationService: ConfigurationService, private rSQLUtils: RSQLUtils, private formatterUtils: FormatterUtils) {
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
        });
    }

    getTipiParties(): Observable<TipoParty[]> {
        return this.http.get<TipoParty[]>(`${this.apiEndpoint}/tipiParty`).pipe(
            catchError((error) => {
                console.log ('Error - getTipiParties', error);
                return of(null);
            })
        );
    }

    getParties(searchString: string): Observable<GetPartiesResponse> {
        return this.http.get<GetPartiesResponse>(`${this.apiEndpoint}/parties?${searchString}`).pipe(
            tap(res => console.log(res))
        );
    }

    getParty(idParty: string): Observable<Party> {
        return this.http.get<Party>(`${this.apiEndpoint}/parties/${idParty}`).pipe(
            tap(res => console.log(res)),
            catchError((error) => {
                    console.log('Error - getParty', error);
                    return of(null);
                }
            )
        );
    }

    getPartyByBicAndTipo(bicParty: string, tipoParty: TipoParty): Observable<Party> {
        if (!! bicParty && !!tipoParty) {
            const searchString = this.buildSearchStringForParty(bicParty, tipoParty);
            return this.http.get<GetPartiesResponse>(`${this.apiEndpoint}/parties?${searchString}`).pipe(
                tap(res => console.log(res)),
                mergeMap( (res: GetPartiesResponse) => res.content),
                filter ( (p: Party) => (this.isPartyActive(p))),
                toArray (),
                map ( res => res [0]),
                catchError((error) => {
                        console.log('Error - getPartyByBicAndTipo', error);
                        return of(null);
                    }
                )
            );
        } else {
            return of(null);
        }
    }

    private buildSearchStringForParty(bicParty: string, tipoParty: TipoParty): string {
        const rSQLArray: string [] = [];
        rSQLArray.push(this.rSQLUtils.manageWildcard( bicParty, 'bic'));
        rSQLArray.push(this.rSQLUtils.manageSelect( tipoParty.codice, 'tipoParty'));
        return  this.rSQLUtils.getSearchString(rSQLArray);
    }

    private isPartyActive (data): boolean {
        const validTo = new Date(this.formatterUtils.formatDate(data, 'validTo'));
        const today = new Date();
        return (validTo >= today);
    }
}
