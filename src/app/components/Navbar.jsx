import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='flex flex-row py-4 bg-blue-900'>
        <FontAwesomeIcon icon={faCode} className='w-8 mx-2'/>
    </div>
  )
}

export default Navbar
