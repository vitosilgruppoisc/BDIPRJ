import {Party, TipoParty} from './party';
import {FilialeRiferimento} from './filiale';
import {TipoConto} from './conto';
import {CountryCode} from "./ecc-transcoding-retail";
import {Canale} from "./ecc-reachability-retail";

export interface GetTasksResponse {
    totalElements: number;
    content: Task [];
}

export interface Task {
    id?: number;
    operazione?: OperazioneTask;
    tipoTask?: TipoTask;
    stato?: StatoTask;
    tsInserimento?: string;
    userReq?: string;
    tsValidate?: string;
    userValidate?: string;
    noteRifiuto?: string;
    recordId?: string;
}

export interface OperazioneTask {
    codice?: string;
    descrizione?: string;
}

export interface TipoTask {
    codice?: string;
    descrizione?: string;
}

export interface StatoTask {
    codice?: string;
    descrizione?: string;
}

export interface TaskParty extends Task {
    idParty?: number;
    bic?: string;
    tipoParty?: TipoParty;
    defaultAbi?: number;
    nome?: string;
    filialeRiferimento?: FilialeRiferimento;
    mfiCode?: string;
    categoriaEconomica?: number;
    indicatoreResidenza?: string;
    dataApertura?: string;
    dataChiusura?: string;
    validFrom?: string;
    validTo?: string;
    tsModifica?: string;
    utenteRichiesta?: string;
    utenteValidazione?: string;

    idPartyToEdit?: boolean;
    bicToEdit?: boolean;
    tipoPartyToEdit?: boolean;
    defaultAbiToEdit?: boolean;
    nomeToEdit?: boolean;
    filialeRiferimentoToEdit?: boolean;
    mfiCodeToEdit?: boolean;
    categoriaEconomicaToEdit?: boolean;
    indicatoreResidenzaToEdit?: boolean;
    dataAperturaToEdit?: boolean;
    dataChiusuraToEdit?: boolean;
    validFromToEdit?: boolean;
    validToToEdit?: boolean;
    tsModificaToEdit?: boolean;
    utenteRichiestaToEdit?: boolean;
    utenteValidazioneToEdit?: boolean;

    idPartyOrig?: number;
    bicOrig?: string;
    tipoPartyOrig?: TipoParty;
    defaultAbiOrig?: number;
    nomeOrig?: string;
    filialeRiferimentoOrig?: FilialeRiferimento;
    mfiCodeOrig?: string;
    categoriaEconomicaOrig?: number;
    indicatoreResidenzaOrig?: string;
    dataAperturaOrig?: string;
    dataChiusuraOrig?: string;
    validFromOrig?: string;
    validToOrig?: string;
    tsModificaOrig?: string;
    utenteRichiestaOrig?: string;
    utenteValidazioneOrig?: string;
}

export interface TaskConto extends Task {
    idConto?: number;
    abi?: number;
    bic?: string;
    bicParty?: string;
    categoriaEconomica?: number;
    dataApertura?: string;
    dataChiusura?: string;
    descrizione?: string;
    flgMan?: boolean;
    indicatoreResidenza?: string;
    mcaDefFlag?: boolean;
    numeroConto?: string;
    pressoBdi?: boolean;
    subBicPtyAnsy?: string;
    subParBicDca?: string;
    subParTsDca?: string;
    subTipoPtyAnsy?: string;
    subTipoSfruttAnsy?: string;
    targetService?: string;
    tipoConto?: TipoConto;
    tipoParty?: TipoParty;
    tsModifica?: string;
    utenteRichiesta?: string;
    utenteValidazione?: string;
    validFrom?: string;
    validTo?: string;

    abiToEdit?: boolean;
    bicPartyToEdit?: boolean;
    bicToEdit?: boolean;
    categoriaEconomicaToEdit?: boolean;
    dataAperturaToEdit?: boolean;
    dataChiusuraToEdit?: boolean;
    descrizioneToEdit?: boolean;
    flgManToEdit?: boolean;
    indicatoreResidenzaToEdit?: boolean;
    mcaDefFlagToEdit?: boolean;
    numeroContoToEdit?: boolean;
    pressoBdiToEdit?: boolean;
    subBicPtyAnsyToEdit?: boolean;
    subParBicDcaToEdit?: boolean;
    subParTsDcaToEdit?: boolean;
    subTipoPtyAnsyToEdit?: boolean;
    subTipoSfruttAnsyToEdit?: boolean;
    targetServiceToEdit?: boolean;
    tipoContoToEdit?: boolean;
    tipoPartyToEdit?: boolean;
    tsModificaToEdit?: boolean;
    utenteRichiestaToEdit?: boolean;
    utenteValidazioneToEdit?: boolean;
    validFromToEdit?: boolean;
    validToToEdit?: boolean;

