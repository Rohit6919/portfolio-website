import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import project1 from "../assets/project1.png";
import home from "../assets/home.png";

function Work() {
    const projects = [
        {
            id: 1,
            title: "EliteProWealth",
            description: "✅ EliteProWealth is an investment management platform that lets clients track and manage their investments with ease. It offers user authentication, a contact us section, and real-time portfolio monitoring through Looker Studio integration, providing dynamic and transparent insights into their financial data.",
            image: project1,
            link: "https://eliteprowealth.com/"
        },
        {
            id: 2,
            title: "Stockler - Smart Stock Portfolio Tracker",
            description: "Stockler is a powerful and user-friendly stock portfolio tracker designed to help investors monitor their holdings, analyze market trends, and receive real-time profit/loss updates. With features like top-up management, daily performance tracking, and personalized alerts, Stockler simplifies stock management for both beginners and experienced traders.",
            image: home, // make sure you import or define 'stocklerImage' correctly
            link: "https://eliteprowealth.com/stockler" // replace with actual URL if different

        }
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <div id="project" ref={ref} className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Faster animation */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4 }}
                    className="text-3xl md:text-4xl text-white underline font-bold text-center"
                >
                    Projects
                </motion.h2>
            </div>

            {/* Mobile-Optimized Layout */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                        whileHover={{
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 250, damping: 12 }
                        }}
                        className="bg-gray-900 shadow-lg rounded-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover sm:h-52 md:h-60"
                        />
                        <div className="p-3 sm:p-4">
                            <h3 className="text-md sm:text-lg text-white font-semibold mb-1">{project.title}</h3>
                            <p className="text-slate-400 text-xs sm:text-sm mb-3">{project.description}</p>

                            {/* Change to <a> tag for proper redirection */}
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block border-2 border-purple-500 text-purple-500 px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-purple-500 hover:text-white transition"
                            >
                                Visit Project
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Work;
