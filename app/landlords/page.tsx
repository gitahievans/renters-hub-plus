'use client'

import React from 'react'
import Logo from "@/public/icons/house-location.png";
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import Link from 'next/link';
import OverviewTable from '@/components/Landlords/OverviewTable/OverviewTable';
import userIcon from '@/public/icons/user.png';

const Overview = () => {

    return (
        <div className='flex flex-col gap-4 min-h-screen p-1 my-2 md:max-w-3xl lg:max-w-7xl mx-auto'>
            <div className='flex flex-col gap-4 w-full lg:w-1/2  bg-white p-2 rounded-lg bg-gradient-to-r from-gray-800 from-50% to-purple-900 text-white'>
                <div className='w-full flex justify-between items-center '>
                    <div className='flex flex-col gap-3'>
                        <h1>Welcome <span className='font-semibold text-green-500'>Evans Gitahi</span>
                        </h1>
                        <div className='flex gap-2'>
                            <p>Account Status: </p>
                            <p className='text-yellow-400'>Pending</p>
                        </div>
                    </div>
                    <Image src={userIcon} alt='logo' className='w-20 ring-2 ring-white rounded-full bg-slate-200' />
                </div>
                <hr />
                <h2>Manage your property here: <span className='font-semibold text-green-500'>13 Property</span></h2>
                <CustomButton text='Add property' btnType='button' styles='rounded-lg bg-gray-200 text-black hover:bg-blue-800 hover:text-white md:w-1/2' />
            </div>
            <div className='flex flex-col gap-4 mx-auto w-full bg-gray-600 p-2 rounded-lg'>
                <div className='w-full flex justify-between items-center '>
                    <p className='text-white text-xl font-semibold'>Your property</p>
                </div>
                <OverviewTable />
            </div>
        </div>
    )
}

export default Overview;