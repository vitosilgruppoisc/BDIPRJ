import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProceduraUtente as ProceduraUtenteDTO } from '../models/procedure-utente';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  private apiEndpoint = '';

  constructor(private http: HttpClient, private configurationService: ConfigurationService) {
    this.configurationService.config$.subscribe(config => {
      this.apiEndpoint = config.gepaProcedureU2AEndpoint;
    });
  }

  getProcedureUtente(): Observable<ProceduraUtenteDTO[]> {
    return this.http.get<any>(`${this.apiEndpoint}/pus`)
    .pipe(map(it => {
	  console.log("result it: " + it);
      return it.pus;
    })).pipe(
      catchError((error) => {
        console.log('Error - getMonitoraggioPagamentiEntrata', error);
        return of([
          {
           "idProceduraUtente": 1,
           "nomeLogico": "CONTI LORO",
           "idServizio": 1
          },
          {
           "idProceduraUtente": 2,
           "nomeLogico": "POLIS",
           "idServizio": 2
          },
          {
           "idProceduraUtente": 3,
           "nomeLogico": "SIPROS",
           "idServizio": 3
          }
         ]);
      })
    );
  }
}
