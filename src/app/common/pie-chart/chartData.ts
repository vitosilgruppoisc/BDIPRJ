export interface ChartData{
    name:string,
    value:number,
    color?:string,
    idTipiOperazione: string[],
}

export enum LegendType{
    CLICK,
    FILTER,
    SELECT,
    STATIC
}

export function getEnumValue(input:LegendType):string {
    switch(input){
        case LegendType.CLICK:
            return 'multiple'
        case LegendType.FILTER:
            return 'multiple'
        case LegendType.SELECT:
            return 'multiple'
        case LegendType.STATIC:
            return 'false'
    }
    return 'false'
}