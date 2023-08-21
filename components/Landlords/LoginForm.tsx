import React from 'react'
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'
import Link from 'next/link'

const LoginForm = () => {
    return (
        <form
            className="mt-8 flex w-full flex-col gap-5 max-w-[360px] md:max-w-md "
        >
            <CustomInput forHtml='id' labelText='ID Number' placeholderTxt='********' required={false} type='number' />
            <CustomInput forHtml='password' placeholderTxt="*********" type="password" labelText='Enter Password' required={false} />
            <Link href='#' ><span>Forgot password?</span></Link>
            <Link href='/landlords' className='w-full'>
                <CustomButton text='Login' btnType='submit' styles='bg-accent-color text-white hover:bg-blue-900 rounded-lg w-full' />
            </Link>
            <div className="mb-4 mt-4 flex items-center justify-center gap-2 md:max-w-sm">
                <p className="text-base text-gray-600">No account yet?</p>
                <Link href='/landlords-auth/signup' className="text-sm font-semibold text-neutral-purple">
                    Register
                </Link>
            </div>
        </form>
    )
}

export default LoginForm