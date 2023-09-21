import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { skills } from '../components/SkillData';

const Skills = () => {
  return (
    <div className='mb-12'>
      <h1 className='flex justify-center text-3xl font-bold mt-16'>Skills</h1>
        <ul className='grid grid-cols-2 mx-4 mt-8'>
            {skills.map((item, index) => (
                <li key={index} className='bg-gray-900 w-45vw rounded px-8 py-4 my-2 mx-2 
                    transform transition duration-300 hover:scale-110 hover:bg-blue-700'
                >
                    <h3 className='flex justify-center text-xl font-semibold mb-2'>{item.name}</h3>
                    <Image src={item.image} alt={item.name} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Skills
