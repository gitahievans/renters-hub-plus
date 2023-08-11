import React from 'react'
import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import Link from 'next/link'

const LoginForm = () => {
    return (
        <form
            className="mt-8 flex w-full flex-col gap-5 max-w-[360px] md:max-w-md "
        >
            <CustomInput forHtml='id' labelText='ID Number' placeholderTxt='********' required={true} type='number' />
            <CustomInput forHtml='password' placeholderTxt="*********" type="password" labelText='Enter Password' required={true} />
            <Link href='#' ><span>Forgot password?</span></Link>
            <CustomButton text='Login' btnType='submit' styles='bg-accent-color text-white hover:bg-blue-900 rounded-lg' />
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