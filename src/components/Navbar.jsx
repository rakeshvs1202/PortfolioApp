import React from 'react';
import logo from '../assets/RVSLogo.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4">
      <div className="flex items-center">
        <a href="/">
          <img
            src={logo}
            alt="logo"
            className="w-14 h-14 cursor-pointer z-10"
          />
        </a>
      </div>
      <div className="flex gap-4 text-4xl items-center justify-center">
        <a
          href="https://www.linkedin.com/in/rakesh-varanasi-shanmukha-644623185/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rakeshvs1202"
          target="_blank"
          rel="noopener noreferrer"
          className= "cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/RakeshVS/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 cursor-pointer"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
