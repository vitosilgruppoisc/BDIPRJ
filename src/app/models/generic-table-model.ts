import { ColDef, GridOptions } from 'scam-bdi-uikit';

export interface GenericTableModel {
    domLayout: string;
    gridOptions: GridOptions;
    rowData: any;
    columnDefs: ColDef[];
    pagination: boolean;
    columnsFitAvailable: boolean;
    enableCsvExport: boolean;
    enablePdfExport: boolean;
    enableColumnSelection: boolean;
    enableMessageEmptyResult?: boolean;
    enableMessageOnSizeResultLimit?: boolean;
    searchRecordLenght?: number;
    errorCustomMessage?: string;

    currentPage?: number;
    columnToDisplay?: any [];
    columnApi?: any;
    sortModel?: any;
    filterModel?: any;
}

