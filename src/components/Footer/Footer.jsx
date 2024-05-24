import React from 'react';
import emailjs from 'emailjs-com';

//images

import FooterImage from '../../assets/Images/mountain.jpg';
//Components
import Container from '../Header/Container';

//Css
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <>
      <div className='relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24' style={{ backgroundImage: `url(${FooterImage})` }}>
        <div className='mt-6 flex  justify-center sm:flex-row'>
          <div className='font-body font-bold uppercase text-white hover:purple-400 hover:text-black sm:ml-2 sm:mt-0 sm:py-4 md:text-lg'>Made with ♥️ by SK</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
