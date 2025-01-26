import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function Projects() {
  return (
    <div className='pb-4'>
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1}}  className='my-20 text-center text-5xl'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1.25}}  className='w-full lg:w-1/4'>
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className='mb-6 rounded'
              />
            </motion.div>
            <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0, x:100}} transition={{duration: 1.25}}  className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold flex text-2xl'>{project.title} <span className='ml-5'> <a href='https://github.com/rakeshvs1202' target='blank' > <FaArrowUpRightFromSquare /> </a></span></h6>
              <p className='mb-4 text-neutral-400 text-lg'>{project.description}</p>
              <div>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='mr-2 rounded bg-neutral-900 px-2 py-1 text-base font-medium text-purple-900'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
