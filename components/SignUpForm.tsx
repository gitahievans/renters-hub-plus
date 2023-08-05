/* eslint-disable react/jsx-props-no-spreading */
'use client'

import Link from 'next/link';
import { useState } from 'react';
import CustomButton from './CustomButton';


const SignUpForm = () => {
    const [clickedState, setClickedState] = useState(false);

    return (
        <form
            className="mt-8 flex w-full flex-col gap-5 md:max-w-sm "
        >
            <div className='flex gap-2'>
                <div className='flex-1'>
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 ">First Name</label>
                    <input type="email" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="First name" required />
                </div>
                
            </div>

            <div className='flex-1'>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 ">First Name</label>
                <input type="email" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="First name" required />
            </div>
            <div className='flex-1'>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-900 ">First Name</label>
                <input type="email" className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder="First name" required />
            </div>
            <div className="relative flex items-center gap-3">
                <input type="checkbox" className='checkbox' />
                <Link
                    href="#"
                    className="text-sm font-bold text-neutral-dark"
                >
                    Accept{' '}
                    <span className="font-semibold uppercase text-neutral-purple">
                        terms & conditions
                    </span>
                </Link>
            </div>
            <div className="form-control gap-1">
                <CustomButton text='Register' btnType='submit' />
            </div>
        </form>
    );
};
export default SignUpForm;
