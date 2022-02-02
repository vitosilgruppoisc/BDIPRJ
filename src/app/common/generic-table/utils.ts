export function createStandardColumnDef(id: string, headerName: string, field: string, valueGetter?: ((data:any) => string)) {
    if (valueGetter)
        return { colId: (id), headerName: headerName, field: field, filter: true, sortable: true, resizable: true, valueGetter: valueGetter, exportOptions: { skipColumn: false } }
    else
        return { colId: (id), headerName: headerName, field: field, filter: true, sortable: true, resizable: true, exportOptions: { skipColumn: false } }

}