/* eslint-disable react/jsx-props-no-spreading */
'use client'

import Link from 'next/link';
import { useState } from 'react';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import Dropzone from 'react-dropzone';
import { Select } from '@mantine/core';

const SignUpForm = () => {
    const [clickedState, setClickedState] = useState(false);

    return (
        <form
            className="mt-8 flex w-full flex-col gap-5 max-w-[360px] md:max-w-md "
        >
            <div className=''>
                <input type="file" name="" id="" />
            </div>
            <div className='flex gap-2'>
                <CustomInput forHtml='firstName' labelText='First Name' placeholderTxt='First name' required={true} type='text' />
                <CustomInput forHtml='lastName' labelText='Last Name' placeholderTxt='Last name' required={true} type='text' />
            </div>
            <CustomInput forHtml='email' labelText='Email' placeholderTxt='johndoe@gmail.com' required={true} type='email' />
            <Select
                placeholder="Select gender"
                data={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' }]}
                size='lg'
                radius='md'
            />
            <CustomInput forHtml='id' labelText='ID Number' placeholderTxt='********' required={true} type='number' />

            <div className="flex flex-col">
                <label htmlFor='phoneNumber' className="block mb-2 text-sm font-semibold text-gray-900 ">Phone Number</label>
                <div className='flex gap-2'>
                    <div className='flex items-center justify-center'>
                        <p>+254</p>
                    </div>
                    <input type='tel' className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 hover:bg-gray-200 focus:bg-gray-50 transition-all duration-500 " placeholder='0720300000' required />
                </div>
            </div>
            <CustomInput forHtml='password' placeholderTxt="Set password" type="password" labelText='Set password' required={true} />
            <CustomInput forHtml='confirmPassword' placeholderTxt="Confirm Password" type="password" labelText='Confirm password' required={true} />
            <div className="relative flex items-center gap-3">
                <input type="checkbox" className='checkbox' />
                <Link
                    href="#"
                    className="text-sm text-neutral-dark"
                >
                    I Accept{' '}
                    <span className="font-semibold capitalize text-purple-600">
                        terms & conditions
                    </span>
                </Link>
            </div>
            <div className="form-control gap-1">
                <CustomButton text='Register' btnType='submit' styles='bg-accent-color text-white hover:bg-blue-900 rounded-lg'  />
            </div>
            <div className="mb-4 mt-4 flex items-center justify-center gap-2 md:max-w-sm">
                <p className="text-base text-gray-600">Already have an account?</p>
                <Link href='/landlords' className="text-sm font-semibold text-neutral-purple">
                    Log in
                </Link>
            </div>
        </form>
    );
};
export default SignUpForm;
