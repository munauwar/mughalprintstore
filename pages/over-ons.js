import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion';

function Posters() {
    return (
        <>
            <Head>
                <title>Mughal Print Store - Over ons</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="b-gray-100 overflow-y-hidden">
                <div className="w-full flex flex-wrap">
                    <div className="relative rounded-lg w-full bg-gray-100 dark:bg-neutral-900 dark:rounded-none transition mx-auto lg:flex md:flex-wrap items-center pt-12 sm:pt-24 pb-12 lg:pb-24">
                        <div className="w-full lg:w-3/6 font-mono">
                            <p className="text-3xl text-center text-red-500">About us.</p>
                            <motion.div
                                initial={{x: 200, opacity: 0}} 
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.2}}
                                className="w-11/12 lg:w-4/5 md:mx-auto mx-auto text-base dark:text-white">
                                Wij bevinden ons al ruim 30 jaar in het vakgebied. Al sinds 1990 kunt u bij ons terecht voor printen, drukwerk, visitekaartjes en ook voor het ontwerpen van logo's.
                                Met ons uitgebreide expertise zijn wij uitgegroeid tot een full service print & copy shop.
                                Wij verwelkomen je graag en zullen je helpen met allerlei uiteenlopende kopieer en print producten.
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-3/6">
                            <motion.div 
                                initial={{y: 200, opacity: 0}} 
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.2}}
                                className="text-center mt-5">
                                <Image
                                    alt="about-image"
                                    src="/asset/images/mughalprintstore.jpeg"
                                    priority={true}
                                    width={350}
                                    height={500}
                                />  
                                <span className="block text-xs dark:text-white">Foto gemaakt door: Van Wou voor Jou</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posters;
