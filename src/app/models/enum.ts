export enum SpinnerEventEnum {
    SHOW = 'SHOW',
    HIDE = 'HIDE'
}

export enum TipoOperazioneEnum {
    INS = 'INS',
    UPD = 'UPD',
    DEL = 'DEL'
}

export enum StatoTaskEnum {
    CREATED = 'CREATED',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
}

export enum TipoTaskEnum {
    PARTY = 'PARTY',
    CONTO = 'CONTO',
    SFRUTTAMENTO = 'SFRUTT_DCA',
    ECC_TRANSCODIFICA_INGROSSO = 'ECC_TR_ING',
    ECC_TRANSCODIFICA_DETTAGLIO = 'ECC_TR_RET',
    ECC_RAGGIUNGIBILITA_DETTAGLIO = 'ECC_RA_RET'
}

export enum TipoFlagEnum {
    SI = 'SI',
    NO = 'NO'
}

export enum TipoPartyEnum {
    ANSY = 'ANSY'
}

export enum TipoContoEnum {
    RTGS_DCA = 'RTGS_DCA',
    RTGS_CB = 'RTGS_CB',
    RTGS_SA = 'RTGS_SA'
}

export enum TipoSfruttamentoEnum {
    BICOMP = 'CNOT',
    SDD_SCT = 'STEP',
    SDD_B2B = 'SDDB',
    SDD_CORE = 'SDDC'
}

export enum TipoContoEccTranscodingIngrossoEnum {
    RTGS = 'RTGS',
    MCA = 'MCA',
    MCAD = 'MCAD'
}

export enum TipoVersoEnum {
    AB = 'AB',
    BA = 'BA'
}

export enum CountryCodeForNscRuleValidationEnum {
    IT = 'IT',
    SM = 'SM'
}

export enum CanaleEnum {
    STEP2 = 'STEP2',
    T2 = 'T2'
}

export enum TipologiaRichiestaTrRaEnum {
    NSC_CC = 'NSC_CC',
    IBAN = 'IBAN',
    BIC = 'BIC'
}

export enum CircuitoEnum {
    SEPA = 'SEPA',
    TARGET2 = 'TARGET2'
}

export enum PaymentType{
    INCOMING = 'incoming',
    OUTGOING = 'outgoing'
}

export enum SearchType{
    CCT = 'cct',
    FICT = 'fict',
    RETURN = 'return',
    RECALL = 'recall'
}