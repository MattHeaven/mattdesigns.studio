import React, {useState} from 'react'
import Logo from '.././assets/react.svg'


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-white shadow-md py-4 px-6 flex justify-between items-center'>
        <a href='/'>
            <img src={Logo} alt="" className='h-8 w-auto' />
        </a>
        <nav>
            <ul className='flex items-center space-x-6'>
                <li className='text-gray-700 hover:text-blue-600 transition-colors duration-300'>About Me</li>
                <li className='text-gray-700 hover:text-blue-600 transition-colors duration-300'>Projects</li>
                <li className='text-gray-700 hover:text-blue-600 transition-colors duration-300'>Skills</li>
                <li className='text-gray-700 hover:text-blue-600 transition-colors duration-300'>Contact</li>
                <li>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300'>
                        Call Me
                    </button>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar