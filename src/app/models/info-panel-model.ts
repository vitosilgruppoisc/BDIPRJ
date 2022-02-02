export interface InfoPanelModel {
    columnNumber: number;
    data: any [] ;
    title?: string;
}

export interface InfoPanelElement {
    label?: string;
    value?: string;
    tooltip?: Tooltip;
    style?: Style;
    button?: Button;
}

export interface Tooltip {
    value: string;
    placement: string;
}

export interface Style {
    color: string;
    fontweight: string;
}

export interface Button {
    icon: string;
    tooltip: string;
    routerLink: string;
    sessionKey?: any;
    params?: any;
    enabled: boolean;
}


