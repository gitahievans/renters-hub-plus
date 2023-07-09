'use client'

import Image from 'next/image';
import React from 'react'
import whatsapp from '@/public/icons/whatsapp.svg';
import { useMediaQuery } from '@mantine/hooks';

const Contact = () => {
    const xsScreen = useMediaQuery('(max-width: 359px)')
    return (
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium  ">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-400 focus:ring-primary-500 focus:border-primary-500 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="Leave a comment..."></textarea>
                    </div>
                    <div className={`flex items-center justify-between w-full `}>
                        <button type="submit" className="btn py-3 px-5 text-sm font-medium text-center rounded-3xl sm:w-fit  focus:ring-4 focus:outline-none bg-accent-color h-fit text-white ">Send message</button>
                        <button type="button" className="btn flex items-center px-5 text-sm font-medium text-center rounded-3xl sm:w-fit  focus:ring-4 focus:outline-none h-fit bg-[#16be45] text-white "><Image src={whatsapp} alt='Whatsapp' className='w-6 md:w-12' /><span className='text-sm'>WhatsApp</span></button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Contact;