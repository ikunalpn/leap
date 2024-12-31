import React, { useState } from 'react'
import logo from '../assets/logo2.png';
import { Link, NavLink } from 'react-router-dom';
import '../css/header.css'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
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
          to="https://bns-leap.netlify.app/query.html" target='_blank'
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
          to="/search-case"
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
  );
}

// Header Component
function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: '#111827', padding: '8px' }}
      className="relative shadow-lg shadow-white/30"
      id='leap-nav'
    >
      <Navbar className="mx-auto max-w-screen-xl px-6 py-3" style={{ backgroundColor: '#111827' }} >
        <div className="flex items-center justify-between text-white">
          <div className="flex item-center justify-center items-center">
            <a className="block text-teal-300 dark:text-teal-300" href="#"> {/* Set text color to teal-300 for visibility */}
              {/* <span className="sr-only">Home</span> */}
              <img className='logo-head mr-3'
                src={logo}
              />
            </a>
            <span><b>LEAP</b></span>
          </div>


          <div className="hidden lg:block">
            <NavList />
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>

        {/* Collapse for mobile view */}
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>

  );
}

export default Header;


// <header className="bg-gray-900 dark:bg-gray-900" id='leap-nav'> {/* Use bg-gray-900 for a dark background */}
//   <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
//     <a className="block text-teal-300 dark:text-teal-300" href="#"> {/* Set text color to teal-300 for visibility */}
//       {/* <span className="sr-only">Home</span> */}
//       <img className='logo-head'
//         src={logo}
//       />
//     </a>
//     <div className="flex flex-1 items-center justify-end md:justify-between">
//       <nav aria-label="Global" className="hidden md:block">
//         <ul className="flex items-center gap-6 text-sm">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `block py-2 pr-4 pl-3 duration-200
//    ${isActive ? "text-teal-300" : "text-gray-400"}
//    border-b border-gray-800 hover:bg-gray-800
//    lg:hover:bg-transparent lg:border-0
//    hover:text-teal-400 lg:p-0`
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/bns"
//               className={({ isActive }) =>
//                 `block py-2 pr-4 pl-3 duration-200
//    ${isActive ? "text-teal-300" : "text-gray-400"}
//    border-b border-gray-800 hover:bg-gray-800
//    lg:hover:bg-transparent lg:border-0
//    hover:text-teal-400 lg:p-0`
//               }
//             >
//               BNS
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/query"
//               className={({ isActive }) =>
//                 `block py-2 pr-4 pl-3 duration-200
//    ${isActive ? "text-teal-300" : "text-gray-400"}
//    border-b border-gray-800 hover:bg-gray-800
//    lg:hover:bg-transparent lg:border-0
//    hover:text-teal-400 lg:p-0`
//               }
//             >
//               Query
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/search-case"
//               className={({ isActive }) =>
//                 `block py-2 pr-4 pl-3 duration-200
//    ${isActive ? "text-teal-300" : "text-gray-400"}
//    border-b border-gray-800 hover:bg-gray-800
//    lg:hover:bg-transparent lg:border-0
//    hover:text-teal-400 lg:p-0`
//               }
//             >
//               Search Cases
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/document-summ"
//               className={({ isActive }) =>
//                 `block py-2 pr-4 pl-3 duration-200
//    ${isActive ? "text-teal-300" : "text-gray-400"}
//    border-b border-gray-800 hover:bg-gray-800
//    lg:hover:bg-transparent lg:border-0
//    hover:text-teal-400 lg:p-0`
//               }
//             >
//               Document Summarizer
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 `block py-2 pr-4 pl-3 duration-200
//    ${isActive ? "text-teal-300" : "text-gray-400"}
//    border-b border-gray-800 hover:bg-gray-800
//    lg:hover:bg-transparent lg:border-0
//    hover:text-teal-400 lg:p-0`
//               }
//             >
//               About Us
//             </NavLink>
//           </li>
//         </ul>
//       </nav>

//     </div>
//   </div>
// </header>