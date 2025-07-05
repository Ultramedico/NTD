import { motion } from 'framer-motion';
import { FaDatabase, FaBrain, FaMobileAlt } from 'react-icons/fa';

const HowItWorksPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-white min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">How NTD360 Works</h1>
          <p className="text-xl text-gray-600">
            Our AI-powered platform transforms diverse data sources into actionable insights for disease prevention
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaDatabase className="text-4xl mb-4 text-emerald-600" />,
              title: "Data Collection",
              items: [
                "Environmental factors (rainfall, temperature, humidity)",
                "Population mobility (Meta Data for Good, mobile network data)",
                "Historical outbreak patterns (NCDC, WHO)",
                "Geo-tagged sanitation and health data"
              ]
            },
            {
              icon: <FaBrain className="text-4xl mb-4 text-emerald-600" />,
              title: "AI Processing",
              items: [
                "Machine learning models (XGBoost, LSTM)",
                "AWS cloud infrastructure",
                "Predictive risk mapping",
                "Anomaly detection algorithms"
              ]
            },
            {
              icon: <FaMobileAlt className="text-4xl mb-4 text-emerald-600" />,
              title: "Output Delivery",
              items: [
                "Real-time alerts",
                "Web and mobile dashboards",
                "Low-bandwidth compatibility",
                "Customizable by region/disease"
              ]
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="text-center mb-6">
                {step.icon}
                <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
              </div>
              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-emerald-700 text-white rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">From Data to Action</h2>
              <p className="text-lg mb-6">
                Our platform processes millions of data points daily to generate predictive insights that 
                help health workers anticipate outbreaks before they occur.
              </p>
              <div className="bg-emerald-600 p-4 rounded-lg inline-block">
                <p className="font-medium">24-48 hour advance warning for potential outbreaks</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c0ec2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Data visualization" 
                className="rounded-lg shadow-xl max-h-80"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorksPage;