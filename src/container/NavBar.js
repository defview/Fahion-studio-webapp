import React, { useState } from 'react'

const NavBar = () => {
  const [click, setClick] = useState(false)
  return (
    <div 
    click={click}
    className={`absolute top-0 w-full h-32 list-none border-b-8 border-sky-600 
    bg-white/70`}>
        <nav className='flex flex-row text-2xl justify-evenly ml-[150px] mt-[30px]'>
            <li 
            onClick={() => setClick(!click)}
            className={`intent`}>Menu</li>
            <li className='text-blue-500 uppercase'>Home</li>
            <li className=''>About</li>
            <li className=''>shop</li>
            <li className=''>new arrival</li>
        </nav>
    </div>
  )
}

export default NavBar