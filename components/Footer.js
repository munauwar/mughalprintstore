import Head from 'next/head';
import React from 'react';

export const Footer = () => {
    return (
        <footer className="border-t border-gray-200">
            <div
                className="
                    container
                    flex flex-col flex-wrap
                    px-4
                    py-16
                    mx-auto
                    md:items-center
                    lg:items-start
                    md:flex-row md:flex-nowrap
                "
            >
                <div className="flex-shrink-0 w-64 mx-auto text-center md:text-left">
                    <a className="
                        flex
                        items-center
                        justify-center
                        text-2xl
                        font-bold
                        text-red-500
                        md:justify-start
                        w:
                        "
                    >
                        Mughal Print Store
                    </a>
                </div>
                <div className="justify-between w-3/5 lg:flex">
                    <div className="px-4 lg:w-3/6 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-red-500">
                            Openingstijden
                        </h2>
                        Maandag:
                            10.00 t/m 16.00 <br></br>
                        Dinsdag:
                            10.00 t/m 16.00 <br></br>
                        Woensdag:
                            10.00 t/m 16.00 <br></br>
                        Donderdag:
                            10.00 t/m 16.00 <br></br>
                        Vrijdag:
                            10.00 t/m 12.00 <br></br>
                        Zaterdag:
                            10.00 t/m 16.00 <br></br>
                        Zondag:
                            Gesloten 
                    </div>
                    <div className="px-4 lg:w-3/6 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-red-500">
                            Contact
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center divide-red-700">
                <div className="text-base">
                    All rights reserved by @ Mughal Print Store {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
};
