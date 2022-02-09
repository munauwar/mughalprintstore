import React, { useState } from 'react';
import Link from 'next/link';
import { MenuItems } from './MenuItems';
import useDarkMode from './useDarkMode';

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
    const closeMobileMenu = () => setisOpen(false);
    const [colorTheme, setTheme] = useDarkMode();

    function handleClick() {
        setisOpen(!isOpen);
    }

    return (
        <nav className="bg-white font-mono shadow-md sticky top-0 z-50 dark:bg-neutral-900 transition duration-500">
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
                                <li key={id} className="py-4 px-2 text-black hover:border-b-2 hover:border-red-500 font-medium dark:text-white transition duration-500">
                                    <Link href={navigate.link} onClick={closeMobileMenu}>
                                        {navigate.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <span onClick={() => setTheme(colorTheme)} className="cursor-pointer">
                        {colorTheme === "dark" ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg> :

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>}
                    </span>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button dark:text-white transition duration-500" onClick={handleClick}>
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