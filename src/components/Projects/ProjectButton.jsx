import React from 'react';
import { Link } from 'react-router-dom';

export const ProjectButton = () => {
  return (
    <div className='grid min-h-[50px] place-content-center p-4'>
      <Link to='/SeeMoreProjects'>
        <DrawOutlineButton>More Projects</DrawOutlineButton>
      </Link>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button {...rest} className='dark:text-purple-section group relative px-4 py-2 font-medium text-black transition-colors duration-[400ms] hover:text-purple-section'>
      <span>{children}</span>

      {/* TOP */}
      <span className='absolute left-0 top-0 h-[2px] w-0 bg-purple-section transition-all duration-100 group-hover:w-full' />

      {/* RIGHT */}
      <span className='absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full' />

      {/* BOTTOM */}
      <span className='absolute bottom-0 right-0 h-[2px] w-0 bg-purple-section transition-all delay-200 duration-100 group-hover:w-full' />

      {/* LEFT */}
      <span className='absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full' />
    </button>
  );
};

export default ProjectButton;
