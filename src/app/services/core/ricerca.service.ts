import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../configuration.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Payment } from '../../models/payment';
import { PaymentType, SearchType } from '../../models/enum';
import { FlowType } from '../../models/flow-type';
import { OperationType } from '../../models/operation-type';

@Injectable({
  providedIn: 'root'
})
export class RicercaService {

  

  private apiEndpoint = '';

  constructor(private http: HttpClient, private configurationService: ConfigurationService) {
    this.configurationService.config$.subscribe(config => {
      this.apiEndpoint = config.gepaMonitoraggioU2AEndpoint; //TODO addd gepaCoreRicercaEndpoint to config
    });
  }

  public getPagamentoByType(searchType:FlowType, paymentType:OperationType, extractionType:string, params:{key:string,value:string}):Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.apiEndpoint}/payments/v1.0/%${searchType.descrTipoFlusso.toLowerCase()}/${paymentType.descrTipoOperazione.toLowerCase()}`,{
      params: {
        extractionType: extractionType,
        searchFields: this.createRsqlString(params)
      }
    }).pipe(catchError(it=>{
      console.log(it)
      return of([{
        dataEsecuzione: 'string',
        idProceduraUtente: 1,
        idStato: '1',
        uetr: 'string',
        amount: 10,
        valuta: '1',
        idGEPA: 'string',
        idPU: '1',
        idTipoOperazione: '1',
        idCircuitoRegolamento: '2',
        idPayment: 0
      },
      {
        dataEsecuzione: 'string',
        idProceduraUtente: 3,
        idStato: '1',
        uetr: 'string',
        amount: 15,
        valuta: '2',
        idGEPA: 'string',
        idPU: '2',
        idTipoOperazione: '2',
        idCircuitoRegolamento: '1',
        idPayment: 0
      }])
    }))
  }

  private createRsqlString(params:{key:string,value:string}):string{
    return "TODO"
  }
  
}
