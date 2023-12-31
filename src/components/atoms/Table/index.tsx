'use client'

import {
  DataGrid,
  GridRowsProp as RowsProps,
  GridColDef as ColumnsProps,
  DataGridProps,
  ptBR,
} from '@mui/x-data-grid'

type TableProps = DataGridProps & {
  pageSize?: number
}

export type { RowsProps, ColumnsProps, TableProps }

export default function Table({
  columns,
  rows,
  apiRef,
  pageSizeOptions,
  pageSize,
}: TableProps) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      autoHeight
      className="!text-gray-500"
      sx={{
        border: 'none',
        '& .MuiDataGrid-cell:focus': { outline: 'none' },
        '& .MuiDataGrid-columnHeader:focus': { outline: 'none' },
      }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize ?? 25,
          },
        },
      }}
      loading={rows.length === 0}
      pageSizeOptions={pageSizeOptions ?? [25, 50, 100]}
      disableRowSelectionOnClick
      columnVisibilityModel={{ id: false }}
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      apiRef={apiRef}
    />
  )
}
