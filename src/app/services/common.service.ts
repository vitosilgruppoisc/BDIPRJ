import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";
import {RSQLUtils} from "../utilities/rsqlUtil";
import {FormatterUtils} from "../utilities/formatterUtils";
import {Observable, of} from "rxjs";
import {CountryCode} from "../models/ecc-transcoding-retail";
import {catchError} from "rxjs/operators";
import {Canale} from "../models/ecc-reachability-retail";
import {CanaleEnum, CircuitoEnum, TipoContoEnum, TipologiaRichiestaTrRaEnum} from "../models/enum";
import {GenericComboItemModel} from "../models/combo";

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    protected apiEndpointU2A = '';
    protected apiEndpointA2A = '';

    constructor(protected http: HttpClient, protected configurationService: ConfigurationService) {
        this.configurationService.config$.subscribe(config => {
            this.apiEndpointU2A = config.gepaAnagraficheU2AEndpoint;
            this.apiEndpointA2A = config.gepaAnagraficheA2AEndpoint;
        });
    }

    getCountryCodes(): Observable<CountryCode[]> {
        return this.http.get<CountryCode[]>(`${this.apiEndpointU2A}/countryCode`).pipe(
            catchError((error) => {
                console.log ('Error - getCountryCodes', error);
                return of(null);
            })
        );
    }

    getCanali(): Observable<Canale[]> {
        const canali =  [
            {codice: CanaleEnum.STEP2, descrizione: 'Step2'},
            {codice: CanaleEnum.T2, descrizione: 'T2'}
        ];
        return of(canali);
    }

    getCircuiti(): Observable<GenericComboItemModel[]> {
        const circuitiList = [
            {codice: CircuitoEnum.TARGET2.valueOf(), descrizione: 'TARGET2'},
            {codice: CircuitoEnum.SEPA.valueOf(), descrizione: 'SEPA'}
        ];
        return of(circuitiList);
    }

    getTipologia(addBic: boolean): Observable<GenericComboItemModel[]> {
        const tipologiaList = [];
        if (!!addBic) {
            tipologiaList.push({codice: TipologiaRichiestaTrRaEnum.BIC.valueOf(), descrizione: 'BIC'});
        }
        tipologiaList.push({codice: TipologiaRichiestaTrRaEnum.IBAN.valueOf(), descrizione: 'IBAN'});
        tipologiaList.push({codice: TipologiaRichiestaTrRaEnum.NSC_CC.valueOf(), descrizione: 'NSC e Cuntry Code'});
        return of(tipologiaList);
    }
}
