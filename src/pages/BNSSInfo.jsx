import React from 'react'
import '../css/bnssinfo.css';
import { Card, Typography } from "@material-tailwind/react";
function BNSSInfo() {
  return (
       <>
            <div className='flex-col justify-center items-center p-9' style={{ backgroundColor: '#111827' }}>

                <div className='flex-col justify-center items-center m-10 slide-in' style={{ backgroundColor: '#111827' }}>
                    <div className='flex justify-center items-center my-10'>
                        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent ">
                           Bhartiya Nagrik Suraksha Sanhita(BNSS) Features
                        </h1>
                    </div>
                    <div className='flex justify-center items-center py-11' >
                        <div className='flex flex-col sm:flex-row justify-center items-center px-5 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0'>
                            {/** Container for each card **/}

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-80 transform transition duration-500 hover:scale-110">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between ">
                                    <b>Separation of Offenses</b>
                                    <p className="mt-2">
                                    It categorizes offenses into cognizable and non-cognizable. For cognizable offenses, police can arrest and start investigations without a warrant. Non-cognizable offenses require a warrant and, in some cases.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-80 transform transition duration-500 hover:scale-110">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                                    <b>Medical Examination</b>
                                    <p className="mt-2">
                                    The CrPC allows such examinations, including in rape cases, by a registered medical practitioner upon request from at least a sub-inspector. The BNSS permits any police officer to request such an examination.

                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-80 transform transition duration-500 hover:scale-110">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                                    <b>Forensic Investigation</b>
                                    <p className="mt-2">Mandatory for crimes punishable by seven years or more. It requires forensic experts to collect and record evidence using mobile or electronic devices. States without forensic facilities must use those in other states.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-80 transform transition duration-500 hover:scale-110">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                                    <b>Nature of Offenses</b>
                                    <p className="mt-1">
                                    It deals with various offenses, from traffic violations to murder. It differentiates between bailable and non-bailable offenses, determining who has the right to bail. This helps streamline the judicial process.

                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-80 transform transition duration-500 hover:scale-110">
                                <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                                    <b>Hierarchy of Courts</b>
                                    <p className="mt-1">The CrPC establishes a hierarchy from Magistrate’s Courts to Supreme Court. The BNSS omits provisions for designating metropolitan areas. This change simplifies the legal framework.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                



            </div>
            </>
  );
}

export default BNSSInfo;