import React, { useState } from 'react';
import emailjs from 'emailjs-com';

//Components
import Container from '../Header/Container';

//Css
import '../Footer/Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //handle validation if people spam the text boxes
  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Please add a Name';
    }
    if (!formData.email) {
      errors.email = 'Please add an Email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message) {
      errors.message = 'Please add a message';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID').then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        }
      );
    }
  };

  return (
    <Container>
      <div className='mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6'>
        <div className='w-full text-gray-600 dark:text-gray-300'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <h4 className='pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl'>Have Any Questions?</h4>
              <p className='font-body text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit condimentum turpis nisl sem, viverra habitasse urna ante lobortis fermentum accumsan. Viverra
                habitasse urna ante lobortis fermentum accumsan.
              </p>

              <label htmlFor='name' className='block text-sm font-medium'>
                Name
              </label>
              <input type='text' name='name' id='name' value={formData.name} onChange={handleChange} className='mt-1 p-2 w-full border rounded' />
              {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium'>
                Email
              </label>
              <input type='email' name='email' id='email' value={formData.email} onChange={handleChange} className='mt-1 p-2 w-full border rounded' />
              {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium'>
                Message
              </label>
              <textarea name='message' id='message' rows='4' value={formData.message} onChange={handleChange} className='mt-1 p-2 w-full border rounded'></textarea>
              {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
            </div>
            <div>
              <button type='submit' className='mt-6 w-full bg-primary text-white p-2 rounded' disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          <div className='blur-[106px] h-50 bg-hero-section'></div>
          <div className='blur-[106px] h-32 bg-purple-section'></div>
        </div>
        <div className='flex w-full justify-center text-gray-600 dark:text-gray-300 sm:w-5/12 md:justify-end mt-10 md:mt-0'></div>
      </div>
    </Container>
  );
};

export default Footer;