    idContoOrig?: number;
    abiOrig?: number;
    bicOrig?: string;
    bicPartyOrig?: string;
    categoriaEconomicaOrig?: number;
    dataAperturaOrig?: string;
    dataChiusuraOrig?: string;
    descrizioneOrig?: string;
    flgManOrig?: boolean;
    indicatoreResidenzaOrig?: string;
    mcaDefFlagOrig?: boolean;
    numeroContoOrig?: string;
    pressoBdiOrig?: boolean;
    subBicPtyAnsyOrig?: string;
    subParBicDcaOrig?: string;
    subParTsDcaOrig?: string;
    subTipoPtyAnsyOrig?: string;
    subTipoSfruttAnsyOrig?: string;
    targetServiceOrig?: string;
    tipoContoOrig?: TipoConto;
    tipoPartyOrig?: TipoParty;
    tsModificaOrig?: string;
    utenteRichiestaOrig?: string;
    utenteValidazioneOrig?: string;
    validFromOrig?: string;
    validToOrig?: string;
}

export interface TaskSfruttamentoAnsyDca extends Task  {

    bicConto?: string;
    targetServiceConto?: string;
    bicParty?: string;
    tipoParty?: TipoParty;
    tsModifica?: string;
    utenteRichiesta?: string;
    utenteValidazione?: string;
    validFrom?: string;
    validTo?: string;

    idSfruttamentoDcaOrig?: string;
    bicContoOrig: string;
    targetServiceContoOrig: string;
    bicPartyOrig: string;
    tipoPartyOrig?: TipoParty;
    tsModificaOrig?: string;
    utenteRichiestaOrig?: string;
    utenteValidazioneOrig?: string;
    validFromOrig?: string;
    validToOrig?: string;
}

export interface TaskEccTranscodingIngrosso extends Task {
    idEccOrig?: number;
    abi?: string;
    cab?:  string;
    bicConto?: string;
    tipoConto?: string;
    verso?: string;
    descrizione?: string;
    validFrom?: string;
    validTo?: string;
    utenteRichiesta?: string;
    utenteValidazione?: string;

    idEccToEdit?: boolean;
    abiToEdit?: boolean;
    cabToEdit?: boolean;
    bicContoToEdit?: boolean;
    tipoContoToEdit?: boolean;
    versoToEdit?: boolean;
    descrizioneToEdit?: boolean;
    validFromToEdit?: boolean;
    validToToEdit?: boolean;
    utenteRichiestaToEdit?: boolean;
    utenteValidazioneToEdit?: boolean;

    abiOrig?: string;
    cabOrig?:  string;
    bicContoOrig?: string;
    tipoContoOrig?: string;
    versoOrig?: string;
    descrizioneOrig?: string;
    validFromOrig?: string;
    validToOrig?: string;
    utenteRichiestaOrig?: string;
    utenteValidazioneOrig?: string;
}

export interface TaskEccTranscodingRetail extends Task {
    idEccOrig?: number;
    nsc: string;
    countryCode:  CountryCode;
    bic: string;
    descrizione: string;
    validFrom: string;
    validTo: string;
    utenteRichiesta: string;
    utenteValidazione: string;

    nscToEdit?: boolean;
    countryCodeToEdit?: boolean;
    bicToEdit?: boolean;
    descrizioneToEdit?: boolean;
    validFromToEdit?: boolean;
    validToToEdit?: boolean;
    utenteRichiestaToEdit?: boolean;
    utenteValidazioneToEdit?: boolean;

    nscOrig?: string;
    countryCodeOrig?:  CountryCode;
    bicOrig?: string;
    descrizioneOrig?: string;
    validFromOrig?: string;
    validToOrig?: string;
    utenteRichiestaOrig?: string;
    utenteValidazioneOrig?: string;
}

export interface TaskEccReachabilityRetail extends Task {
    idEccOrig?: number;
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

    bicInputToEdit?: boolean;
    canaleToEdit?: boolean;
    raggiungibileToEdit?: boolean;
    //bicOutputToEdit?: boolean;
    bicDirettoToEdit?: boolean;
    descrizioneToEdit?: boolean;
    validFromToEdit?: boolean;
    validToToEdit?: boolean;
    utenteRichiestaToEdit?: boolean;
    utenteValidazioneToEdit?: boolean;

    bicInputOrig?: string;
    canaleOrig?:  Canale;
    raggiungibileOrig?: boolean;
    //bicOutputOrig?: string;
    bicDirettoOrig?: string;
    descrizioneOrig?: string;
    validFromOrig?: string;
    validToOrig?: string;
    utenteRichiestaOrig?: string;
    utenteValidazioneOrig?: string;
}
