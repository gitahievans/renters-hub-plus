import React from 'react'
import sortIcon from '@/public/icons/sort.png';
import Image from 'next/image';
import Link from 'next/link';

const TableHead = () => {
    return (
        <thead className="text-xs uppercase bg-gray-300 text-gray-800">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                        Property Code
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        Property Name
                        <Link href="#">
                            <Image src={sortIcon} alt='sort' className='h-5 w-5'/>
                        </Link>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        Posted on
                        <Link href="#">
                            <Image src={sortIcon} alt='sort' className='h-5 w-5' />
                        </Link>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        Status
                        <Link href="#">
                            <Image src={sortIcon} alt='sort' className='h-5 w-5'/>
                        </Link>
                    </div>
                </th>
            </tr>
        </thead>
    )
}

export default TableHead;