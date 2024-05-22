import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Make sure to import emailjs

// CSS
import Container from '../Header/Container';

const ContactPage = () => {
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
    <>
      <div className='container mx-auto dark:bg-gray-900 '>
        <div className='mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6 dark:bg-gray-900'>
          <div className='w-full text-gray-600 dark:text-gray-300 dark:bg-gray-900'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <h4 className='pt-6 py-4 text-center font-header text-xl font-medium text-black dark:text-white  sm:text-2xl lg:text-3xl'>Have Any Questions?</h4>
                <p className='font-body py-2 text-gray-600'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit condimentum turpis nisl sem, viverra habitasse urna ante lobortis fermentum accumsan. Viverra
                  habitasse urna ante lobortis fermentum accumsan.
                </p>

                <label htmlFor='name' className='py-2 block text-sm font-medium dark:text-white '>
                  Name
                </label>
                <input type='text' name='name' id='name' value={formData.name} onChange={handleChange} className='mt-1 p-2 w-full border rounded' />
                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor='email' className='py-2 block text-sm font-medium dark:text-white '>
                  Email
                </label>
                <input type='email' name='email' id='email' value={formData.email} onChange={handleChange} className='mt-1 p-2 w-full border rounded' />
                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor='message' className='py-2 block text-sm font-medium dark:text-white'>
                  Message
                </label>
                <textarea name='message' id='message' rows='4' value={formData.message} onChange={handleChange} className='mt-1 p-2 w-full border rounded'></textarea>
                {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
              </div>
              <div>
                <button
                  type='submit'
                  className={`mt-6 py-1.5 px-3 text-sm rounded-full  ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'py-2 px-4  bg-purple-section hover:bg-purple-700 text-black dark:text-white dark:bg-gray-900  hover:text-white transition duration-300'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            <div className='py-3'></div>
          </div>
          <div className='flex w-full justify-center text-gray-600 dark:text-gray-300 sm:w-5/12 md:justify-end mt-10 md:mt-0'></div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
