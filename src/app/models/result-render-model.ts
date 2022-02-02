
export interface ResultRenderModel {
    okResult?: ResultModel;
    koResult?: ResultModel;
}

export interface ResultModel {
    message: string;
    enabled: boolean;
}
