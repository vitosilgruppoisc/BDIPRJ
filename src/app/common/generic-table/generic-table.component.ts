import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GenericTableModel} from '../../models/generic-table-model';
import {localeText} from '../../models';
import {exportToPdf, exportToCsv} from '../../utilities/export';
import {SpinnerEventEnum} from '../../models/enum';

@Component({
    selector: 'app-generic-table',
    templateUrl: './generic-table.component.html',
    styleUrls: ['./generic-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GenericTableComponent implements OnInit {

    localeText = localeText;
    showDropDown = false;
    columnToDisplay: any[] = [];
    columnDefs: any [] = [];
    pageSize: number;

    model: GenericTableModel;
    @Input('model') set modelValue(value: GenericTableModel) {
        this.model = value;
        this.buildColumnToDisplayForSelection();
        this.buildColumnDefToDisplay();
        this.pageSize = this.model.gridOptions.paginationPageSize;
    }

    @Output('action') actionEmitter = new EventEmitter<any>();
    @Output('paginationChanged') paginationChanged = new EventEmitter<any>();
    @Output('sortChanged') sortChanged = new EventEmitter<any>();
    @Output('filterChanged') filterChanged = new EventEmitter<any>();
    @Output('colToDisplay') colToDisplayEmitter = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
        const page = (!!this.model.currentPage ? this.model.currentPage : 0);
        if (!!this.pageSize) {
            this.model.gridOptions = {
                onGridReady: () => {
                    this.model.gridOptions.api.paginationSetPageSize(this.pageSize);
                    this.model.gridOptions.api.paginationGoToPage(page);

                    if (!!this.model.columnToDisplay) {
                        this.columnToDisplay = this.model.columnToDisplay;
                        this.columnToDisplay.forEach( ctd => {
                            const colId = ctd.colId;
                            const checked = ctd.checked;
                            const columnState = this.model.gridOptions.columnApi.getColumnState();
                            columnState.find( c => c.colId == colId).hide = !checked;
                            this.model.gridOptions.columnApi.setColumnState(columnState);
                            const colDef: any = this.model.gridOptions.columnApi.getColumn(colId).getColDef();
                            colDef.exportOptions.skipColumn = !checked;
                            this.model.gridOptions.api.sizeColumnsToFit();
                        });
                    }

                    if (!!this.model.sortModel) {
                        this.model.gridOptions.api.setSortModel(this.model.sortModel);
                    }

                    if (!!this.model.filterModel) {
                        this.model.gridOptions.api.setFilterModel(this.model.filterModel);
                    }

                    const onPaginationChanged = () => {
                        console.log('onPaginationChanged' + this.model.gridOptions.api.paginationGetCurrentPage());
                        this.paginationChanged.emit(this.model.gridOptions.api.paginationGetCurrentPage());
                    };
                    this.model.gridOptions.onPaginationChanged = onPaginationChanged;

                    const onSortChanged = () => {
                        console.log('onSortChanged' + this.model.gridOptions.api.getSortModel());
                        this.sortChanged.emit(this.model.gridOptions.api.getSortModel());
                    };
                    this.model.gridOptions.onSortChanged = onSortChanged;

                    const onFilterChanged = () => {
                        console.log('onFilterChanged' + this.model.gridOptions.api.getFilterModel());
                        this.filterChanged.emit(this.model.gridOptions.api.getFilterModel());
                    };
                    this.model.gridOptions.onFilterChanged = onFilterChanged;
                }
            };
        }
    }

    buildColumnToDisplayForSelection() {
        this.model.columnDefs.forEach( c => {
                if (c.headerName !== 'AZIONI' && c.headerName !== '') {
                    this.columnToDisplay.push( {name : c.headerName, checked: true, colId: c.colId} );
                }
            }
        );
    }

    buildColumnDefToDisplay() {
        this.columnDefs = [];
        this.model.columnDefs.forEach( cd => {
                const current_ctd = this.columnToDisplay.find(ctd => ctd.name === cd.headerName);
                if ( (!!current_ctd && !!current_ctd.checked) || cd.headerName === 'AZIONI' || cd.headerName === '') {
                    this.columnDefs.push(cd);
                }
            }
        );
    }

    manageCheck(name: string, checked: boolean, colId: any){
        this.columnToDisplay.find(ctd => ctd.name === name).checked = checked;
        if (!!this.model.gridOptions.api) {
            const columnState = this.model.gridOptions.columnApi.getColumnState();
            columnState.find( c => c.colId == colId).hide = !checked;
            this.model.gridOptions.columnApi.setColumnState(columnState);
            const colDef: any = this.model.gridOptions.columnApi.getColumn(colId).getColDef();
            colDef.exportOptions.skipColumn = !checked;
            this.model.gridOptions.api.sizeColumnsToFit();
        }

        this.colToDisplayEmitter.emit({columnToDisplay: this.columnToDisplay});
    }

    exportCsv() {
        try {
            this.showSpinner();
            const printParams = this.buildPrintParamsCsv();
            const rowData = this.model.rowData;
            console.log(rowData);
            const gridApi = this.model.gridOptions.api;
            const columnApi = this.model.gridOptions.columnApi;
            exportToCsv(printParams, gridApi, columnApi);
            this.hideSpinner();
        } catch (e) {
            this.hideSpinner();
        }
    }

    private buildPrintParamsCsv() {
        const printParams = {
            CSV_FILE_NAME: 'export.csv'
        };
        return printParams;
    }

    exportPdf() {
        try {
            this.showSpinner();
            const printParams = this.buildPrintParamsPdf();
            const gridApi = this.model.gridOptions.api;
            const columnApi = this.model.gridOptions.columnApi;
            exportToPdf(printParams, gridApi, columnApi);
            this.hideSpinner();
        } catch (e) {
            this.hideSpinner();
        }
    }

    private buildPrintParamsPdf() {
        const printParams = {
            PDF_HEADER_COLOR: '#f8f8f8',
            PDF_INNER_BORDER_COLOR: '#dde2eb',
            PDF_OUTER_BORDER_COLOR: '#babfc7',
            PDF_LOGO: location.origin + '/assets/images/logo-bdi.png',
            PDF_PAGE_ORITENTATION: 'landscape',
            PDF_WITH_HEADER_IMAGE: false,
            PDF_WITH_FOOTER_PAGE_COUNT: true,
            PDF_HEADER_HEIGHT: 25,
            PDF_ROW_HEIGHT: 15,
            PDF_ODD_BKG_COLOR: '#fcfcfc',
            PDF_EVEN_BKG_COLOR: '#ffffff',
            PDF_WITH_CELL_FORMATTING: true,
            PDF_WITH_COLUMNS_AS_LINKS: true,
            PDF_SELECTED_ROWS_ONLY: false,
            PDF_FILE_NAME: 'export.pdf'
        };
        return printParams;
    }

    private showSpinner() {
        this.actionEmitter.emit(SpinnerEventEnum.SHOW);
    }

    private hideSpinner() {
        this.actionEmitter.emit(SpinnerEventEnum.HIDE);
    }
}
