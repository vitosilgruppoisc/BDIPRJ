import {FilialeRiferimento} from './filiale';
export interface GetPartiesResponse {
    totalElements: number;
    content: Party [];
}

export interface Party {
    id: number;
    bic: string;
    tipoParty: TipoParty;
    defaultAbi: any;
    nome: string;
    filialeRiferimento: FilialeRiferimento;
    mfiCode: string;
    categoriaEconomica: any;
    indicatoreResidenza: string;
    dataApertura: string;
    dataChiusura: string;
    validFrom: string;
    validTo: string;
    tsModifica: string;
    utenteRichiesta: string;
    utenteValidazione: string;
}

export interface TipoParty {
    codice: string;
    descrizione?: string;
}
