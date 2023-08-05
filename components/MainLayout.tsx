import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout;