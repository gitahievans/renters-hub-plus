'use client'

import Image from 'next/image';
import React from 'react'
import whatsappIcon from '@/public/icons/whatsapp.svg';
import { useMediaQuery } from '@mantine/hooks';

const Contact = () => {
    const xsScreen = useMediaQuery('(max-width: 359px)')
    return (
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                    <div className='flex items-center w-full gap-2'>
                        <div className='flex-1'>
                            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 ">First Name</label>
                            <input type="email" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="First name" required />
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Last Name</label>
                            <input type="email" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="Last name" required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 ">Your email</label>
                        <input type="email" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-semibold  ">Subject</label>
                        <input type="text" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-semibold ">Your message</label>
                        <textarea rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-400 focus:ring-primary-500 focus:border-primary-500 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="Leave a comment..."></textarea>
                    </div>
                    <div className={`flex items-center justify-between w-full `}>
                        <button type="submit" className="btn py-3 px-5 text-sm font-medium text-center rounded-3xl sm:w-fit  focus:ring-4 focus:outline-none bg-accent-color h-fit hover:bg-[#272e40] text-white ">Send message</button>
                        <button type="submit" className="btn flex items-center px-5 text-sm font-medium text-center rounded-3xl sm:w-fit  focus:ring-4 focus:outline-none h-fit bg-[#16be45] hover:bg-[#272e40] "><Image src={whatsappIcon} alt='WhatsappUs' className='w-6 md:w-12 ' /><span className='text-sm text-black font-semibold '>WhatsApp</span></button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Contact;