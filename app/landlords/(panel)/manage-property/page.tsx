'use client'

import React from 'react'
import { columns, rows } from '@/Constants/constants';
import { DataGrid } from '@mui/x-data-grid';

const ManageProperty = () => {
  return (
    <div className='flex flex-col gap-3 min-h-full p-1 my-2 md:max-w-3xl lg:max-w-full mx-auto'>
      <h1 className='text-xl font-semibold'>Manage property here</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  )
}

export default ManageProperty;