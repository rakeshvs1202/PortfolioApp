import React from 'react'
import { HERO_CONTENT } from '../constants/index'
import profilePic from "../assets/pPic3.png"
import { motion } from 'framer-motion'
import { FaLongArrowAltRight, FaDownload } from "react-icons/fa";
import resume from '../assets/rakesh-resume.pdf'
const animationCon = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  }
});
function HeroComp() {
  return (
    <div className='pb-4 lg:mb-15 '>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 variants={animationCon(0)} initial="hidden" animate='visible' className='text-3xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>Rakesh Varanasi Shanmukha</motion.h1>
            <motion.span variants={animationCon(0.5)} initial="hidden" animate='visible' className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mt-6'>Full Stack Web Developer</motion.span>
            <motion.p variants={animationCon(1)} initial="hidden" animate='visible' className='my-2 max-w-2xl py-6 font-light tracking-tight text-xl'>{HERO_CONTENT}</motion.p>

          </div>
          <div className='flex flex-col sm:flex-row items-center gap-8 mt-4 mb-4 top-0 -z-10'>
            <motion.a initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5,delay: 1.25 }}
              href="#contact"
              className="px-10 py-3  text-lg border border-neutral-700 rounded-full text-purple-700 bg-gradient-to-br  from-neutral-800 via-neutral-900 to-neutral-800 shadow-md hover:shadow-lg hover:bg-neutral-800 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Contact me <span><FaLongArrowAltRight /></span>
            </motion.a>

            <motion.a initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 , delay: 1.25 }}
              href={resume}
              download="Rakesh_VS_Resume.pdf"
              className="px-10 text-lg py-3 border border-neutral-700 rounded-full text-purple-700 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 shadow-md hover:shadow-lg hover:bg-neutral-800 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              Download my resume <span><FaDownload /></span>
            </motion.a>



          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 '>
          <div className='flex justify-center '>
            <motion.img initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.25 }} src={profilePic} alt="profile" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default HeroComp