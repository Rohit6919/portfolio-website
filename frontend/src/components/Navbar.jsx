import React, { useState } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false);

    const items = [
        { id: 1, text: 'Home', to: 'home' },
        { id: 2, text: 'About', to: 'about' },
        { id: 3, text: 'Project', to: 'project' },
        { id: 4, text: 'Contact', to: 'contact' },
    ];

    // Toggle menu open/close
    const toggleMenu = () => setMenu((prev) => !prev);

    // Close menu when clicking any item
    const closeMenu = () => setMenu(false);

    return (
        <div>
            {/* Desktop Navbar */}
            <div className="container mx-auto hidden md:flex justify-between items-center py-6">
                <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
                    <span className="text-gray-500">&lt;</span>
                    <span className="text-xl text-white">Rohit</span>
                    <span className="text-gray-500">/&gt;</span>
                </div>
                <div>
                    <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base font-semibold text-white">
                        {items.map(({ id, text, to }) => (
                            <li key={id}>
                                <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a
                    href="/Rohit_Resume.pdf"
                    download="Rohit_Resume.pdf"
                    className="md:text-base lg:text-lg bg-purple-600 hover:bg-purple-400 text-white px-4 py-2 rounded-full"
                >
                    Download CV
                </a>
            </div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden justify-between items-center py-6 px-4">
                {/* Mobile "Rohit" text */}
                <div className="text-xl font-bold text-white">
                    <span className="text-gray-500">&lt;</span>
                    <span>Rohit</span>
                    <span className="text-gray-500">/&gt;</span>
                </div>

                {/* Menu Toggle Button */}
                <div onClick={toggleMenu} className="z-10">
                    {menu ? (
                        <IoClose size={30} className="text-white" />
                    ) : (
                        <RiMenuFill size={30} className="text-white" />
                    )}
                </div>
            </div>

            {/* Mobile Menu - Minimum space drawer */}
            <motion.div
                initial={false}
                animate={{ x: menu ? 0 : '-100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className={`fixed top-0 left-0 h-full w-auto bg-white z-20 shadow-lg rounded-r-lg will-change-transform`}
                style={{ minWidth: '200px', maxWidth: '350px', padding: '1.5rem' }}  // Limit the space
            >
                <div className="flex flex-col justify-center items-start space-y-6">
                    <ul className="space-y-6 text-black text-lg">
                        {items.map(({ id, text, to }) => (
                            <li
                                key={id}
                                className="hover:text-purple-500 duration-200 cursor-pointer"
                            >
                                <Link
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={closeMenu}
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="/Rohit_Resume.pdf"
                        download="Rohit_Resume.pdf"
                        className="md:text-base lg:text-lg bg-purple-600 hover:bg-purple-400 text-white px-4 py-2 rounded-full"
                    >
                        Download CV
                    </a>
                </div>
            </motion.div>
        </div>
    );
}

export default Navbar;
