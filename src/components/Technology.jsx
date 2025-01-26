import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { IoLogoAngular } from "react-icons/io5";
import { SiSpring,SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import {  motion } from 'framer-motion'

const iconAnimate = (time)=>({
    initial: {y:-10},
    animate : {
        y:[10,-10],
        transition:{
            duration:time,
            ease:"linear",
            repeat:Infinity,
            repeatType: "reverse",
        },
    },
});
function Technology() {
  return (
    <div className='pb-24'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0, y:-50}} transition={{duration:1}} className='my-20 text-center text-5xl'>Technologies </motion.h2>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-50}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconAnimate(2.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconAnimate(4)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <IoLogoAngular className='text-7xl text-red-600'/>
            </motion.div>
            <motion.div variants={iconAnimate(2)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpring className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div variants={iconAnimate(5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiNodejs className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div variants={iconAnimate(3.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl text-blue-400'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technology