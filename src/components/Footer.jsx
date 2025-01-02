import React from 'react'
import logo from '../assets/logo2.png';
import { Link, NavLink } from 'react-router-dom';
import '../css/footer.css'
function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900"> {/* Set background to black */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600" href="#leap-nav">
            <span className="sr-only">Back to top</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-teal-300 lg:justify-start dark:text-teal-300"> {/* Change logo color to teal-300 */}
              <div className="flex item-center justify-center items-center">
                <a className="block text-teal-300 dark:text-teal-300 " href="#"> {/* Set text color to teal-300 for visibility */}
                  {/* <span className="sr-only">Home</span> */}
                  <img className='logo-head mr-3 logo-foot'
                    src={logo}
                  />
                </a>
                <span className='text-xl'><b>LEAP</b></span>
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-300 lg:text-left dark:text-gray-400">
              The Legal Education and Assistance Portal enhances legal literacy by providing seamless access to the <b>Bhartiya Nyay Sanhita</b> , featuring searchable law sections, case inquiries, and an intuitive document summarizer for empowered navigation of the legal landscape.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
       ${isActive ? "text-teal-300" : "text-gray-400"} 
       border-b border-gray-800 hover:bg-gray-800 
       lg:hover:bg-transparent lg:border-0 
       hover:text-teal-400 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/bns"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
       ${isActive ? "text-teal-300" : "text-gray-400"} 
       border-b border-gray-800 hover:bg-gray-800 
       lg:hover:bg-transparent lg:border-0 
       hover:text-teal-400 lg:p-0`
                }
              >
                BNS
              </NavLink>
            </li>

            <li>
              <NavLink
                to="https://bns-leap.netlify.app/query.html"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
       ${isActive ? "text-teal-300" : "text-gray-400"} 
       border-b border-gray-800 hover:bg-gray-800 
       lg:hover:bg-transparent lg:border-0 
       hover:text-teal-400 lg:p-0`
                }
              >
                Query
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://leapindia-search.vercel.app/"
                target='_blank'
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
       ${isActive ? "text-teal-300" : "text-gray-400"} 
       border-b border-gray-800 hover:bg-gray-800 
       lg:hover:bg-transparent lg:border-0 
       hover:text-teal-400 lg:p-0`
                }
              >
                Search Cases
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/document-summ"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
       ${isActive ? "text-teal-300" : "text-gray-400"} 
       border-b border-gray-800 hover:bg-gray-800 
       lg:hover:bg-transparent lg:border-0 
       hover:text-teal-400 lg:p-0`
                }
              >
                Document Summarizer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 
       ${isActive ? "text-teal-300" : "text-gray-400"} 
       border-b border-gray-800 hover:bg-gray-800 
       lg:hover:bg-transparent lg:border-0 
       hover:text-teal-400 lg:p-0`
                }
              >
                About Us
              </NavLink>
            </li>

          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-400 lg:text-right dark:text-gray-400">
          Copyright &copy; 2025. All rights reserved.
        </p>
      </div>
    </footer>

  )
}

export default Footer