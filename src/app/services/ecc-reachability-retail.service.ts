import { Injectable } from '@angular/core';
import {SearchModel} from "../models/search";
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {CommonService} from "./common.service";
import {EccReachabilityRetail, GetEccReachabilityRetailResponse} from "../models/ecc-reachability-retail";

@Injectable({
    providedIn: 'root'
})
export class EccReachabilityRetailService extends CommonService {

    public searchModel: SearchModel;

    constructor(protected http: HttpClient, protected configurationService: ConfigurationService) {
        super(http, configurationService );
    }

    getEccezioniReachabilityRetail(searchString: string): Observable<GetEccReachabilityRetailResponse> {
        return this.http.get<GetEccReachabilityRetailResponse>(`${this.apiEndpointU2A}/eccReachabilityRetail?${searchString}`).pipe(
            tap(res => console.log(res))
        );
    }

    getEccezioneReachabilityRetail(idEcc: string): Observable<EccReachabilityRetail> {
        return this.http.get<EccReachabilityRetail>(`${this.apiEndpointU2A}/eccReachabilityRetail/${idEcc}`).pipe(
            tap(res => console.log(res)),
            catchError((error) => {
                    console.log('Error - getEccezioneReachabilityRetail', error);
                    return of(null);
                }
            )
        );
    }
}
