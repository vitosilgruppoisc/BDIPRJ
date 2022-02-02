import printDoc from "./printdoc";


function exportToPdf(printParams, gridApi, columnApi) {
    printDoc(printParams, gridApi, columnApi);
}

function exportToCsv(printParams, gridApi, columnApi) {

    const replacer = (key, value) => (value === null ? '' : value);

    const header = [];
    columnApi.getAllDisplayedColumns().forEach(col => {
        const colm = columnApi.getColumn(col.getColId());
        const exportOptions = colm.colDef.exportOptions;
        if (exportOptions && exportOptions.skipColumn) {
            return;
        }
        const headerCell = {headerName: col.colDef.headerName, colId:  col.colDef.colId};
        header.push(headerCell);
    });

    const rowsToExport = [];
    gridApi.forEachNodeAfterFilterAndSort(node => {
       let rowToExport = header.map(c => {
            let cellValue = gridApi.getValue(c.colId, node);
            return {headerName: c.headerName, value: cellValue};
        });
        rowsToExport.push(rowToExport);
    });

    const dataArray = [];
    dataArray.push(header.map(c => c.headerName).join(','));
    rowsToExport.forEach( row => {
        dataArray.push(row.map( c => c.value).join(','));
    });
    const csvArray = dataArray.join('\r\n');
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = printParams.CSV_FILE_NAME;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

export { exportToPdf, exportToCsv };
