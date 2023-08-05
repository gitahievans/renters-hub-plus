/* eslint-disable react/no-unescaped-entities */
import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import Logo from '@/public/icons/house.gif'

const Landlords = () => {
    return (
        <div className='min-h-[100dvh] min-w-full py-4 px-1 lg:px-10'>
            <section className='flex flex-col items-center '>
                <Image src={Logo} alt='RentersHub' className='mb-12' />
                <h1 className='text-base font-medium text-center'>Agents/Landlords (Property Manager) Login
                </h1>
                <LoginForm />
            </section>
        </div>
    )
}

export default Landlords;