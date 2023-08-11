import React from 'react'
import LandlordHeader from './LandlordHeader';
import LanlordSidebar from './LandlordSidebar';

const LandlordLayout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <div className="bg-green-100">
            <LanlordSidebar />
            <div>
                <LandlordHeader />
                <main className="lg:ml-[280px]">{children}</main>
            </div>
        </div>
    )
}

export default LandlordLayout;