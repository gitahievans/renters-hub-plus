import Image from 'next/image'
import React from 'react'
import house from '@/public/images/house.jpg';
import CustomButton from './CustomButton';
import Link from 'next/link';
import location from '@/public/images/location.png';

type twoColType = {
    twoColumns: boolean | undefined;
}

const PropertyCard = ({ twoColumns }: twoColType) => {
    return (
        <div className={`max-w-sm xl:max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 `}>
            <Link href="#">
                <Image className={`rounded-t-lg hover:brightness-75 transition-all duration-500`} src={house} alt="House" />
            </Link>
            <div className={`p-${twoColumns ? 2 : 5} flex flex-col gap-${twoColumns ? 2 : 3}`}>
                <h1 className={`mb-2 ${twoColumns ? 'text-[12.5px] font-semibold uppercase' : null} text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>Three Bedroom houses near Oloibon</h1>
                <div className='flex gap-2 items-center'>
                    <Image src={location} alt='pin-location' className='w-8' />
                    <h2 className={`text-gray-300 uppercase ${twoColumns ? 'text-[12.5px]' : null}`}>Rongai, Tuskys</h2>
                </div>
                <p className={`mb-3 font-semibold text-white dark:text-gray-300 text-lg ${twoColumns ? 'text-sm' : null}`}>Ksh. 125000 per month</p>
                <div className={`${twoColumns ? 'hidden' : 'flex'} items-center justify-between`}>
                    < CustomButton btnType='button' text='Contact' styles='px-6 bg-transparent text-white text-xs md:text-sm  hover:bg-accent-color transition-all duration-500 rounded-xl' />
                    < CustomButton btnType='button' text='Location' styles='px-6 bg-transparent text-white text-xs md:text-sm hover:bg-accent-color transition-all duration-500 rounded-xl' />
                </div>
                <div className={`${twoColumns ? 'flex' : 'hidden'} text-white text-base items-center justify-between gap-2`}>
                    <button className='px-2 py-1 rounded-lg border hover:bg-accent-color'>Contact</button>
                    <button className='px-2 py-1 rounded-lg border '>Location</button>
                </div>
            </div>
        </div>

    )
}

export default PropertyCard