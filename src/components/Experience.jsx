import React from 'react';
import { EXPERIENCES } from '../constants/index.js';
import { motion } from 'framer-motion';
function Experience() {
  return (
    <div className='pb-4'>
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1}} className='my-20 text-center text-5xl'>Experiences</motion.h2>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div  key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1}} className='w-full lg:w-1/4'>
              <p className='mb-2 text-lg text-neutral-400'>{exp.year}</p>
            </motion.div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0, x:100}} transition={{duration: 1}}  className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold text-2xl'>
                {exp.role} - <span className='text-sm text-purple-100'>{exp.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400 text-lg'>{exp.description}</p>
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-lg font-medium text-purple-900'
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
