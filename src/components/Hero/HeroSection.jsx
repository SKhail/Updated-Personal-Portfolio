import React, { useState, useEffect, useRef } from 'react';

//components
import BlazeByteButton from './BlazeByteButton';

//css
import '../Header/Header.css';

// Icons
import ProfilePic from '../../assets/Images/profilepic.png';

//icons
import GithubIcon from '../../assets/Icons/github.svg';
import GmailIcon from '../../assets/Icons/email.svg';

const HeroSection = () => {
  //  an array that as different words to change  in the hero section
  const changeArray = ['Daylight Debugger', 'NightTime Snacker'];

  //handing state
  const [changeWord, setWord] = useState(changeArray[0]);
  const [isActive, setIsActive] = useState(true);

  // useRef to hold the index value across renders
  const index = useRef(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        index.current = (index.current + 1) % changeArray.length;
        setWord(changeArray[index.current]);
      }, 2000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, changeArray]);

  return (
    <div className='relative pattern-background'>
      <div aria-hidden='true' className='absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20'>
        <div className='blur-[106px] h-56 bg-hero-section'></div>
        <div className='blur-[106px] h-32 bg-purple-section'></div>
      </div>
      <div className='container mx-auto dark:bg-gray-900 '>
        <div className='relative pt-32 ml-auto'>
          <div className='lg:w-2/3 text-center mx-auto'>
            <h1 className='text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl'>
              <span className='text-purple-section'> Hey </span> I'm <span className='text-purple-section'> Said!</span>
              <span className='text-purple-section'>
                <br></br>
              </span>
              <span className='text-primary dark:text-white'>{changeWord}</span>
            </h1>
            <div className=' py-4 mt-12 lg:mt-0 flex justify-center '>
              {/* Profile Picture */}
              <img src={ProfilePic} alt='Profile' className='h-48 rounded-full sm:h-56' />
              {/* GitHub Icon (only displayed on mobile) */}
              <a href='https://github.com/SKhail' target='_blank' rel='noopener noreferrer' className='lg:hidden'>
                <img src={GithubIcon} alt='GitHub' width='16' height='16' className='py-4 mx-3 github-icon transition-transform transform hover:scale-105 active:scale-95' />
              </a>
              {/* Gmail Icon (only displayed on mobile) */}
              <a href='mailto:saidkhail091@gmail.com' target='_blank' rel='noopener noreferrer' className='lg:hidden'>
                <img src={GmailIcon} alt='Gmail' width='16' height='16' className='py-4 github-icon transition-transform transform hover:scale-105 active:scale-95' />
              </a>
            </div>
            <p className='mt-4 text-gray-700 dark:text-gray-300'>
              I've traversed various domains within the IT landscape. Amidst the challenging times of the COVID period, I ventured into entrepreneurship, establishing and later
              divesting my own company within the span of a year. Technology, in its entirety,has long captivated my interest. While my journey encompassed diverse IT realms,
              software development initially posed a unique challenge, one that intrigued me and continues to do so. Should you seek further insights or have any inquiries, please
              don't hesitate to reach out. I'm more than willing to share my experiences
            </p>
            <div className='mt-12 flex flex-wrap justify-center gap-y-4 gap-x-6'>
              <a href='#' className='relative flex h-1 w-full items-center justify-center px-6 '>
                <BlazeByteButton />
              </a>
            </div>

            <div className='container flex flex-col items-center py-16 md:py-20 lg:flex-row'>
              <div className='w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left'>
                <h2 className='font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl dark:text-white'>SKILLS</h2>
                <h4 className='pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl dark:text-white'>My Toolbox & Things I Can Do</h4>

                <div className='flex flex-col justify-center pt-6 sm:flex-row lg:justify-start'>
                  <div className='flex items-center justify-center sm:justify-start'>
                    <div className='hidden sm:block'>
                      <i className='bx bx-chevron-right text-2xl text-primary'></i>
                    </div>
                  </div>
                  <div className='flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0'>
                    <a href='/' className='pl-4'>
                      <i className='bx bxl-facebook-square text-2xl text-primary hover:text-yellow'></i>
                    </a>
                    <a href='/' className='pl-4'>
                      <i className='bx bxl-twitter text-2xl text-primary hover:text-yellow'></i>
                    </a>
                    <a href='/' className='pl-4'>
                      <i className='bx bxl-dribbble text-2xl text-primary hover:text-yellow'></i>
                    </a>
                    <a href='/' className='pl-4'>
                      <i className='bx bxl-linkedin text-2xl text-primary hover:text-yellow'></i>
                    </a>
                    <a href='/' className='pl-4'>
                      <i className='bx bxl-instagram text-2xl text-primary hover:text-yellow'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0'>
                <div>
                  <div className='flex items-end justify-between'>
                    <h4 className='font-body font-semibold uppercase text-black dark:text-white'>React</h4>
                    <h3 className='font-body text-3xl font-bold text-primary dark:text-white '>75%</h3>
                  </div>
                  <div className='mt-2 h-3 w-full rounded-full bg-gray-200'>
                    <div className='h-3 rounded-full bg-primary bg-purple-section' style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className='pt-6'>
                  <div className='flex items-end justify-between'>
                    <h4 className='font-body font-semibold uppercase text-black dark:text-white'>Python</h4>
                    <h3 className='font-body text-3xl font-bold text-primary'>50%</h3>
                  </div>
                  <div className='mt-2 h-3 w-full rounded-full bg-gray-200'>
                    <div className='h-3 rounded-full bg-primary bg-purple-section' style={{ width: '50%' }}></div>
                  </div>
                </div>
                <div className='pt-6'>
                  <div className='flex items-end justify-between'>
                    <h4 className='font-body font-semibold uppercase text-black dark:text-white'>Java</h4>
                    <h3 className='font-body text-3xl font-bold text-primary'>40%</h3>
                  </div>
                  <div className='mt-2 h-3 w-full rounded-full bg-gray-200'>
                    <div className='h-3 rounded-full bg-primary bg-purple-section' style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className='pt-6'>
                  <div className='flex items-end justify-between'>
                    <h4 className='font-body font-semibold uppercase text-black dark:text-white'>JavaScript</h4>
                    <h3 className='font-body text-3xl font-bold text-primary'>85%</h3>
                  </div>
                  <div className='mt-2 h-3 w-full rounded-full bg-gray-200'>
                    <div className='h-3 rounded-full bg-primary bg-purple-section' style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
