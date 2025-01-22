import React from 'react'
import '../css/bssinfo.css';
import { Card, Typography } from "@material-tailwind/react";
function BSAInfo() {
  return (
    <>
    <div className='flex-col justify-center items-center p-9' style={{ backgroundColor: '#111827' }}>

        <div className='flex-col justify-center items-center m-10 slide-in' style={{ backgroundColor: '#111827' }}>
            <div className='flex justify-center items-center my-10'>
                <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent ">
                Bharatiya Sakshya Adhiniyam(BSA) 2023 Features
                </h1>
            </div>
            <div className='flex justify-center items-center py-11' >
                <div className='flex flex-col sm:flex-row justify-center items-center px-5 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0'>
                    {/** Container for each card **/}

                    <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-94 transform transition duration-500 hover:scale-110">
                        <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between ">
                            <b>Modernization and Technological Advancements</b>
                            <p className="mt-2">
                            The Bharatiya Sakshya Adhiniyam 2023, aims to modernize the legal framework to include electronic records and digital evidence. 
                            </p>
                        </div>
                    </div>

                
                    <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-94 transform transition duration-500 hover:scale-110">
                        <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                            <b>Consistency with Criminal Reforms</b>
                            <p className="mt-2">Over time, various amendments have been made to the IEA to align with criminal law reforms. However, these changes have led to a fragmented. 
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-94 transform transition duration-500 hover:scale-110">
                        <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                            <b>Addressing Custodial Injustices</b>
                            <p className="mt-2">
                            The IEA inadequately safeguards against custodial violence and coercion. The new Bill introduces stricter guidelines to ensure that evidence.

                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-white/95 via-blue-800 to-white/90 p-1 rounded-lg shadow-lg w-64 h-94 transform transition duration-500 hover:scale-110">
                        <div className="text-base text-gray-400 bg-gradient-to-br from-[#0d1120] to-[#3a4b8a] p-6 rounded-lg h-full flex flex-col justify-between">
                            <b>Enhanced Clarity and Efficacy in Evidence Admission</b>
                            <p className="mt-2">he Bharatiya Sakshya Adhiniyam 2023, aims to clarify the rules on admissibility of evidence, including electronic records.
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

export default BSAInfo;