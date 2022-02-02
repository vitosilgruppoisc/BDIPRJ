import {TipoConto} from "./conto";
export interface GetEccTranscondingIngrossoResponse {
    totalElements: number;
    content: EccTranscondingIngrosso [];
}

export interface EccTranscondingIngrosso {
    id: number;
    abi: string;
    cab:  string;
    bicConto: string;
    tipoConto: string;
    verso: string;
    descrizione: string;
    validFrom: string;
    validTo: string;
    utenteRichiesta: string;
    utenteValidazione: string;
}

export interface TipoConto {
    codice: string;
    descrizione?: string;
}

export interface TipoVerso {
    codice: string;
    descrizione?: string;
}
