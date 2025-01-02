import React, { useState } from 'react'
import bns from '../assets/BNS/bns.jpg'
import bnss from '../assets/BNS/bnss.jpg'
import bsa from '../assets/BNS/bsa.jpg'
function BNS() {
    const [selectedTable, setSelectedTable] = useState(null);

    const handleLearnMoreClick = (targetId) => {
        setSelectedTable(targetId);
    };
    return (
        <>
            <div id='bns'>
                <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
                    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group" data-spotlight>
                            <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                    </div>
                                    <div className="flex flex-col h-full items-center text-center">
                                        <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                        <img className="inline-flex rounded-3xl" src={bns} width="200" height="200" alt="Card 01" />
                                    </div>
                                        <div className="grow mb-5">
                                            <h2 className="text-xl text-slate-200 font-bold mb-1">Bhartiya Nyay Snahita</h2>
                                            <p className="text-sm text-slate-500">The Bhartiya Nyay Sanhita is a pivotal legal framework aimed at modernizing India's criminal justice system by consolidating and updating laws to ensure justice, efficiency, and transparency in legal proceedings.</p>
                                        </div>
                                        <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="/bns-info">
                                            <svg className="fill-slate-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                                                <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                                            </svg>
                                            <span>Learn More</span>
                                        </a>
                
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                    </div>
                                    <div className="flex flex-col h-full items-center text-center">
                                        <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                        <img className="inline-flex rounded-3xl" src={bnss} width="200" height="200" alt="Card 02" />
                                    </div>
                                        <div className="grow mb-5">
                                            <h2 className="text-xl text-slate-200 font-bold mb-1">Bhartiya Nagrik Suraksha Sanhita</h2>
                                            <p className="text-sm text-slate-500">The Bhartiya Nagrik Suraksha Sanhita is a comprehensive legislative framework designed to enhance citizen safety and security in India by addressing various aspects of criminal law and public safety. </p>
                                        </div>
                                        <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                            <svg className="fill-slate-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                                                <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                                            </svg>
                                            <span>Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
                                <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                                    <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                                    </div>
                                    <div className="flex flex-col h-full items-center text-center">
                                        <div className="relative inline-flex">
                                        <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
                                        <img className="inline-flex rounded-3xl" src={bsa} width="200" height="200" alt="Card 03" />
                                    </div>
                                        <div className="grow mb-5">
                                            <h2 className="text-xl text-slate-200 font-bold mb-1">Bharatiya Sakshya Adhiniyam</h2>
                                            <p className="text-sm text-slate-500">The Bharatiya Sakshya Adhiniyam is a significant legislative framework that governs the laws related to the admissibility and evaluation of evidence in Indian courts, ensuring a fair and transparent judicial process.</p>
                                        </div>
                                        <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                            <svg className="fill-slate-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                                                <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
                                            </svg>
                                            <span>Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Tables Section --> */}
                
                    
                </main>
                <div className="flex flex-col items-center justify-center  bg-[#0F172A]">
                    <a
                        className="group relative inline-block focus:outline-none focus:ring m-4"
                        href="https://bns-leap.netlify.app/ipc-search-by-keyword.html" target='blank'
                    >
                        <span
                            className="absolute rounded-lg inset-0 translate-x-1.5 translate-y-1.5 bg-teal-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                        ></span>
                        <span
                            className="relative rounded-lg inline-block border-double border-2  border-current bg-teal-300 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                        >
                            Search BNS Sections by Keyword
                        </span>
                    </a>
                    <a
                        className="group relative inline-block focus:outline-none focus:ring m-4"
                        href="https://bns-leap.netlify.app/ipc-search-by-section.html" target='blank'
                    >
                        <span
                            className="absolute rounded-lg inset-0 translate-x-1.5 translate-y-1.5 bg-teal-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
                        ></span>
                        <span
                            className="relative rounded-lg inline-block border-double border-2  border-current bg-teal-300 px-8 py-4 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
                        >
                            IPC to BNS Sections
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default BNS