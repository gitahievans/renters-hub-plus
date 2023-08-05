import Image from 'next/image'
import React from 'react'
import house from '@/public/images/house.jpg';
import Link from 'next/link';
import location from '@/public/images/location.png';



const ProductDetails = () => {
    return (
        <div className={`max-w-sm xl:max-w-md bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 `}>
            <Link href="#">
                <Image className={`rounded-t-lg hover:brightness-75 transition-all duration-500`} src={house} alt="House" />
            </Link>
            <div className={` flex flex-col gap-3 p-4`}>
                <h1 className={`mb-2 text-[12.5px] font-semibold uppercase'  text-xl md:text-2xl tracking-tight text-black`}>Three Bedroom houses near Oloibon</h1>
                <div className='flex gap-2 items-center'>
                    <Image src={location} alt='pin-location' className='w-8' />
                    <h2 className={`text-gray-600 uppercase'text-[12.5px]' `}>Rongai, Tuskys</h2>
                </div>
                <p className={`mb-3 font-semibold text-gray-600  text-lg `}>Ksh. 125000 per month</p>
            </div>
        </div>
    )
}

export default ProductDetails;