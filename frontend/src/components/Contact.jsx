import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

function Contact() {

    const [FormData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {  // Fixed function name
        const { name, value } = e.target;
        setFormData({ ...FormData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', FormData); // Corrected API route
            alert('Message sent successfully! 🎉');
            console.log(response.data);

            // Reset form
            setFormData({
                fullname: '',
                email: '',
                phone: '',
                message: ''
            });

        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. ❌');
        }
    };

    return (  // Moved return inside the component
        <div id="contact" className="text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Contact Info Section */}
                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold"
                    >
                        Let's Discuss Your <span className="text-purple-500">Project</span>
                    </motion.h2>

                    <p className="text-gray-400 leading-relaxed text-lg">
                        "Code your dreams into reality with me!"
                    </p>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-purple-500 text-2xl" />
                            <div>
                                <p className="text-lg font-medium">Email</p>
                                <p className="text-gray-400">patelrohit6919@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        onSubmit={handleSubmit}>

                        <input
                            name="fullname"
                            type="text"
                            placeholder="Full name"
                            value={FormData.fullname}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Your email"
                            value={FormData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone number"
                            value={FormData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            value={FormData.message}
                            onChange={handleChange}
                            rows="4"
                            className="col-span-1 sm:col-span-2 w-full px-4 py-3 bg-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="col-span-1 sm:col-span-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition"
                        >
                            Submit Message
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
