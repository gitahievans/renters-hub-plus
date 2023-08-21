import Image from 'next/image';
import React from 'react'
import avatar from '@/public/icons/profile-icon.png';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';

const Profile = () => {
    return (
        <section className='min-h-[100dvh] max-w-sm mx-auto'>
            <div className='flex items-center justify-center'>
                <Image src={avatar} alt='Evans' width={150} />
                <h1 className='font-font-2 font-semibold text-xl'>Evans Gitahi</h1>
            </div>
            <div className='flex flex-col gap-4'>
                <CustomInput labelText='First Name' forHtml='firstName' placeholderTxt='Evans' required={false} type='text' />
                <CustomInput labelText='Last Name' forHtml='lastName' placeholderTxt='Gitahi' required={false} type='text' />
                <CustomInput labelText='Email' forHtml='email' placeholderTxt='email@email.com' required={false} type='email' />
                <CustomInput labelText='Phone Number' forHtml='phoneNumber' placeholderTxt='**********' required={false} type='tel' />
            </div>
            <div>
                <CustomButton btnType='button' text='Save' styles='w-full mt-10 bg-accent-color text-white'/>
            </div>
        </section>
    )
}

export default Profile;