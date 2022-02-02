import { Injectable } from '@angular/core';
import {SearchModel} from "../models/search";
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";
import {RSQLUtils} from "../utilities/rsqlUtil";
import {FormatterUtils} from "../utilities/formatterUtils";
import {Observable, of} from "rxjs";
import {GetPartiesResponse, Party} from "../models/party";
import {catchError, tap} from "rxjs/operators";
import {
  EccTranscondingIngrosso,
  GetEccTranscondingIngrossoResponse,
  TipoVerso
} from "../models/ecc-transcoding-ingrosso";
import {TipoConto} from "../models/conto";
import {TipoContoEccTranscodingIngrossoEnum, TipoFlagEnum, TipoVersoEnum} from "../models/enum";

@Injectable({
  providedIn: 'root'
})
export class EccTranscodingIngrossoService {

  private apiEndpoint = '';

  public searchModel: SearchModel;

  constructor(private http: HttpClient, private configurationService: ConfigurationService, private rSQLUtils: RSQLUtils, private formatterUtils: FormatterUtils) {
    this.configurationService.config$.subscribe(config => {
      this.apiEndpoint = config.gepaAnagraficheU2AEndpoint;
    });
  }

  getEccezioniTranscodingIngrosso(searchString: string): Observable<GetEccTranscondingIngrossoResponse> {
    return this.http.get<GetEccTranscondingIngrossoResponse>(`${this.apiEndpoint}/eccTranscodingIngrosso?${searchString}`).pipe(
        tap(res => console.log(res))
    );
  }

  getEccezioneTranscodingIngrosso(idEcc: string): Observable<EccTranscondingIngrosso> {
    return this.http.get<EccTranscondingIngrosso>(`${this.apiEndpoint}/eccTranscodingIngrosso/${idEcc}`).pipe(
        tap(res => console.log(res)),
        catchError((error) => {
              console.log('Error - getEccezioneTranscodingIngrosso', error);
              return of(null);
            }
        )
    );
  }

  getTipiConto(): Observable<TipoConto[]> {
    return of ( [ {codice: TipoContoEccTranscodingIngrossoEnum.RTGS.valueOf(), descrizione: 'RTGS'}, {codice: TipoContoEccTranscodingIngrossoEnum.MCAD.valueOf(), descrizione: 'MCAD'}, {codice: TipoContoEccTranscodingIngrossoEnum.MCA.valueOf(), descrizione: 'MCA'}]);
  }

  getTipiVerso(): Observable<TipoVerso[]> {
    return of ( [ {codice: TipoVersoEnum.AB.valueOf(), descrizione: 'AB'}, {codice: TipoVersoEnum.BA.valueOf(), descrizione: 'BA'}]);
  }
}
