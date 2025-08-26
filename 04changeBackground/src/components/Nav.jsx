import React, { useState } from 'react'
import Button from './Button'

const Nav = () => {

    let [open,setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>

            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    ColorChanger
                </div>
                <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-420px]'} md:opacity-100`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a className='text-gray-800 hover:text-gray-400' href="/">Home</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a className='text-gray-800 hover:text-gray-400' href="/about">About</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a className='text-gray-800 hover:text-gray-400' href="/services">Services</a></li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'><a className='text-gray-800 hover:text-gray-400' href="/contact">Contact</a></li>

                    <Button>
                        Get Started
                    </Button>
                </ul>
            </div>

        </div>
    )
}

export default Nav