export interface TranscodingRequest {
    requestList: RequestTrRaItem[];
}

export interface TranscodingResponse {
    responseList: ResponseTrRaItem[];
}

export interface ReachabilityRequest {
    requestList: RequestTrRaItem[];
}

export interface ReachabilityResponse {
    responseList: ResponseTrRaItem[];
}

export interface RequestTrRaItem  {
    itemId?: string;
    dataRif: string;
    circuito?: string;
    iban?: string;
    nsc?: 	string;
    countryCode?: string;
    bic?: string;
}

export interface ResponseTrRaItem {
    itemId: string;
    itemStatusCode: number;
    itemErrorMessage?: string;
    circuiti: CircuitoTrRaItem [];

}

export interface CircuitoTrRaItem {
    circuito: string;
    circuitoStatusCode: number;
    circuitoErrorMessage?: string;
    canaliList?: CanaleTrRaItem[];
    trInfo?: TrascodingInfo;
}

export interface CanaleTrRaItem {
    canale: string;
    reachableBic: string;
    bicPartDiretto: string;
}

export interface TrascodingInfo {
    nsc?: string;
    countryCode?: string;
    trBicList?: BicInfo [];
}

export interface BicInfo {
    bic: string;
    tipo: string;
}

export interface BicTranscodingResultInfo {
    circuito: string;
    circuitoStatusCode: number;
    circuitoErrorMessage?: string;
    tipo?: string;
    bic?: string;
}

export interface BicRechabilityResultInfo {
    circuito: string;
    circuitoStatusCode: number;
    circuitoErrorMessage?: string;
    canale?: string;
    bic?: string;
}
