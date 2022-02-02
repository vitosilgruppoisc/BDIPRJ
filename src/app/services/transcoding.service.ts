import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import {SearchModel} from "../models/search";
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";
import {Observable, of} from "rxjs";
import {CanaleTrRaItem, TranscodingRequest, TranscodingResponse} from "../models/transc-ragg-model";
import {TipoConto} from "../models/conto";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TranscodingService extends CommonService {

  public searchModel: SearchModel;

  constructor(protected http: HttpClient, protected configurationService: ConfigurationService) {
    super(http, configurationService );
  }

  getTranscoding(transcodingRequest: TranscodingRequest): Observable<TranscodingResponse> {
    const url = `${this.apiEndpointA2A}/transcoding/v1.0/public`;
    return this.http.post<TranscodingResponse>(url, transcodingRequest);
  }
}
