import React from 'react'
import LandlordHeader from './LandlordHeader';
import LanlordSidebar from './LandlordSidebar';

const LandlordLayout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col bg-slate-50">
            <LandlordHeader />
            <div>
                <LanlordSidebar />
                <main className='lg:ml-80'>{children}</main>
            </div>
        </div>
    )
}

export default LandlordLayout;