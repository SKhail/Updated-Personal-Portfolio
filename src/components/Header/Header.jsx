import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

// CSS
import './Header.css';

// Importing icons
import { FaHome } from 'react-icons/fa';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaFolder } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { FaSun, FaMoon } from 'react-icons/fa'; // Dark Mode Icons
// Child Components
import Container from './Container';

// Navigation Data
const HeaderData = [
  {
    id: 'home',
    name: 'Home',
    icon: <FaHome />,
    link: '',
    isScroll: false,
  },
  {
    id: 'journey',
    name: 'Journey',
    icon: <FaPlaneDeparture />,
    link: 'thejourney',
    isScroll: false,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <FaFolder />,
    link: 'SeeMoreProjects',
    isScroll: false,
  },
  {
    id: 'pending',
    name: 'Pending',
    icon: <FaCoffee />,
    link: 'pending',
    isScroll: false,
  },
];

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  // function to handle the scrolling effect implementing onclick
  const handleScrollClick = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  };
  // For Mobile devices
  const toggleHamburger = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <header>
      <nav
        className={` flex items-center justify-between lg:px-1  bg-purple-400 shadow ${
          darkMode ? 'bg-purple-900 ' : 'border-transparent'
        } dark:text-white fixed top-0 w-full z-10 animate__animated animate__fadeIn`}
      >
        <div className='flex flex-wrap items-center justify-between py-1.5 gap-6 md:py-2 md:gap-0 relative w-full'>
          <div className='relative z-20 w-full flex justify-between lg:w-max md:px-0'>
            <div className='relative flex items-center lg:hidden max-h-10'>
              <label role='button' htmlFor='toggle_nav' aria-label='hamburger' id='hamburger' className='relative p-6 -mr-6' onClick={toggleHamburger}>
                <div
                  aria-hidden='true'
                  id='line'
                  className={`m-auto h-0.5 w-5 rounded bg-black dark:bg-gray-300 transition duration-300 ${isMobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                ></div>
                <div
                  aria-hidden='true'
                  id='line2'
                  className={`m-auto mt-2 h-0.5 w-5 rounded bg-black  dark:bg-gray-300 transition duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-1' : ''}`}
                ></div>
                <div
                  aria-hidden='true'
                  id='line2'
                  className={`m-auto mt-2 h-0.5 w-5 rounded bg-black  dark:bg-gray-300 transition duration-300 ${isMobileOpen ? '-rotate-90-translate-y-1' : ''}`}
                ></div>
              </label>
            </div>
            <div className='toggle-container'>
              <Link to='#'>
                {/* DarkMode toggle buttons */}
                <span className='relative' onClick={toggleDarkMode}>
                  {darkMode ? <FaMoon /> : <FaSun />}
                </span>
              </Link>
            </div>
          </div>

          {/* Mapping Header navbar */}

          <div className={`text-black  lg:pr-1 lg:w-auto w-full lg:pt-0 ${isMobileOpen ? 'block inset-0 bg-white/70 backdrop-blur-lg lg:bg-transparent' : 'hidden lg:block'}`}>
            <ul className={`dark:text-white  lg:flex items-center gap-4 list-none ${isMobileOpen ? 'flex flex-row p-4' : 'hidden lg:flex'} `}>
              {HeaderData.map((item) => (
                <li key={item.id} className='flex items-center hover:opacity-75'>
                  {item.isScroll ? (
                    <a
                      href={`#${item.link}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollClick(item.id);
                      }}
                      className={`inline-block px-7 hover:text-space-grey duration-200 font-header ${({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''}`}
                    >
                      {/* Display icon only on mobile */}
                      <span className='lg:hidden '>{item.icon}</span>
                      {/* Display name lg */}
                      <span className='hidden lg:inline  '>{item.name}</span>
                    </a>
                  ) : (
                    <Link
                      to={`/${item.link}`}
                      className={`inline-block px-7 hover:text-space-grey duration-200 font-nav font-extralight ${({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'active' : ''}`}
                    >
                      {/* Display icon only on mobile */}
                      <span className='lg:hidden'>{item.icon}</span>
                      {/* Display name */}
                      <span className='hidden lg:inline'>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
