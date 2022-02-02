import { ChartData } from "../common/pie-chart/chartData";

export interface MonitoraggioDTO{
    tipologia:string
    totale:string
    items:ChartData[]
}