import React from 'react';
import avatar from '../assets/Avatar.svg';  // Use relative path
import { motion } from 'framer-motion';

function Hero() {
    return (
        <div id='home'
            className='text-white py-10'>
            <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                }}
                src={avatar}
                className='mx-auto w-2/3 md:w-1/3 lg:w-1/5'
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5
                }}
                className='mx-auto text-center '>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 1,
                        duration: 0.5
                    }}
                    className='text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4'>Hey , I'm Rohit
                    <span className='text-purple-600'>A Passionate Junior Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 1.3,
                        duration: 0.5
                    }} className='text-gray-400 text-lg mb-8'>I'm constantly learning new skills and enhancing my capabilities to stay up-to-date with the latest technologies.</motion.p>
                <div className='flex justify-center space-x-4'>

                    <motion.button
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 0.5
                        }} className='bg-purple-600 text-white px-4 py-2 rounded-full'>Contact Me</motion.button>

                    <motion.button
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 1.5,
                            duration: 0.5
                        }}
                        className='bg-purple-600 text-white px-4 py-2 rounded-full'>Hire Me</motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero;