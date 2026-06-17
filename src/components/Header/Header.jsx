import React from 'react';
import { Link } from 'react-router-dom';

import { FaAddressCard, FaEnvelope, FaFolder, FaHome, FaMoon, FaSun } from 'react-icons/fa';

const HeaderData = [
  {
    id: 'home',
    name: 'Home',
    icon: <FaHome />,
    link: '',
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <FaFolder />,
    link: 'projects',
  },
  {
    id: 'cv',
    name: 'CV',
    icon: <FaAddressCard />,
    link: 'cv',
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <FaEnvelope />,
    link: 'contact',
  },
];

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className='fixed inset-x-3 bottom-4 z-20'>
      <nav className='mx-auto w-fit rounded-3xl border border-slate-200/80 bg-white/85 px-3 py-3 text-slate-900 shadow-2xl shadow-blue-200/50 backdrop-blur transition-colors dark:border-white/10 dark:bg-[#111936]/90 dark:text-white dark:shadow-black/30'>
        <ul className='flex items-center justify-center gap-2'>
          {HeaderData.map((item) => (
            <li key={item.id}>
              <Link
                to={`/${item.link}`}
                className='group flex items-center gap-3 rounded-2xl px-3 py-3 font-nav text-sm text-slate-600 transition hover:bg-slate-100 hover:text-blue-700 dark:text-blue-100 dark:hover:bg-white/10 dark:hover:text-white'
                aria-label={item.name}
              >
                <span className='text-lg'>{item.icon}</span>
                <span className='hidden sm:inline'>{item.name}</span>
              </Link>
            </li>
          ))}
          <li>
            <button
              type='button'
              onClick={toggleDarkMode}
              className='flex items-center gap-3 rounded-2xl px-3 py-3 font-nav text-sm text-slate-600 transition hover:bg-slate-100 hover:text-blue-700 dark:text-blue-100 dark:hover:bg-white/10 dark:hover:text-white'
              aria-label='Toggle dark mode'
            >
              <span className='text-lg'>{darkMode ? <FaMoon /> : <FaSun />}</span>
              <span className='hidden sm:inline'>{darkMode ? 'Dark' : 'Light'}</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
