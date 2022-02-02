import {Party, TipoParty} from './party';
import {Conto} from './conto';

export interface ContoSfruttamentoDcaParty {
    conto: Conto;
    sfruttamentoDca: SfruttamentoDca;
    party: Party;
}

export interface  ContoAsSettlmentBank {
    conto: Conto;
    sfruttamentoDca: SfruttamentoDca;
}

export interface SfruttamentoDca {
    id: number;
    bicConto: string;
    targetServiceConto: string;
    bicParty: string;
    tipoParty: TipoParty;
    tsModifica: string;
    utenteRichiesta: string;
    utenteValidazione: string;
    validFrom: string;
    validTo: string;
}
