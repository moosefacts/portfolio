import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r from-gray-700 to-blue-800'>
        <p className='flex justify-center mt-8'>Hi, I am</p>
        <h1 className='flex justify-center my-4 text-4xl'>Chris Iglesias</h1>
        <p className='flex justify-center mb-4 mt-2'>Front-End Web Developer</p>
        <div className='flex flex-row justify-center'>
            <FontAwesomeIcon icon={faGithub} className='w-6 mx-2'/>
            <FontAwesomeIcon icon={faLinkedin} className='w-6 mx-2'/>
            <FontAwesomeIcon icon={faMedium} className='w-6 mx-2'/>
        </div>
        <button className='flex mx-auto w-fit p-3 shadow-lg rounded bg-blue-900 mt-7 mb-16'>Check out my resume</button>
    </div>
  )
}

export default Banner
