import {TipoParty} from './party';

export interface GetContiResponse {
    totalElements: number;
    content: Conto [];
}

export interface Conto {
    id: number;
    bic: string;
    targetService: string;
    descrizione: string;
    pressoBdi: boolean;
    tipoConto: TipoConto;
    bicParty: string;
    tipoParty: TipoParty;
    numeroConto: string;
    mcaDefFlag: boolean;
    abi: number;
    flgMan: boolean;
    categoriaEconomica: number;
    indicatoreResidenza: string;
    dataApertura: string;
    dataChiusura: string;
    subParBicDCA: string;
    subParTsDCA: string;
    subBicPtyAnsy: string;
    subTipoPtyAnsy: string;
    subTipoSfruttAnsy: string;
    validFrom: string;
    validTo: string;
    tsModifica: string;
    utenteRichiesta: string;
    utenteValidazione: string;
}

export interface TipoConto {
    codice: string;
    descrizione?: string;
    targetService?: string;
}

export interface TipoTargetService {
    codice: string;
    descrizione?: string;
}

export interface TipoFlag {
    codice: string;
    descrizione?: string;
}

export interface InserimentoContoModel {
    idParty?: string;
    pressoBDI?: boolean;
    tipoConto?: string;
    contoDCAPadre?: string;
    backUrl?: string;
    prefixUrl?: string;
    wizardSteps?: string [];
}

export interface SfruttamentoModel {
    idParty: string;
    //idConto?: string;
    idSfruttamento?: string;
    dataInizioSfruttamento?: any;
    wizardSteps?: string [];
}
