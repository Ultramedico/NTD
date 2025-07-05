import { motion } from 'framer-motion';
import { GiVirus } from 'react-icons/gi';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <GiVirus className="text-5xl text-emerald-600" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Reimagining Public Health with Data and AI
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Public health team" 
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600">
              NTD360 was built to solve a growing regional, national, and international challenge: 
              the inability to predict and prevent outbreaks in communities with fragile healthcare systems.
            </p>
            
            <p className="text-lg text-gray-600">
              Our team is made up of passionate innovators, public health experts, researchers, 
              and engineers dedicated to improving how governments, health workers, and global 
              institutions respond to public health threats.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-500">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h2>
              <p className="text-gray-600">
                To equip health actors with real-time, intelligent tools that prevent outbreaks and save lives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h2>
              <p className="text-gray-600">
                A future where every disease outbreak can be predicted, and no community is left behind.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Equity in access", desc: "Ensuring tools reach underserved communities" },
              { title: "Scientific integrity", desc: "Evidence-based, peer-reviewed approaches" },
              { title: "Human-centered innovation", desc: "Solutions designed with end-users" },
              { title: "Transparency and collaboration", desc: "Open data sharing and partnerships" }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                <h3 className="text-xl font-semibold text-emerald-600 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;