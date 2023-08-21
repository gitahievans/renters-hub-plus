'use client'

import { landlordsSideBarItems } from '@/Constants/constants';
import { SidebarContext } from '@/Context/SidebarContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import accountIcon from "@/public/icons/account-icon.svg";
import dropArrow from '@/public/icons/dropdown-arrow.svg';

const LanlordSidebar = () => {
    const { sidebarOpen } = useContext(SidebarContext)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <aside id="default-sidebar" className={`w-72 h-screen transition-transform ${sidebarOpen ? '' : '-translate-x-full lg:translate-x-0'} lg:block lg:w-72 fixed left-0 z-50 h-screen border-r border-r-gray-300`} aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200">
                <ul className="space-y-5 font-medium">
                    {
                        landlordsSideBarItems.map(item => (
                            <li key={crypto.randomUUID()}>
                                <Link href={item.href}>
                                    <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-accent-color hover:text-white group">
                                        <Image src={item.icon} alt={item.altText} />
                                        <span className="ml-3">{item.text}</span>
                                    </div>
                                </Link>
                            </li>

                        ))
                    }
                    <button type="button" onClick={toggleDropdown} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-500 rounded-lg group" aria-controls="dropdown-example" >
                        <Image src={accountIcon} alt='account' />
                        <span className="flex-1 ml-3 text-left whitespace-nowrap">My Account</span>
                        <Image src={dropArrow} alt='down' />
                    </button>
                    <ul id="dropdown-example" className={`py-2 space-y-2 ${dropdownOpen ? 'block' : 'hidden'}`}>
                        <li>
                            <Link href="/landlords/profile" className="flex items-center w-full p-2 text-gray-900 transition duration-500 rounded-lg pl-11 group hover:bg-accent-color hover:text-white">Edit Profile</Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-500 rounded-lg pl-11 group hover:bg-accent-color hover:text-white">Logout</Link>
                        </li>
                    </ul>
                </ul>
            </div>
        </aside>
    )
}

export default LanlordSidebar;