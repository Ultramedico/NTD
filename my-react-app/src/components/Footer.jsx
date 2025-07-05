import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { GiVirus } from 'react-icons/gi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Partners', path: '/partners' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
        { name: 'Request Demo', path: '/request-demo' }
    ];

    const socialLinks = [
        { icon: <FaFacebook />, url: '#' },
        { icon: <FaTwitter />, url: '#' },
        { icon: <FaLinkedin />, url: '#' },
        { icon: <FaInstagram />, url: '#' }
    ];

    return (
        <footer className="bg-emerald-800 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-2">
                            <GiVirus className="text-2xl" />
                            <h2 className="text-xl font-bold">NTD360</h2>
                        </div>
                        <p className="text-emerald-100">
                            Comprehensive solutions for neglected tropical diseases. 
                            Join us in our mission to eradicate NTDs worldwide.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-xl hover:text-emerald-300 transition duration-300"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-4 border-b border-emerald-700 pb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <motion.li 
                                    key={link.path}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link 
                                        to={link.path} 
                                        className="text-emerald-100 hover:text-white transition duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-4 border-b border-emerald-700 pb-2">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="mt-1 text-emerald-300" />
                                <span className="text-emerald-100">123 Health Street, Disease Free City, 101010</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaPhone className="text-emerald-300" />
                                <span className="text-emerald-100">+1 (234) 567-8900</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="text-emerald-300" />
                                <span className="text-emerald-100">info@ntd360.com</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-4 border-b border-emerald-700 pb-2">Newsletter</h3>
                        <p className="text-emerald-100 mb-4">
                            Subscribe to our newsletter for the latest updates on NTD eradication efforts.
                        </p>
                        <form className="space-y-3">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300 text-gray-800"
                                required
                            />
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-300 font-medium w-full"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-t border-emerald-700 mt-8 pt-6 text-center text-emerald-100"
                >
                    <p>&copy; {currentYear} NTD360. All rights reserved.</p>
                    <a className='mt-8 hover:text-blue-500' href="https://wa.me/2347063564619">Developed by Oracle.</a>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;