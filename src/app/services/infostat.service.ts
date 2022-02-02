import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {Observable, of} from 'rxjs';
import {TipoParty} from '../models/party';
import {catchError} from 'rxjs/operators';
import {MfiCode} from '../models/mfi-code';

@Injectable({
  providedIn: 'root'
})
export class InfostatService {

  private apiEndpoint = '';

  constructor(private http: HttpClient, private configurationService: ConfigurationService) {
    this.configurationService.config$.subscribe(config => {
      this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
    });
  }

  getInfostatValue(mfiCode: string): Observable<MfiCode> {
    return this.http.get<MfiCode>(`${this.apiEndpoint}/soggettiInfostat/${mfiCode}`).pipe();
  }
}
