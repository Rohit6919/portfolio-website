import React from 'react'
import { motion } from 'motion/react'
import aboutme from '../assets/aboutme.svg'
import { useInView } from 'react-intersection-observer'



function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })
    return (
        <div id="about" className='text-white py-16'>
            <div className='container mx-auto px-4 text-center'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        delay: 0.3,
                        duration: 0.5
                    }}
                    className='text-3xl md:text-4xl font-bold mb-8 underline'>About me </motion.h2>
                <div className='flex flex-col md:flex-row justify-center items-center '>
                    <div className='mb-8 md:mb-0 md:mr-8 flex justify-center'>
                        <img
                            className="w-2/3 sm:w-1/2 md:w-10/12"
                            src={aboutme} alt="Avatar" />
                    </div>
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            delay: 0.5,
                            duration: 0.5
                        }}
                        className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl leading-relaxed'
                    >
                        👋 Hey, I’m <span className='font-bold text-white'>Rohit Patel</span>, a <span className='font-bold'>Final Year Student</span> and a passionate <span className='font-bold'>MERN Stack Developer</span>.
                        I’m constantly expanding my skills by building dynamic and efficient web applications. With proficiency in
                        <span className='text-white'>MongoDB</span>, <span className='text-white'>Express.js</span>, <span className='text-white'>React.js</span>, and <span className='text-white'>Node.js</span>,
                        I create full-stack solutions that offer seamless and intuitive user experiences.<br/>
                        🚀 I thrive on solving complex problems and love transforming ideas into reality through clean, scalable code.
                        💡 Always eager to learn, I stay updated with the latest tech trends and industry practices to refine my expertise.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default About
