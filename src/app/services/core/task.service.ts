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
export class TaskService {

  private apiEndpoint = '';

  constructor(private http: HttpClient, private configurationService: ConfigurationService) {
    this.configurationService.config$.subscribe(config => {
      this.apiEndpoint = config.gepaMonitoraggioU2AEndpoint; //TODO addd gepaCoreTaskEndpoint to config
    });
  }

  getMonitoraggioTaskDaEseguire(statoTask: string): Observable<MonitoraggioDTO> {
    return this.http.get<MonitoraggioDTO>(`${this.apiEndpoint}/tasks`, {
      params: {
        statoTask: statoTask
      }
    }).pipe(map(it => {
      it.items.forEach(item=>{
        item.color = '#' + (Math.random().toString(16) + "000000").substring(2,8) //Random color, since backend doesn't provide one and there was no specification for it
        console.log("Assigning color " + item.color + " to item " + item.name)
      })
      return it;
    })).pipe(
      catchError((error) => {
        console.log('Error - getMonitoraggioTaskDaEseguire', error);
        return of({
          tipologia: 'Task da eseguire',
          totale: '11',
          items: [
            {"name":"BONIFICO","value":2, idTipiOperazione: []},
            {"name":"SCARTO_DA_CONFERMARE","value":5, idTipiOperazione: []},
            {"name":"RICHIESTA_CCT_DA_CANCELLARE","value":3, idTipiOperazione: []}
          ]
        });
      })
    );
  }
}
