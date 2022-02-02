
export interface GetEccTranscondingRetailResponse {
    totalElements: number;
    content: EccTranscondingRetail [];
}

export interface EccTranscondingRetail {
    id: number;
    nsc: string;
    countryCode:  CountryCode;
    bic: string;
    descrizione: string;
    validFrom: string;
    validTo: string;
    utenteRichiesta: string;
    utenteValidazione: string;
}

export interface CountryCode {
    codice: string;
    descrizione?: string;
}

