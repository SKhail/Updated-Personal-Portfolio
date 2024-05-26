import React from 'react';

const Pending = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen dark:bg-gray-900'>
      <h1 className='text-4xl py-2 font-bold text-gray-800 mb-4 dark:text-white'>404 - Page Not Found</h1>
      <p className='text-lg py-2 text-gray-600 mb-2 dark:text-white'>The page you are looking for does not exist.</p>
      <p className='text-lg py-2 text-gray-600 dark:text-white'>Please check the URL and try again.</p>
    </div>
  );
};

export default Pending;
