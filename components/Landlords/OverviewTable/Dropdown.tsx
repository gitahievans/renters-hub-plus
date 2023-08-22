import Link from 'next/link'
import React from 'react'

const Dropdown = () => {
    return (
        <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownActionButton">
                <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 ">Property Code</Link>
                </li>
                <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 ">Property Name</Link>
                </li>
                <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 ">Posted on</Link>
                </li>
                <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 ">Status</Link>
                </li>
            </ul>
            <div className="py-1">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete User</Link>
            </div>
        </div>
    )
}

export default Dropdown