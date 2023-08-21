import React from 'react'
import Dropdown from './Dropdown';
import Search from './Search';
import TableRow from './TableRow';
import TableHead from './TableHead';
import TablePagination from './TablePagination';

const OverviewTable = () => {
    return (

        <div className="relative overflow-x-auto sm:rounded-lg">
            <div className="flex items-center justify-between p-4 bg-white ">
                <div>
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                        <span className="sr-only">Action button</span>
                        Action
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <Dropdown />
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