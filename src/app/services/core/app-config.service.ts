import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../configuration.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Currency } from '../../models/currency';
import { OperationType } from '../../models/operation-type';
import { FlowType } from '../../models/flow-type';
import { Status } from '../../models/status';
import { SettlementCircuit } from '../../models/settlement-circuit';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private apiEndpoint = '';

  constructor(private http: HttpClient, private configurationService: ConfigurationService) {
    this.configurationService.config$.subscribe(config => {
      this.apiEndpoint = config.gepaProcedureU2AEndpoint; //TODO addd gepaCoreAppConfig to config
    });
  }

  getCurrency(): Observable<Currency[]> {
    return this.http.get<any>(`${this.apiEndpoint}/currencies`).pipe(map(it => {
      return it.currency})).pipe(
      catchError((error) => {
        console.log('Error - getCurrency', error);
        return of([{idValuta:1, descrValuta:"Euro"}, {idValuta:2,descrValuta:"Dollari"}]);
      })
    );
  }
  getOperationTypes(): Observable<OperationType[]> {
    return this.http.get<any>(`${this.apiEndpoint}/currencies`).pipe(map(it => {
      return it.operationType})).pipe(
      catchError((error) => {
        console.log('Error - getOperationTypes', error);
        return of([{idTipoOperazione:1, descrTipoOperazione:"Interbancario"}, {idTipoOperazione:2,descrTipoOperazione:"Addebito"}]);
      })
    );
  }

  getFlowTypes(): Observable<FlowType[]> {
    return this.http.get<any>(`${this.apiEndpoint}/flowTypes`).pipe(map(it => {
      return it.flowType})).pipe(
      catchError((error) => {
        console.log('Error - getFlowTypes', error);
        return of([{idTipoFlusso:1, descrTipoFlusso:"Entrata"}, {idTipoFlusso:2,descrTipoFlusso:"Uscita"}]);
      })
    );
  }

  getSettlementCircuit(): Observable<SettlementCircuit[]> {
    return this.http.get<any>(`${this.apiEndpoint}//settlementCircuits`).pipe(map(it => {
      return it.flowType})).pipe(
      catchError((error) => {
        console.log('Error - getFlowTypes', error);
        return of([{idCircuitoRegolamento:1, descrCircuitoRegolamento:'Circuito 1'}, {idCircuitoRegolamento:2, descrCircuitoRegolamento:'Circuito 2'}]);
      })
    );
  }

  getStates(tipoFlusso:FlowType, tipoOperazione:OperationType): Observable<Status[]> {
    return this.http.get<any>(`${this.apiEndpoint}/states`, {
      params:{
        idTipoFlusso: tipoFlusso.idTipoFlusso,
        idTipoOperazione: tipoOperazione.idTipoOperazione
      }
    }).pipe(map(it => {
      return it.flowType})).pipe(
      catchError((error) => {
        console.log('Error - getStates', error);
        return of([{idStato:1, descrStato:"Stato 1"}, {idStato:2,descrStato:"Stato 2"}]);
      })
    );
  }
}
