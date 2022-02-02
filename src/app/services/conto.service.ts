import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Conto, GetContiResponse, TipoConto, TipoTargetService} from '../models/conto';
import {ContoAsSettlmentBank, ContoSfruttamentoDcaParty} from '../models/sfruttamento-dca';
import {SearchModel} from "../models/search";

@Injectable({
    providedIn: 'root'
})
export class ContoService {

    private apiEndpoint = '';

    public searchModel: SearchModel;

    public insertContosearchContoPadreModel: SearchModel;

    public associaContosearchContoModel: SearchModel;

    constructor(private http: HttpClient, private configurationService: ConfigurationService) {
        this.configurationService.config$.subscribe(config => {
            this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
        });
    }

    getTipiConto(tipoParty?: string): Observable<TipoConto[]> {
        let url = `${this.apiEndpoint}/tipiConto`;
        if (!!tipoParty) {
            url = `${this.apiEndpoint}/tipiConto?tipoParty=${tipoParty}`;
        }
        return this.http.get<TipoConto[]>(url).pipe(
            catchError((error) => {
                console.log ('Error - getTipiConto', error);
                return of(null);
            })
        );
    }

    getTipiTargetService(): Observable<TipoTargetService[]> {
        return this.http.get<TipoTargetService[]>(`${this.apiEndpoint}/tipiTargetService`).pipe(
            catchError((error) => {
                console.log ('Error - getTipiTargetService', error);
                return of(null);
            })
        );
    }

    getContiOfParty(idParty: string): Observable<Conto []> {
        return this.http.get<Conto []>(`${this.apiEndpoint}/parties/${idParty}/conti`).pipe(
            tap(res => console.log(res)),
            catchError((error) => {
                console.log('Error - getContiOfParty', error);
                return of(null);
            }));
    }

    getContiAsSettlmentBankOfParty(idParty: string): Observable<ContoAsSettlmentBank []> {
        return this.http.get<ContoAsSettlmentBank []>(`${this.apiEndpoint}/parties/${idParty}/contiAncillary`).pipe(
            tap(res => console.log(res)));
    }

    getConti(searchString: string): Observable<GetContiResponse> {
        return this.http.get<GetContiResponse>(`${this.apiEndpoint}/conti?${searchString}`).pipe(
            tap(res => console.log(res)));
    }

    getConto(idConto: string): Observable<Conto> {
        return this.http.get<Conto>(`${this.apiEndpoint}/conti/${idConto}`).pipe(
            tap(res => console.log(res)));
    }

    getSfruttamentoPartyConto(idConto: number, idParty?: number): Observable<ContoSfruttamentoDcaParty[]> {
        let url =  `${this.apiEndpoint}/sfruttamentiDca?contoId=${idConto}`;
        if (!!idParty) {
            url = url.concat(`&partyId=${idParty}`);
        }
        return this.http.get<ContoSfruttamentoDcaParty[]>(url).pipe(
            tap(res => console.log(res)));
    }
}
