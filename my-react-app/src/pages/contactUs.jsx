import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Let's Predict the Next Outbreak—Before It Happens
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="text-emerald-600 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">admin@ntd360.org.ng</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-emerald-600 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+234 800 000 0000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="#" 
                  className="bg-blue-100 text-blue-600 p-3 rounded-full"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3 }}
                  href="#" 
                  className="bg-blue-100 text-blue-700 p-3 rounded-full"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              </div>
            </div>

            <div className="bg-emerald-100 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for platform updates and research</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;