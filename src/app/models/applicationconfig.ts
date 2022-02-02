export interface IApplicationConfig {
    apiEndpoint: string;
    stompBrokerEndpoint: string;
    production: boolean;
    activeProfile: string;
    dataOperativa: string;
    environment: string;
    gepaCoreEndpoint: string;
    gepaMonitoraggioU2AEndpoint: string;
    gepaProcedureU2AEndpoint: string;
    gepaAnagraficheU2AEndpoint: string;
    gepaAnagraficheA2AEndpoint: string;
    debug: boolean;
}
