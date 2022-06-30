import React from 'react'
import { Link } from 'react-router-dom'
import slogo from '../assets/slogo.png'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <div className=''>
    <div className='absolute top-4 left-4 z-[5]'>
      <Link to='/'>
        <div className='flex space-x-5'>
        <motion.div 
        initial={{opacity: 0, pathLength: 0,}}
        animate={{opacity: 1, pathLength: 1,}}
        transition={{duration: 2, ease: 'easeInOut'}}
        className="border rounded-2xl drop-shadow-lg 
        overflow-hidden shadow-sky-600 border-transparent shadow-md">
        <img 
        src={slogo}
        className='w-[110px] h-[100px] bg-[#00FFFFFF]'
        />
      </motion.div>
      <motion.div 
      initial={{opacity: 0, x: -50,}}
      animate={{opacity: 1, x: -5,}}
      transition={{duration: 2, delay: 2, ease: 'easeInOut'}}
      className='text-3xl bg-gradient-to-r text-transparent bg-clip-text
      from-[#00FFFFFF] to-sky-600 pt-[10px] font-semibold'> 
      <h1 className=''>Stunner Studio</h1> 
      </motion.div>
      </div>
      </Link>
    </div>
    </div>
  )
}

export default Logo