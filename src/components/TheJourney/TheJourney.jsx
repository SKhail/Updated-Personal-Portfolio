import React from 'react';

import { FaSchool } from 'react-icons/fa';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { SiFreelancer } from 'react-icons/si';
const TheJourney = () => {
  return (
    <>
      <div className='container py-16 md:py-20 dark:bg-gray-900'>
        <h2 className='text-center font-header font-semibold uppercase text-primary sm:text-5xl lg:text-6xl dark:text-white'>My Journey</h2>
        <h3 className='pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl dark:text-white'>How I Got into Tech and Became a Developer</h3>

        <div className='relative mx-auto mt-12 flex w-full flex-col lg:w-2/3'>
          <span className='left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block'></span>

          <div className='mt-8 flex flex-col text-center md:flex-row md:text-left'>
            <div className='md:w-2/5'>
              <div className='flex justify-center md:justify-start'>
                <span className='shrink-0'>
                  <FaSchool className='h-auto w-32 text-primary' />
                </span>
                <div className='relative ml-3 hidden w-full md:block'>
                  <span className='absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70'></span>
                </div>
              </div>
            </div>
            <div className='md:w-3/5'>
              <div className='relative flex md:pl-18'>
                <div className='mt-1 flex'>
                  <div className='md:-mt-1 md:pl-8'>
                    <span className='block pt-2 font-header text-xl font-bold uppercase text-primary dark:text-white'>Secondary School</span>
                    <div className='pt-2'>
                      <span className='block font-body text-sm text-black dark:text-white'>
                        My fascination with IT began during a two-week government-sponsored program over Easter break. Surrounded by peers my age, I wasn't sure how I ended up
                        there, but the chance to explore website development sparked a newfound interest. We delved into the world of web design using tools like Dreamweaver, HTML,
                        and CSS. This introduction ignited a passion for technology that I didn't even realize was software development at the time.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-8 flex flex-col text-center md:flex-row md:text-left'>
            <div className='md:w-2/5'>
              <div className='flex justify-center md:justify-start'>
                <span className='shrink-0'>
                  <MdOutlineMapsHomeWork className='h-auto w-32 text-primary' />
                </span>
                <div className='relative ml-3 hidden w-full md:block'>
                  <span className='absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70'></span>
                </div>
              </div>
            </div>
            <div className='md:w-3/5'>
              <div className='relative flex md:pl-18'>
                <div className='mt-1 flex'>
                  <div className='md:-mt-1 md:pl-8'>
                    <span className='block pt-2 font-header text-xl font-bold uppercase text-primary'>Software Engineer</span>
                    <div className='pt-2'>
                      <span className='block font-body text-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-8 flex flex-col text-center md:flex-row md:text-left'>
            <div className='md:w-2/5'>
              <div className='flex justify-center md:justify-start'>
                <span className='shrink-0'>
                  <SiFreelancer className='h-auto w-32 text-primary' />
                </span>
                <div className='relative ml-3 hidden w-full md:block'>
                  <span className='absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70'></span>
                </div>
              </div>
            </div>
            <div className='md:w-3/5'>
              <div className='relative flex md:pl-18'>
                <div className='mt-1 flex'>
                  <div className='md:-mt-1 md:pl-8'>
                    <span className='block pt-2 font-header text-xl font-bold uppercase text-primary'>DevOps Engineer</span>
                    <div className='pt-2'>
                      <span className='block font-body text-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheJourney;
