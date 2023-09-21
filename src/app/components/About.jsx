import React from 'react';
import Image from 'next/image';

import profilePic from '../../../public/assets/images/self.jpg';

const About = () => {
  return (
    <div className='flex flex-col bg-blue-900'>
      <h1 className='flex justify-center text-3xl font-bold mt-16'>About Me</h1>
      <p className='flex mx-8 my-4 text-sm'>
        My name is Chris Iglesias and I am an aspiring front-end web developer. I am looking for opportunities
        to showcase my skills as a web developer and grow professionally.
      </p>
      <h2 className='flex justify-center text-xl font-bold my-2'>Education</h2>
      <h3 className='flex justify-center font-semibold'>Gonzaga University</h3>
      <p className='flex justify-center text-sm'>Masters in Teaching</p>
      <p className='flex justify-center text-xs mb-4'>June, 2018</p>
      <h3 className='flex justify-center font-semibold'>Oregon State University</h3>
      <p className='flex justify-center text-sm'>B.S. in Nuclear Engineering</p>
      <p className='flex justify-center text-xs mb-12'>June, 2015</p>
      <Image
        src={profilePic}
        width={200}
        height={200}
        alt='Picture of the author'
        className='flex mx-auto mb-16 rounded-lg'
      />
    </div>
  )
}

export default About
