
export interface GetEccReachabilityRetailResponse {
    totalElements: number;
    content: EccReachabilityRetail [];
}

export interface EccReachabilityRetail {
    id: number;
    bicInput: string;
    canale:  Canale;
    raggiungibile: boolean;
    //bicOutput: string;
    bicDiretto: string;
    descrizione: string;
    validFrom: string;
    validTo: string;
    utenteRichiesta: string;
    utenteValidazione: string;
}

export interface Canale {
    codice: string;
    descrizione?: string;
}

