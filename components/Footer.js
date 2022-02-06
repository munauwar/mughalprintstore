import Head from 'next/head';
import React from 'react';

export const Footer = () => {
    return (
        <footer className="border-t border-gray-200">
            <div className="container flex flex-col flex-wrap px-4 py-8 sm:py-16 md:py-16 lg:py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
                <div className="justify-between flex flex-wrap">
                    <div className="px-4 mt-4 sm:mt-0 md:mt-0 lg:mt-0">
                        <h2 className="mb-2 font-bold tracking-widest text-red-500">
                            Openingstijden
                        </h2>
                        <table class="table-auto">
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
                    <div className="px-4 mt-4 sm:mt-0 md:mt-0 lg:mt-0">
                        <h2 className="mb-2 font-bold tracking-widest text-red-500">
                            Contact
                        </h2>
                        Adres: Van Woustraat 222,<br></br>
                        1073 NB, Amsterdam <br></br>

                        Tel.: 020-777 92 92 <br></br>
                        Mob.: 06-546 840 49 <br></br>

                        Email: info@mughalprintstore.nl

                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="flex justify-center">
                <div className="text-base mb-4 text-center">
                    All rights reserved by @ Mughal Print Store {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    )
};
