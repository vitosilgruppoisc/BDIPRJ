import { Injectable } from '@angular/core';
import {CommonService} from "./common.service";
import {SearchModel} from "../models/search";
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";
import {Observable, of} from "rxjs";
import {ReachabilityRequest, ReachabilityResponse, TranscodingResponse} from "../models/transc-ragg-model";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ReachabilityService extends CommonService {

    public searchModel: SearchModel;

    constructor(protected http: HttpClient, protected configurationService: ConfigurationService) {
        super(http, configurationService );
    }

    getReachability(reachabilityRequest: ReachabilityRequest): Observable<ReachabilityResponse> {
        const url = `${this.apiEndpointA2A}/reachability/v1.0/public`;
        return this.http.post<ReachabilityResponse>(url, reachabilityRequest);
    }
}
