import Image from 'next/image'
import React from 'react'
import house from '@/public/icons/home.png';
import Link from 'next/link';
import editIcon from '@/public/icons/edit.png';

const ManagePropertyCard = () => {
    return (
        <article className="flex flex-col px-1 md:flex-row bg-gray-100 shadow-lg ">
            <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 lg:w-72 md:rounded-none md:rounded-l-lg" src={house}
                alt="house" />
            <div className="flex flex-col justify-center gap-6 p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Three Bedroom near Oloibon</h5>
                <div className='flex flex-col gap-4'>
                    <Link href='#' className='flex items-center gap-4 justify-center p-3 md:p-2 bg-gray-300 rounded-lg text-slate-900 '>
                        <p className='text-lg'>Edit Property</p>
                        <Image src={editIcon} alt='edit' className='w-5'/>
                    </Link>
                    <Link href='#' className='flex items-center gap-4 justify-center p-3 md:p-2 bg-red-500 rounded-lg text-slate-900 '>
                        <p className='text-lg text-gray-100'>Delete Property</p>
                        <Image src={editIcon} alt='edit' className='w-5' />
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default ManagePropertyCard