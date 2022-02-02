export interface Payment{
    dataEsecuzione: string,
    idProceduraUtente: number,
    idStato: string,
    uetr: string,
    amount: number,
    valuta: string,
    idGEPA: string,
    idPU: string,
    idTipoOperazione: string,
    idCircuitoRegolamento: string,
    idPayment: number
}