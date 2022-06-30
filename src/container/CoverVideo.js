import React from 'react'
import TopVideo from '../assets/fstudio.mp4'
import { motion } from 'framer-motion'

const item = {
  hidden : {
    opacity: 0,
  },
  show : {
    opacity: 1,
  },
}

const container = {
  hidden : {
    opacity: 0,
  },
  show : {
    opacity: 1,

    transition: {
      delayChildren: 2,
      staggerChildren: 0.3,
    }
  },
}
const CoverVideo = () => {
  return (
    <div
    className='relative width-full height-full'>
        <video 
        src={TopVideo} 
        type='video/mp4'
        autoPlay
        muted
        loop
        className='w-full h-[100vh] object-cover'
        //controls
        />
        <div
        className='absolute flex flex-col justify-center items-center top-0
        left-0 right-0 bottom-0 bg-black/30 z-10'>
          <div className='z-50 flex flex-col justify-center items-center
          shadow-[#00FFFF] rounded-lg drop-shadow-md text-gray-100'>
            <motion.div 
            variants={container}
            initial='hidden'
            animate='show'
            className='text-[210px] font-Custom1 flex flex-row'>
            <motion.h1 variants={item} data-scroll data-scroll-delay='0.13' data-scroll-speed='4'>S</motion.h1>
            <motion.h1 variants={item} data-scroll data-scroll-delay='0.10' data-scroll-speed='4'>t</motion.h1>
            <motion.h1 variants={item} data-scroll data-scroll-delay='0.08' data-scroll-speed='4'>u</motion.h1>
            <motion.h1 variants={item} data-scroll data-scroll-delay='0.07' data-scroll-speed='4'>n</motion.h1>
            <motion.h1 variants={item} data-scroll data-scroll-delay='0.06' data-scroll-speed='4'>n</motion.h1>
            <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed='4'>e</motion.h1>
            <motion.h1 variants={item} data-scroll data-scroll-delay='0.03' data-scroll-speed='4'>r</motion.h1>
            </motion.div>
            <h2 
            data-scroll data-scroll-delay='0.04' data-scroll-speed='2'
            className='text-[40px] font-custom2 capitalize font-[300px]'>Creative, Style, Inspire, Believe</h2>
          </div>
        </div>
    </div>
  )
}

export default CoverVideo