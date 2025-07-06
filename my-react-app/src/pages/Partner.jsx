import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const PartnersPage = () => {
  const partners = [
    {
      name: "Netlify",
      logo: "https://logo.clearbit.com/netlify.com",
      description: "Netlify is a cloud platform that provides hosting and serverless backend services for web applications, enabling fast and scalable deployments."
    },
    {
      name: "Amazon Web Services",
      logo: "https://logo.clearbit.com/aws.com",
      description: "Cloud services and AI/ML tools for our predictive models and power our sever architecture"
    },
    {
      name: "Nigeria Centre for Disease Control",
      logo: "https://logo.clearbit.com/ncdc.gov.ng",
      description: "Primary data partner for disease surveillance in Nigeria"
    },
    {
      name: "WHO Nigeria",
      logo: "https://logo.clearbit.com/who.int",
      description: "Global health guidance and outbreak response coordination"
    },
    {
      name: "Meta Data for Good",
      logo: "https://logo.clearbit.com/meta.com",
      description: "Population mobility data for transmission risk modeling"
    }
  ];

  const [selectedPartner, setSelectedPartner] = useState(partners[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Partners</h1>
          <p className="text-xl text-gray-600">
            Powered by a coalition of changemakers committed to strengthening public health infrastructure
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <img 
                src={selectedPartner.logo} 
                alt={selectedPartner.name} 
                className="h-20 object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedPartner.name}</h2>
              <p className="text-gray-600">{selectedPartner.description}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedPartner(partner)}
              className={`bg-white p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-300 ${selectedPartner.name === partner.name ? 'ring-2 ring-emerald-500' : 'hover:shadow-md'}`}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-16 object-contain mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800">{partner.name}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-block bg-emerald-100 text-emerald-700 px-6 py-3 rounded-lg"
          >
            <p className="font-medium">Interested in partnering with us?</p>
            <Link
            to="/contact">
            
           
            <button className="mt-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition duration-300">
              Contact Our Team
            </button>
             </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnersPage;