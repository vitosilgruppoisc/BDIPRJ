
export interface ActionRenderModel {
    detailButton?: ButtonModel;
    modifyButton?: ButtonModel;
    //cancellazione logica
    deleteButton?: ButtonModel;
    //cancellazione fisica
    eraseButton?: ButtonModel;
    selectButton?: ButtonModel;
}

export interface ButtonModel {
    label: string;
    routerLink: string;
    params: any;
    enabled: boolean;
    sessionKey?: any;
}
