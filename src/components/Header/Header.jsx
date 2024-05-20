import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './Header.css';

// Importing icons
import { FaHome } from 'react-icons/fa';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaFolder } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
// Child Components
import Container from './Container';

// Images
import ProfilePic from '../../assets/Images/profilepic.png';
import GithubIcon from '../../assets/Icons/github.svg';
import GmailIcon from '../../assets/Icons/email.svg';

// Navigation Data
const HeaderData = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome />,
    link: '/home',
  },
  {
    id: 2,
    name: 'TheJourney',
    icon: <FaPlaneDeparture />,
    link: '/thejourney',
  },
  {
    id: 3,
    name: 'Projects',
    icon: <FaFolder />,
    link: '/projects',
  },
  {
    id: 4,
    name: 'Pending',
    icon: <FaCoffee />,
    link: '/pending',
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // For Mobile devices
  const toggleHamburger = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className={`z-10 w-full ${isScrolled ? 'fixed bg-white/70 backdrop-blur-lg shadow-lg' : 'absolute bg-transparent'} transition-all duration-300`}>
      <Container>
        <div className='flex flex-wrap items-center justify-between py-1 gap-4 md:py-2 md:gap-0 relative'>
          <div className='relative z-20 w-full flex justify-between lg:w-max md:px-0'>
            <Link to='/home' aria-label='logo' className='flex space-x-2 items-center'>
              <div aria-hidden='true' className='flex space-x-1'>
                {/* Profile Picture */}
                <img src={ProfilePic} alt='Profile' className='h-12 w-12' />
                {/* GitHub Icon (only displayed on mobile) */}
                <a href='https://github.com/SKhail' target='_blank' rel='noopener noreferrer' className='lg:hidden'>
                  <img src={GithubIcon} alt='GitHub' width='16' height='16' className='py-4 mx-3 github-icon transition-transform transform hover:scale-105 active:scale-95' />
                </a>
                {/* Gmail Icon (only displayed on mobile) */}
                <a href='mailto:saidkhail091@gmail.com' target='_blank' rel='noopener noreferrer' className='lg:hidden'>
                  <img src={GmailIcon} alt='Gmail' width='16' height='16' className='py-4 github-icon transition-transform transform hover:scale-105 active:scale-95' />
                </a>
              </div>
            </Link>

            <div className='relative flex items-center lg:hidden max-h-10'>
              <button onClick={toggleHamburger} aria-label='hamburger' id='hamburger' className='relative p-4 -mr-4'>
                <div aria-hidden='true' id='line' className='m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300'></div>
                <div aria-hidden='true' id='line2' className='m-auto mt-1.5 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300'></div>
              </button>
            </div>
          </div>

          <div
            className={`fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 ${
              isMobileOpen ? 'scale-y-100' : 'scale-y-0'
            } lg:hidden`}
          ></div>

          <div
            className={`flex-col z-20 flex-wrap gap-4 p-4 rounded-2xl border border-gray-100 bg-white shadow-2xl justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none ${
              isMobileOpen ? 'scale-100 opacity-100 visible' : ''
            } dark:shadow-none dark:bg-gray-800 dark:border-gray-700`}
          >
            <div className='text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0'>
              <ul className='tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-4 lg:gap-0'>
                {HeaderData.map((item) => (
                  <li key={item.id} className='flex items-center'>
                    <Link to={item.link} className='block md:px-4 transition hover:text-primary'>
                      {/* Display icon only on mobile */}
                      <span className='lg:hidden'>{item.icon}</span>
                      {/* Display name */}
                      <span className='hidden lg:inline'>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-8 lg:mt-0'>
              <Link
                to='#'
                className='relative flex h-8 w-full items-center justify-center px-3 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
              >
                <span className='relative text-sm font-semibold text-white'>DarkMode</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
