import React from 'react';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';


export const Footer = () => {
    return (
        <footer className="border-t border-gray-200 dark:bg-neutral-800 transition duration-500 dark:border-t-2 dark:border-black">
            <div className="container flex-col flex-wrap px-4 py-8 sm:py-16 md:py-16 lg:py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
                <div className="justify-between flex flex-wrap">
                    <div className="px-4 mt-4 sm:mt-0 md:mt-0 lg:mt-0">
                        <h2 className="mb-2 font-bold tracking-widest text-red-500">
                            Openingstijden
                        </h2>
                        <table className="table-auto dark:text-white">
                            <tbody>
                                <tr>
                                    <td>Maandag:</td>
                                    <td>10.00 t/m 16.00</td>
                                </tr>
                                <tr>
                                    <td>Dinsdag:</td>
                                    <td>10.00 t/m 16.00</td>
                                </tr>
                                <tr>
                                    <td>Woensdag:</td>
                                    <td>10.00 t/m 16.00</td>
                                </tr>
                                <tr>
                                    <td>Donderdag:</td>
                                    <td>10.00 t/m 16.00</td>
                                </tr>
                                <tr>
                                    <td>Vrijdag:</td>
                                    <td>10.00 t/m 12.00</td>
                                </tr>
                                <tr>
                                    <td>Zaterdag:</td>
                                    <td>10.00 t/m 16.00</td>
                                </tr>
                                <tr>
                                    <td>Zondag:</td>
                                    <td>Gesloten</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="px-4 mt-4 sm:mt-0 md:mt-0 lg:mt-0 dark:text-white">
                        <h2 className="mb-2 font-bold tracking-widest text-red-500">
                            Contact
                        </h2>
                        Adres: Van Woustraat 222,<br></br>
                        1073 NB, Amsterdam <br></br>

                        Tel.: 020-777 92 92 <br></br>
                        Mob.: 06-546 840 49 <br></br>

                        Email: info@mughalprintstore.nl
                    </div>
                    <div className="inline-flex mx-auto mt-5 md:mx-0 dark:text-white">
                        <a href="https://www.linkedin.com/in/mughal-print-store-10147118/"><FaLinkedinIn size={30} className="hover:text-red-500"/></a>
                        <a href="https://www.facebook.com/mughalprintstore/?fref=ts"><FaFacebookF size={30} className="hover:text-red-500" /></a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center border-t dark:border-black pt-2 dark:text-white">
                <div className="text-base mb-4 text-center">
                    All rights reserved by @ Mughal Print Store {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
};
