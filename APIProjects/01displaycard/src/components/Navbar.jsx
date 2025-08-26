import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full drop-shadow-md'>
            <div className='bg-white p-2 flex item-center justify-between px-6'>
                <div className='text-indigo-600 text-2xl items-center p-1'>JsonAPI</div>

                <div className='flex'>
                    <div className=' text-md m-2 p-2 rounded-md text-indigo-500  cursor-pointer hover:text-black'>Sign In</div>
                    <button className='bg-indigo-500 text-md m-2 p-2 rounded-md text-white  cursor-pointer hover:text-black drop-shadow-md'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar