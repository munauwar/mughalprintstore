import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion';

function print() {
    return (
        <>
            <Head>
                <title>Mughal Print Store - Print</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="b-gray-100 overflow-y-hidden">
                <div className="w-full flex flex-wrap">
                    <div className="relative rounded-lg w-full bg-gray-100 dark:bg-neutral-900 dark:rounded-none transition mx-auto lg:flex md:flex-wrap items-center pt-12 sm:pt-24 pb-12 lg:pb-24">
                        <div className="w-full lg:w-3/6 font-mono">
                            <p className="text-3xl text-center text-red-500">Print</p>
                            <motion.div 
                                initial={{x: 200, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.2}}
                                className="w-11/12 lg:w-4/5 md:mx-auto mx-auto text-base dark:text-white">
                                Wij helpen u graag met het tot stand brengen van al uw printopdrachten, in zowel klein- als grootformaat.
                                De grootste voordeel van digitaal printen is dat er hierbij geen minimale afname is vastgesteld.
                                Of het nou 10 A4-prints zijn of 1000 A3-prints, het is allemaal mogelijk en dat in de meeste gevallen ook binnen 1 werkdag!

                                Klik op de onderstaande button voor de prijslijst.

                                <a href="asset/Prijslijst_MUGHAL.pdf" target="_blank" download>
                                    <button className="mb-12 bg-gray-300 hover:bg-red-600 text-gray-800 font-bold py-2 px-4 flex-wrap rounded inline-flex mt-5 float-right">
                                        <svg className="fill-current w-4 h-4 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                        <span>Download</span>
                                    </button>
                                </a>                           
                            </motion.div>
                        </div>

                        <div className="lg:w-3/6">
                            <motion.div 
                                initial={{y: 200, opacity: 0}} 
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.2}} className="relative text-center ml-5 mr-5 mt-14">
                                <Image
                                    alt="home-image"
                                    src="/asset/images/slider2.jpg"
                                    width={600}
                                    height={450}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default print;
