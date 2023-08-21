'use client'

import React, { useState } from 'react'
import Dropdown from './Dropdown';
import Search from './Search';
import TableRow from './TableRow';
import TableHead from './TableHead';
import TablePagination from './TablePagination';
import { Select } from '@mantine/core';

const OverviewTable = () => {
    const [value, setValue] = useState<string | null>('10');

    return (

        <div className="relative overflow-x-auto sm:rounded-lg">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-950 from-60% to bg-purple-900 ">
                <div className='flex items-center gap-4 lg:self-end'>
                    <h3 className='text-base font-semibold text-white'>Items</h3>
                    <div className='w-20 md:w-40'>
                        <Select
                            data={[
                                { value: '5', label: '5' },
                                { value: '10', label: '10' },
                                { value: '25', label: '25' },
                            ]}
                            placeholder="Select category"
                            searchable
                            size='xs'
                            value={value}
                            radius='lg'
                            width={10}
                            onChange={setValue} />
                    </div>
                </div>
                <Search />
            </div>
            <table className="w-full text-sm text-left text-gray-500 ">
                <TableHead />
                <tbody>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map(_ => (
                            <TableRow key={crypto.randomUUID()} />
                        ))
                    }
                </tbody>
            </table>
            <TablePagination />
        </div>

    )
}

export default OverviewTable;