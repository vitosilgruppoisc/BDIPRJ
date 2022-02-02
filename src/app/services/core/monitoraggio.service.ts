import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from '../configuration.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { MonitoraggioDTO } from '../../models/monitoraggio';
import moment from 'moment-es6';

@Injectable({
  providedIn: 'root'
})
export class MonitoraggioService {

  private apiEndpoint = '';

  constructor(private http: HttpClient, private configurationService: ConfigurationService) {
    this.configurationService.config$.subscribe(config => {
      this.apiEndpoint = config.gepaMonitoraggioU2AEndpoint;
    });
  }
  
  getMonitoraggioPagamentiEntrata(dataEsecuzione: Date, idProceduraUtente: number, puAllSelected: boolean): Observable<MonitoraggioDTO> {
    return this.http.get<MonitoraggioDTO>(`${this.apiEndpoint}/payments/incoming`, {
      params: {
        dataEsecuzione: moment(dataEsecuzione, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        idProceduraUtente: idProceduraUtente.toString(),
        puAllSelected: puAllSelected.toString()
      }
    }).pipe(map(it => {
      it.items.forEach(item=>{
        item.color = '#' + (Math.random().toString(16) + "000000").substring(2,8) //Random color, since backend doesn't provide one and there was no specification for it
        console.log("Assigning color " + item.color + " to item " + item.name)
      })
      return it;
    })).pipe(
      catchError((error) => {
        console.log('Error - getMonitoraggioPagamentiEntrata', error);
        return of({
          tipologia: 'Pagamenti in ingresso',
          totale: '23',
          items: [
            { value: 10, name: 'Acquisiti', color: 'orange', idTipiOperazione: ['Roi','CCT','FICT'] },
            { value: 7, name: 'Presi in carico', color: 'violet', idTipiOperazione: [] },
            { value: 3, name: 'Da validare', color: 'green' , idTipiOperazione: []},
		        { value: 0, name: 'Stornato', color: 'blue' , idTipiOperazione: []},
			      { value: 2, name: 'Ripudiato', color: 'red' , idTipiOperazione: []},
            { value: 1, name: 'Anomalo', color: 'grey', idTipiOperazione: [] }
          ]
        });
      })
    );
  }

  getMonitoraggioPagamentiUscita(dataEsecuzione: Date, idProceduraUtente: number, puAllSelected: boolean): Observable<MonitoraggioDTO> {
    return this.http.get<MonitoraggioDTO>(`${this.apiEndpoint}/payments/outgoing`, {
      params: {
        dataEsecuzione: moment(dataEsecuzione, 'YYYY-MM-DD').format('YYYY-MM-DD'),
        idProceduraUtente: idProceduraUtente.toString(),
        puAllSelected: puAllSelected.toString()
      }
    }).pipe(map(it => {
      it.items.forEach(item=>{
        item.color = '#' + (Math.random().toString(16) + "000000").substring(2,8) //Random color, since backend doesn't provide one and there was no specification for it
        console.log("Assigning color " + item.color + " to item " + item.name)
      })
      return it;
    })).pipe<MonitoraggioDTO>(
      catchError(error => {
        console.log('Error - getMonitoraggioPagamentiUscita', error);
        return of({
          tipologia: 'Pagamenti in uscita',
          totale: '86',
          items: [
            { value: 15, name: 'Scartate da GEPA', color: 'orange', idTipiOperazione: []},
            { value: 23, name: 'Acquisite da GEPA', color: 'violet', idTipiOperazione: [] },
            { value: 12, name: 'In elaborazione', color: 'green', idTipiOperazione: [] },
            { value: 19, name: 'Inviati al circuito', color: 'blue' , idTipiOperazione: []},
            { value: 0, name: 'Regolate', color: 'red', idTipiOperazione: [] },
            { value: 12, name: 'Non regolate', color: 'grey', idTipiOperazione: [] },
            { value: 5, name: 'Anomalo', color: 'purple' , idTipiOperazione: []}
          ]
        });
      })
    )
  }
}
