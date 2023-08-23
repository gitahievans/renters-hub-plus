import Image from 'next/image'
import React from 'react'
import house from '@/public/images/house.jpg';
import Link from 'next/link';
import editIcon from '@/public/icons/edit.png';
import location from '@/public/images/location.png';
import deleteIcon from '@/public/icons/delete.png';

const ManagePropertyCard = () => {
    return (
        <article className="flex flex-col px-1 md:flex-row bg-gray-50 shadow-lg p-2 justify-between lg:max-w-4xl rounded-xl">
            <Image className="object-cover w-full rounded-t-lg md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg" src={house}
                alt="house" />
            <div className="flex flex-col gap-6 p-4 md:w-1/2 ">
                <div className='bg-yellow-100 p-3 rounded-lg'>
                    <p className='font-font-2'>Property pending. Awating approval</p>
                </div>
                <div className='shadow-sm'>
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Three Bedroom near Oloibon</h5>
                    <div className='flex gap-2 items-center'>
                        <Image src={location} alt='pin-location' className='w-8' />
                        <h2 className={`text-gray-600 uppercase`}>Rongai, Tuskys</h2>
                    </div>
                    <ol className='list-disc ml-12'>
                        <li>
                            <span>Phone to recieve call: </span>
                            <span>07328732879</span>
                        </li>
                        <li>
                            <span>Posted on: </span>
                            <span>09/12/2023 - 1:30AM</span>
                        </li>
                    </ol>
                </div>
                <div className='flex gap-4'>
                    <Link href='#' className='flex items-center gap-2 justify-center px-2 py-3 md:p-3 bg-blue-600 rounded-lg text-slate-900 '>
                        <p className='text-sm text-gray-200'>Edit Property</p>
                        <Image src={editIcon} alt='edit' className='w-5' />
                    </Link>
                    <Link href='#' className='flex items-center gap-2 justify-center px-2 py-3 md:p-3 bg-red-500 rounded-lg text-slate-900 '>
                        <p className='text-sm text-gray-100'>Delete Property</p>
                        <Image src={deleteIcon} alt='edit' className='w-5' />
                    </Link>
                </div>
                <div className='bg-yellow-100 p-3 rounded-lg'>
                    <p className='font-font-2'>Property is vacant</p>
                </div>
                <Link href='#' className='p-3 md:p-2 bg-green-500 rounded-lg  max-w-fit'>
                    <p className='text-lg text-gray-100'>Mark as Occupied</p>
                </Link>
            </div>
        </article>
    )
}

export default ManagePropertyCard