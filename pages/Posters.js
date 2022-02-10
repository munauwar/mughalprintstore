import Head from 'next/head'
import Image from 'next/image'


function Posters() {
    return (
        <>
            <Head>
                <title>Mughal Print Store - Posters</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="b-gray-100 overflow-y-hidden">
                <div className="w-full flex flex-wrap">
                    <div className="relative rounded-lg w-full bg-gray-100 dark:bg-neutral-900 dark:rounded-none transition mx-auto lg:flex md:flex-wrap items-center pt-12 sm:pt-24 pb-12 lg:pb-24">
                        <div className="w-full lg:w-3/6">
                            <p className="text-3xl text-center text-red-500">Lijntekeningen</p>
                            <div className="text-center mt-5">
                                <Image
                                    alt="lijn-poster"
                                    src="/asset/images/lijn.jpg"
                                    width={393}
                                    height={516}
                                />

                                <table class="table-auto mx-auto border-2 border-red-500 dark:text-white w-4/6">
                                    <thead className="bg-red-500 opacity-80 dark:text-white">
                                        <tr>
                                            <th>Oplage</th>
                                            <th>A2</th>
                                            <th>A1</th>
                                            <th>A0</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1 - 5</td>
                                            <td>€ 10,99	</td>
                                            <td>€ 13,49</td>
                                            <td>€ 19,99</td>
                                        </tr>
                                        <tr>
                                            <td>6 - 15</td>
                                            <td>€ 9,99</td>
                                            <td>€ 12,49</td>
                                            <td>€ 18,49</td>
                                        </tr>
                                        <tr>
                                            <td>16 ></td>
                                            <td>€ 8,99</td>
                                            <td>€ 11,49</td>
                                            <td>€ 17,49</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/6">
                            <p className="text-3xl text-center text-red-500 pt-11 lg:pt-0">Budget posters</p>
                            <div className="text-center mt-5">
                                <Image
                                    alt="budget-poster"
                                    src="/asset/images/budget.jpg"
                                    width={393}
                                    height={516}
                                />

                                <table class="table-auto mx-auto border-2 dark:text-white border-red-500 w-4/6">
                                    <thead>
                                        <tr className="bg-red-500 opacity-80 dark:text-white">
                                            <th>Oplage</th>
                                            <th>A2</th>
                                            <th>A1</th>
                                            <th>A0</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1 - 5</td>
                                            <td>€ 10,99	</td>
                                            <td>€ 13,49</td>
                                            <td>€ 19,99</td>
                                        </tr>
                                        <tr>
                                            <td>6 - 15</td>
                                            <td>€ 9,99</td>
                                            <td>€ 12,49</td>
                                            <td>€ 18,49</td>
                                        </tr>
                                        <tr>
                                            <td>16 ></td>
                                            <td>€ 8,99</td>
                                            <td>€ 11,49</td>
                                            <td>€ 17,49</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posters;
