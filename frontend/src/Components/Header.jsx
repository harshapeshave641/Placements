// import React from 'react';
// import { Navbar } from 'flowbite-react';
// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (
//     <div>
//       <Navbar className='border-b-2 sticky top-0 bg-white z-50'>
//         <div className='flex items-center justify-center md:justify-start w-full md:w-auto gap-2'>
//           <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
//             <img src="/img/logo.jpg" alt="Logo" className='logo-image'/>
//           </Link>
//           <h1 className="mr-8 text-xl font-semibold dark:text-white">Training and Placement Cell, PICT PUNE</h1>
//         </div>
//         <div className='hidden md:flex items-center space-x-4'>
//           <Navbar.Collapse>

//           <Navbar.Link as={'div'} className="list-none">
//             <Link to='/' className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
//               Overview
//             </Link>
//           </Navbar.Link>
//           <Navbar.Link as={'div'} className="list-none">
//             <Link to='/' className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
//               Why Recruit
//             </Link>
//           </Navbar.Link>
//           <Navbar.Link as={'div'} className="list-none">
//             <Link to='/' className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
//               Director's Message
//             </Link>
//           </Navbar.Link>
//           <Navbar.Link as={'div'} className="list-none">
//             <Link to='/' className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
//               Recruitment Process
//             </Link>
//           </Navbar.Link>
//           <Navbar.Link as={'div'} className="list-none">
//             <Link to='/' className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
//               Contact Us
//             </Link>
//           </Navbar.Link>
//           </Navbar.Collapse>
          
//         </div>
//       </Navbar>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import ScrollLink from '../../ScrollLink';
import { useEffect } from 'react';

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(true);

  const [jwtToken, setJwtToken] = useState(null);

  useEffect(() => {
    // Check if JWT token is present in sessionStorage
    const storedToken = sessionStorage.getItem('jwtToken');
    if (storedToken) {
      setJwtToken(storedToken);
    }
  }, []);

  const toggleNavVisibility = () => {
    setNavVisibility(!isNavVisible);
  };

  const handleLogout = () => {
    // Clear JWT token from sessionStorage
    sessionStorage.removeItem('jwtToken');
    setJwtToken(null);
    // Additional logout logic if needed
  };

  return (
    <div>
      <Navbar className='border-b-2 fixed top-0 w-full bg-gray-200 z-50'>
        <div className='flex items-center justify-between w-full md:w-auto gap-2'>
          <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <img src="/img/PICT_logo_1.png" alt="Logo" className='logo-image'/>
          </Link>
          <h1 className="mr-8 text-xl font-semibold dark:text-white">Training and Placement Cell, PICT PUNE</h1>
          {jwtToken ? (
            <button onClick={handleLogout} className='md:hidden text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out'>
              Logout
            </button>
          ) : (
            <button
              className='md:hidden text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out'
              onClick={toggleNavVisibility}
            >
              {isNavVisible ? 'Hide' : 'Show'} Navigation
            </button>
          )}
        </div>
        <div className={`md:flex items-center space-x-4 ${isNavVisible ? 'block' : 'hidden'}`}>
          <Navbar.Collapse>
            <Navbar.Link as={'div'} className="list-none">
              <ScrollLink to='#overview' spy smooth duration={500} className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
                Overview
              </ScrollLink>
            </Navbar.Link>
            <Navbar.Link as={'div'} className="list-none">
              <Link to='#director' className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
                Why Recruit
              </Link>
            </Navbar.Link>
            <Navbar.Link as={'div'} className="list-none">
              <ScrollLink to='#director' spy smooth duration={500} className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
                Director's Message
              </ScrollLink>
            </Navbar.Link>
            <Navbar.Link as={'div'} className="list-none">
              <Link to='/' className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
                Recruitment Process
              </Link>
            </Navbar.Link>
            <Navbar.Link as={'div'} className="list-none">
              <ScrollLink to='#contactus' spy smooth duration={500} className='text-base text-gray-600 hover:text-gray-800 focus:text-gray-800 focus:outline-none transition duration-150 ease-in-out' style={{ textDecoration: 'none' }}>
                Contact Us
              </ScrollLink>
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
