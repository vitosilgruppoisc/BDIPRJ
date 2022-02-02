import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {Observable, of} from 'rxjs';
import {TipoParty} from '../models/party';
import {catchError} from 'rxjs/operators';
import {FilialeRiferimento} from '../models/filiale';

@Injectable({
  providedIn: 'root'
})
export class FilialeService {

  private apiEndpoint = '';

  constructor(private http: HttpClient, private configurationService: ConfigurationService) {
    this.configurationService.config$.subscribe(config => {
      this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
    });
  }

  getFilialiRiferimento(): Observable<FilialeRiferimento[]> {
    return this.http.get<FilialeRiferimento[]>(`${this.apiEndpoint}/filiali`).pipe(
        catchError((error) => {
          console.log ('Error - getFilialiRiferimento', error);
          return of(null);
        })
    );
  }
}
