import Head from 'next/head'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div exit={{ opacity: 0}} initial="initial" animate="animate">
            <Head>
                <title>Mughal Print Store - Home</title>
                <meta name="description" content="Al ruim 30 jaar ervaring. Wij zijn de complete leverancier voor al uw print & drukwerk." />
                <meta name="keywords" content="printen, drukken, printshop, copywinkel" />
                <meta name="robots" content="index,follow"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="py-8 bg-gray-100 dark:bg-neutral-900 transition duration-500 overflow-y-hidden">
                <div className="w-full px-6 text-center">
                    <div className="mt-8 relative rounded-lg bg-red-500 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                            <div className="text-2xl md:text-3xl flex flex-col items-center text-white font-mono">
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                        .typeString("Complete leverancier voor al uw print & drukwerk.")
                                        .start();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
                        <motion.div 
                            initial={{x: 200, opacity: 0 }}
                            animate={{x: 0, opacity: 1}}
                            transition={{delay: 0.2}}
                            className="relative sm:w-2/3 w-11/12">
                            <Image
                                alt="home-image"
                                src="/asset/images/slider1.jpg"
                                priority={true}
                                width={900}
                                height={500}
                            />  
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
