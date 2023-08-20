'use client'

import React from 'react'
import Logo from "@/public/icons/house-location.png";
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import Link from 'next/link';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '@/Constants/constants';

const Overview = () => {

    return (
        <div className='flex flex-col gap-3 min-h-full p-1 my-2 md:max-w-3xl lg:max-w-full mx-auto'>
            <div className='flex flex-col gap-2 w-full bg-white p-2 rounded-lg '>
                <div className='flex gap-2'>
                    <p>Username: </p>
                    <p>34495002</p>
                </div>
                <div className='flex gap-2'>
                    <p>Account Status: </p>
                    <p>Pending</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full bg-white shadow-xl p-2 rounded-lg md:mx-auto'>
                <div className='w-full flex justify-between items-center '>
                    <h1>Welcome <span className='font-semibold'>Evans Gitahi</span>
                    </h1>
                    <Image src={Logo} alt='logo' className='w-12' />
                </div>
                <hr />
                <h2>Manage your property here: <span className='font-semibold'>13 Property</span></h2>
                <CustomButton text='Add property' btnType='button' styles='rounded-lg bg-accent-color text-white hover:bg-blue-800 md:w-2/5 lg:w-1/5' />
            </div>
            <div className='flex flex-col gap-4 mx-auto w-full bg-white shadow-xl p-2 rounded-lg'>
                <div className='w-full flex justify-between items-center '>
                    <p >Latest listed property</p>
                    <Link href='#' className='text-blue-600 underline underline-offset-2 cursor-pointer'>View all</Link>
                </div>

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
        </div>
    )
}

export default Overview;