import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { FaSquarePhone } from "react-icons/fa6";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd9bd58c-a2ca-4bde-a789-689168b3bb3e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message has been sent successfully");
      setTimeout(()=>{
        setResult("")
      },5000)
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="pb-15 relative" id="contact">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-3xl"
      >
        Get in Touch
      </motion.h2>
      <p className="text-center my-4 text-lg">
        I'd love to hear from you! Feel free to ask any questions, comments or feedback
      </p>
      <form onSubmit={onSubmit} action='/'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            type="text"
            placeholder="Enter your name"
            required
            name='Name'
            className="w-full p-3 outline-none border-[0.5px] border-neutral-700 text-slate-400 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-md text-xl"
          />
          <motion.input
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            type="email"
            placeholder="Enter your email"
            required
            name='Email'
            className="w-full p-3 outline-none border-[0.5px] border-neutral-700 text-slate-400 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 rounded-md text-xl"
          />
        </div>
        <motion.textarea
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          rows="6"
          placeholder="Enter your message"
          required
          name='His/Her message'
          className="w-full p-4 outline-none border-[0.5px] border-neutral-700 rounded-md text-slate-400 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 text-xl"
        ></motion.textarea>
        <button
          type="submit"
          className="mt-6 px-6 py-3 text-lg border border-neutral-700 rounded-full text-slate-400 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 items-center gap-2 justify-center flex cursor-pointer mx-auto"
        >
          Submit now
        </button>
        <p className='items-center mx-auto justify-center flex text-2xl my-6 '> {result} </p>
      </form>
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-center mt-10 gap-4 sm:gap-8 lg:gap-12 pb-20">
      <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-2 text-lg"
        >
          <span>{CONTACT.address}</span>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 0 }}
          transition={{ duration: 1.5, delay:0.5 }}
          className="flex items-center space-x-2 text-lg"
        >
          <FaSquarePhone className="text-slate-400" />
          <span>{CONTACT.phoneNo}</span>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-2 text-lg"
        >
          <FaEnvelope className="text-slate-400" />
          <a href='mailto:rakeshvaranasishanmukha@gmail.com' className='border-b'>{CONTACT.email}</a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
