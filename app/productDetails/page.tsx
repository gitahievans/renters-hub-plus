'use client'

import React, { useRef } from 'react'
import { Carousel } from '@mantine/carousel';
import house from '@/public/images/house.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay'
import manageIcon from '@/public/icons/property.png'
import apartmentIcon from '@/public/icons/apartment.png'
import homeIcon from '@/public/icons/home.png'
import locationIcon from '@/public/icons/house-location.png';
import keyIcon from '@/public/icons/home-key.png';
import CustomButton from '@/components/CustomButton';
import whatsAppIcon from '@/public/icons/whatsapp-icon.svg';
import callIcon from '@/public/icons/calling.png';
import shareIcon from '@/public/icons/share.png';

const ProductDetails = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));

    const keyFeatures = [
        "Rentable detached Dsq for 15-20k",
        "Spacious living room open to a huge balcony with a good view",
        "Spacious closed kitchen plan with enough storage",
        "Laundry area",
        "Guest cloakroom",
        "Elevators",
        "Borehole water",
        "Swimming pool",
        "Gym",
        "Ample parking",
        "Backup generator"
    ];

    return (
        <div className='min-h-screen bg-slate-100 flex flex-col gap-8 py-4 px-2 lg:px-10 '>
            <div className='flex flex-col gap-3'>
                <Carousel align='start' slideGap='sm' withControls withIndicators loop
                    breakpoints={[
                        { minWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 'xs' },
                    ]}
                >
                    <Carousel.Slide>
                        <Image src={house} alt='house' />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image src={house} alt='house' />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image src={house} alt='house' />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image src={house} alt='house' />
                    </Carousel.Slide>
                </Carousel>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        <Image src={homeIcon} alt='pin-location' className='w-6' />
                        <h1 className='font-semibold uppercase'>Three Bedroom houses near Oloibon</h1>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <Image src={apartmentIcon} alt='pin-location' className='w-6' />
                        <h3 className='font-font-2'>Nuru Apartmaments | Ksh: <span>12,500/ month</span></h3>
                    </div>
                    <div className='flex gap-2 items-center '>
                        <Image src={keyIcon} alt='pin-location' className='w-6' />
                        <h3 className='font-font-2'>Ksh: <span>12,500/ month</span></h3>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={locationIcon} alt='pin-location' className='w-6' />
                        <h6 className='text-sm font-medium'>Location: <span className='font-semibold'>Rongai, Tuskys</span></h6>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image src={manageIcon} alt='pin-location' className='w-6' />
                        <h6 className='text-sm font-medium'>Managed by: <span>Convayers Real Estate</span></h6>
                    </div>
                </div>
            </div>

            
            <article >
                <h1 className='text-2xl font-semibold'>Key Features</h1>
                <ol className='list-disc list-inside font-font-2'>
                    {keyFeatures.map(feature => (
                        <li key={crypto.randomUUID()}>{feature}</li>
                    ))}
                </ol>
            </article>

            <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-center gap-3 flex-wrap'>
                    <CustomButton btnType='button' text='Call' styles='px-4 bg-transparent text-gray-700 text-xs md:text-sm  hover:bg-accent-color hover:text-white border-gray-600 transition-all duration-500 rounded-xl' source={callIcon} altText='call' />
                    <CustomButton btnType='button' text='WhatsApp' styles='px-4 bg-transparent text-gray-700 text-xs md:text-sm hover:bg-accent-color transition-all duration-500 rounded-xl hover:text-white border-gray-600 ' source={whatsAppIcon} altText='whatsapp' />
                    <CustomButton btnType='button' text='Share' styles='px-4 bg-transparent text-gray-700 text-xs md:text-sm hover:bg-accent-color transition-all duration-500 rounded-xl hover:text-white border-gray-600' source={shareIcon} altText='share' />
                </div>
                <textarea rows={4} className='border-2 border-gray-300 rounded-lg hover:bg-gray-200 focus:bg-transparent focus:border-2 focus:border-app-green focus:outline-none transition-all duration-500'></textarea>
            </div>


            <div className="w-full p-2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.198073975731!2d36.87763315359073!3d-1.294837218923431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1683237762159!5m2!1sen!2ske"
                    className="w-full" height="650" allowFullScreen={true} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default ProductDetails;