import React, { useState } from 'react';
import Link  from 'next/link';
import { MenuItems } from './MenuItems';

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
    const closeMobileMenu = () => setisOpen(false);

    function handleClick() {
        setisOpen(!isOpen);
    }

    return (
        <nav className="bg-white font-mono shadow-md sticky top-0 z-50">
            <div className="px-4 h-24 flex space-x-4 justify-between">
                <div className="py-4 px-2">
                    <Link href="/" className="text-white">
                        {/* TODO: Change this to Image from nextjs */}
                        <img src="https://www.mughalprintstore.nl/assets/img/about.svg" alt="Logo" className="mr-2"></img>
                    </Link>
                </div>
                <div className="hidden md:flex items-center">
                    <ul className="flex">
                        {
                            MenuItems.map((navigate, id) => (
                                <li key={id} className="py-4 px-2 text-black hover:text-red-700 font-medium">
                                    <Link href={navigate.link} onClick={closeMobileMenu}>
                                        {navigate.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button" onClick={handleClick}>
                        <svg className="w-10 h-10" fill="none" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path className={isOpen ? "hidden" : "w-10"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            <path className={!isOpen ? "hidden" : "w-10"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`${isOpen ? "flex" : "hidden"} justify-center items-center bg-gray-300 h-[calc(100vh_-_theme(space.24))]`}>
                <ul className="w-screen md:hidden">
                    {
                        MenuItems.map((navigate, id) => (
                            <li key={id} className="text-center hover:bg-gray-600 block text-lg px-2 py-4 text-black">
                                <Link href={navigate.link}>
                                    {navigate.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav >
    )
}

export default Navbar;