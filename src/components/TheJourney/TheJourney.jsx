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
                  <FaSchool className='h-auto w-32 py-5' />
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
                    <span className='block pt-2 font-header text-xl text-center font-bold uppercase text-primary dark:text-white'>Secondary School</span>
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
                  <MdOutlineMapsHomeWork className='h-auto w-32 py-32' />
                </span>
                <div className='relative ml-3 hidden w-full md:block'>
                  <span className='absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70'></span>
                </div>
              </div>
            </div>
            <div className='md:w-3/5'>
              <div className='relative flex md:pl-18'>
                <div className='mt-8 flex'>
                  <div className='md:-mt-1 md:pl-8'>
                    <span className='block pt-2 text-center font-header text-xl font-bold uppercase text-primary dark:text-white'>A-Levels / Univerisity</span>
                    <div className='pt-2'>
                      <span className='block font-body text-sm text-black dark:text-white'>
                        My journey into the world of Technology did't go traditonally like other people during my A-levels I was drawn to the fascinating field of toxicology, but
                        realising I didnt enjoy the subjects and found myself pivoting towards the realm of IT. Despite setbacks, I persevered, immersing myself in computer science
                        at university. However, I soonrealized my passion lay elsewhere. Transitioning to business proved transformative, culminating in the achievement of a
                        First-Class Honour. Guided by this newfound clarity, I embarked on a professional journey that ultimately led me to pursue a Master's in Computer Science
                        with a focus on Artificial Intelligence. This journey, marked by twists and turns, has equipped me with a diverse skill set and a profound appreciation for
                        the intersections of technology and business.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col text-center md:flex-row md:text-left'>
            <div className='md:w-2/5'>
              <div className='flex justify-center md:justify-start'>
                <span className='shrink-0'>
                  <SiFreelancer className='h-auto w-32 py-5' />
                </span>
                <div className='relative ml-3 hidden w-full md:block'>
                  <span className='absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70'></span>
                </div>
              </div>
            </div>
            <div className='md:w-3/5'>
              <div className='relative flex md:pl-18'>
                <div className='flex'>
                  <div className='md:-mt-1 md:pl-8'>
                    <span className='block pt-2 text-center font-header text-xl font-bold uppercase text-primary dark:text-white'>WorkForce </span>
                    <div className='pt-2'>
                      <span className='block font-body text-sm text-black dark:text-white'>
                        You might expect my first role to have been in front-end or full-stack development, but my journey began differently. I started as a Technical Support
                        Specialist for a SaaS company, where I assisted B2B clients with technology adoption issues. My responsibilities included troubleshooting and providing
                        solutions, occasionally involving JavaScript debugging when clients needed to implement scripts on their websites. This experience ignited my interest in
                        development, eventually leading me to pursue various roles within the development world.
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
