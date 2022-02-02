import { Injectable } from '@angular/core';
import {SearchModel} from "../models/search";
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";
import {RSQLUtils} from "../utilities/rsqlUtil";
import {FormatterUtils} from "../utilities/formatterUtils";
import {Observable, of} from "rxjs";
import {EccTranscondingIngrosso, GetEccTranscondingIngrossoResponse} from "../models/ecc-transcoding-ingrosso";
import {catchError, tap} from "rxjs/operators";
import {Party} from "../models/party";
import {TipoConto} from "../models/conto";
import {TipoContoEccTranscodingIngrossoEnum} from "../models/enum";
import {EccTranscondingRetail, GetEccTranscondingRetailResponse} from "../models/ecc-transcoding-retail";
import {CommonService} from "./common.service";

@Injectable({
  providedIn: 'root'
})
export class EccTranscodingRetailService extends CommonService {

  public searchModel: SearchModel;

  constructor(protected http: HttpClient, protected configurationService: ConfigurationService) {
    super(http, configurationService );
  }

  getEccezioniTranscodingRetail(searchString: string): Observable<GetEccTranscondingRetailResponse> {
    return this.http.get<GetEccTranscondingRetailResponse>(`${this.apiEndpointU2A}/eccTranscodingRetail?${searchString}`).pipe(
        tap(res => console.log(res))
    );
  }

  getEccezioneTranscodingRetail(idEcc: string): Observable<EccTranscondingRetail> {
    return this.http.get<EccTranscondingRetail>(`${this.apiEndpointU2A}/eccTranscodingRetail/${idEcc}`).pipe(
        tap(res => console.log(res)),
        catchError((error) => {
              console.log('Error - getEccezioneTranscodingRetail', error);
              return of(null);
            }
        )
    );
  }
}
