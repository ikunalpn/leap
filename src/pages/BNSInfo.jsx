import React from 'react';
import '../css/bnsinfo.css';
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["BHARATIYA NYAYA SANHITA, 2023", "INDIAN PENAL CODE, 1860 "];

const TABLE_ROWS = [
    { BNS: "Section 4: Punishments", IPC: "Section 53: Punishments" },
    { BNS: "Section 11: Solitary confinement", IPC: "Section 73: Solitary confinement" },
    { BNS: "Section 20: Act of a child under seven years of age", IPC: "Section 82: Act of a child under seven years of age" },
    { BNS: "Section 22: Act of a person of unsound mind", IPC: "Section 84: Act of a person of unsound mind" },
    { BNS: "Section 45: Abetment of a thing", IPC: "Section 107: Abetment of a thing" },
    { BNS: "Section 61: Criminal conspiracy", IPC: "Section 120A: Definition of criminal conspiracy" },
    { BNS: "Section 63: Rape", IPC: "Section 375: Rape" },
    { BNS: "Section 80: Dowry death", IPC: "Section 304B: Dowry death" },
    { BNS: "Section 85: Husband or relative of husband of a woman subjecting her to cruelty", IPC: "Section 498A: Husband or relative of husband of a woman subjecting her to cruelty" },
    { BNS: "Section 100: Culpable homicide", IPC: "Section 299: Culpable homicide" },
    { BNS: "Section 101: Murder", IPC: "Section 300: Murder" },
    { BNS: "Section 106: Causing death by negligence", IPC: "Section 304A: Causing death by negligence" },
    { BNS: "Section 108: Abetment of suicide", IPC: "Section 306: Abetment of suicide" },
    { BNS: "Section 109: Attempt to murder", IPC: "Section 307: Attempt to murder" },
    { BNS: "Section 129: Criminal force", IPC: "Section 350: Criminal force" },
    { BNS: "Section 130: Assault", IPC: "Section 351: Assault" },
    { BNS: "Section 137: Kidnapping", IPC: "Section 359: Kidnapping" },
    { BNS: "Section 138: Abduction", IPC: "Section 362: Abduction" },
    { BNS: "Section 189: Unlawful assembly", IPC: "Section 141: Unlawful assembly" },
    { BNS: "Section 194: Affray", IPC: "Section 159: Affray" },
    { BNS: "Section 270: Public nuisance", IPC: "Section 268: Public nuisance" },
    { BNS: "Section 303: Theft", IPC: "Section 378: Theft" },
    { BNS: "Section 308: Extortion", IPC: "Section 383: Extortion" },
    { BNS: "Section 309: Robbery", IPC: "Section 390: Robbery" },
    { BNS: "Section 310: Dacoity", IPC: "Section 391: Dacoity" },
    { BNS: "Section 316: Criminal breach of trust", IPC: "Section 405: Criminal breach of trust" },
    { BNS: "Section 318: Cheating", IPC: "Section 415: Cheating" },
    { BNS: "Section 329: Criminal trespass and house-trespass", IPC: "Section 441: Criminal trespass" },
    { BNS: "Section 351: Criminal intimidation", IPC: "Section 503: Criminal intimidation" },
    { BNS: "Section 356: Defamation", IPC: "Section 499: Defamation" }
]
    ;


function BNSInfo() {
    return (
        <>
            <div className='flex-col justify-center items-center p-5' style={{ backgroundColor: '#111827' }}>


                <div style={{ backgroundColor: '#111827', color: 'white' }} className='flex justify-center items-center pt-5'>
                    <div className='flex-col m-3 p-2'>
                        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent ">
                            Bharatiya Nyaya Sanhita (BNS) 2023 repeals Indian Penal Code (IPC) 1860
                        </h1>
                        <h1 className="pl-20 pt-5 bg-gradient-to-r from-green-300 via-red-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent ">
                            Re-numbered Relevant Sections of the Indian Penal Code 1860
                        </h1>
                    </div>
                </div>

                <div className='flex justify-center items-center' style={{ backgroundColor: '#111827' }}>
                <Card className="h-full w-full mx-20" style={{ overflow: 'hidden' }}>
    <table className="w-full min-w-max table-auto text-left rounded-lg bg-white">
        <thead>
            <tr>
                {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-gray-300 bg-gray-100 p-4">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold text-xl leading-none opacity-70"
                        >
                            {head}
                        </Typography>
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {TABLE_ROWS.map(({ BNS, IPC }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";
                const rowBackground = index % 2 === 0 ? "bg-gray-50" : "bg-gray-100";

                return (
                    <tr key={BNS} className={rowBackground}>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {BNS}
                            </Typography>
                        </td>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {IPC}
                            </Typography>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</Card>


                </div>

                <div className='flex-col justify-center items-center m-10' style={{backgroundColor: '#111827'}}>
                    <div className='flex justify-center items-center my-10'>
                        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent ">
                            Bharatiya Nyaya Sanhita (BNS) 2023 Features
                        </h1>
                    </div>
                    <div className='flex justify-center items-center py-5' >
                        <div className='flex flex-col sm:flex-row justify-center items-center px-5 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0'>
                            {/** Container for each card **/}

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-72">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                                    <b>Emphasis on Pramana (valid knowledge)</b>
                                    <span className="mt-2">Relies on perception, inference, comparison, testimony, and presumption to establish valid knowledge</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-72">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                                    <b>Logical Reasoning and Debate (Tarka)</b>
                                    <span className="mt-2">Logical Reasoning and Debate (Tarka)</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-72">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                                    <b>Systematic Approach to Epistemology and Metaphysics</b>
                                    <span className="mt-2">Provides a philosophical framework for understanding reality, knowledge, and the self.</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-72">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                                    <b>Focus on Truth and Justice</b>
                                    <span className="mt-2">Aims to ascertain the truth and deliver justice through careful interpretation of facts and laws.</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-72">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                                    <b>Consistency in Pramana (valid knowledge)</b>
                                    <span className="mt-2">Relies on perception, inference, comparison, testimony, and presumption to establish valid knowledge</span>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </>
    );
}

export default BNSInfo;
