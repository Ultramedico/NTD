import { Link } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaBell,
  FaGlobeAfrica,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { CountUp } from "use-count-up";
import { FaBacteria } from "react-icons/fa6";
import PartnersPage from "./Partner";
// Animated Background Component
const AnimatedBackground = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const controls = useAnimation();

  const backgrounds = [
    "bg-gradient-to-r from-emerald-600 to-blue-600",
    "bg-gradient-to-r from-blue-600 to-purple-600",
    "bg-gradient-to-r from-teal-600 to-emerald-600",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      controls
        .start({
          opacity: 0,
          transition: { duration: 0.5 },
        })
        .then(() => {
          setCurrentBg((prev) => (prev + 1) % backgrounds.length);
          controls.start({
            opacity: 1,
            transition: { duration: 0.5 },
          });
        });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={controls}
      className={`absolute inset-0 ${backgrounds[currentBg]} transition-colors duration-1000`}
    >
      {/* Floating virus particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0.1,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            transition: {
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="absolute text-white opacity-20"
          style={{ fontSize: `${Math.random() * 20 + 10}px` }}
        >
          <FaBacteria />
        </motion.div>
      ))}
    </motion.div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ value, label }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-emerald-600 p-4 rounded-lg text-center"
    >
      <div className="text-2xl font-bold">
        <CountUp isCounting end={parseInt(value)} duration={2.5} />
        {value.includes("%") ? "%" : "+"}
      </div>
      <div className="text-sm">{label}</div>
    </motion.div>
  );
};

// Home Page Component
const Home = () => {
  const [currentPartner, setCurrentPartner] = useState(0);

  const partners = [
    { name: "Transnet Cloud", logo: "T" },
    { name: "Amazon Web Services", logo: "AWS" },
    { name: "NCDC", logo: "NCDC" },
    { name: "WHO Nigeria", logo: "WHO" },
    { name: "Meta Data for Good", logo: "Meta" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-center md:text-left"
          >
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight"
            >
              Predict.{" "}
              <motion.span
                animate={{ color: ["#fff", "#86efac", "#fff"] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block"
              >
                Prevent.
              </motion.span>{" "}
              Protect.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-2xl mb-8 md:mb-10 text-white/90"
            >
              AI-powered early warning platform for potential outbreaks,
              re-outbreaks, and neglected tropical diseases.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/explore"
                  className="block w-full sm:w-auto bg-white text-emerald-700 px-6 py-3 rounded-lg hover:bg-emerald-100 transition duration-300 font-medium text-center"
                >
                  Explore Platform
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="block w-full sm:w-auto bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-emerald-700 transition duration-300 font-medium text-center"
                >
                  Get Involved
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/request-demo"
                  className="block w-full sm:w-auto bg-emerald-500 px-6 py-3 rounded-lg hover:bg-emerald-400 transition duration-300 font-medium text-center"
                >
                  Request Demo
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* What is NTD360 Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What is NTD360?
            </h2>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              NTD360 is an intelligent disease forecasting platform that helps
              health workers, policymakers, epidemiologists, and organizations
              anticipate and respond to potential disease outbreaks including
              COVID-19, diphtheria, monkeypox, cholera, and reemerging
              NTDs—especially in endemic regions.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Healthcare workers"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-6">
                Powered by AI and real-time environmental data, NTD360
                transforms public health response at regional, national, and
                international levels from reactive to proactive.
              </p>
              <ul className="space-y-3">
                {[
                  "AI-powered outbreak prediction",
                  "Geospatial risk mapping",
                  "Real-time alerts",
                  "Mobile and desktop dashboards",
                  "Data integration from NCDC, WHO, Meta, and more",
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="text-emerald-500 mr-2 mt-1"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                      ✓
                    </motion.span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform provides cutting-edge tools to revolutionize disease
              surveillance and prevention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaSearch className="text-4xl mb-4 text-emerald-600" />,
                title: "Advanced Prediction",
                desc: "AI models forecast outbreaks before they happen",
              },
              {
                icon: (
                  <FaChartLine className="text-4xl mb-4 text-emerald-600" />
                ),
                title: "Risk Mapping",
                desc: "Visualize disease risks with interactive geospatial maps",
              },
              {
                icon: <FaBell className="text-4xl mb-4 text-emerald-600" />,
                title: "Real-time Alerts",
                desc: "Instant notifications for emerging health threats",
              },
              {
                icon: (
                  <FaGlobeAfrica className="text-4xl mb-4 text-emerald-600" />
                ),
                title: "Global Coverage",
                desc: "Focus on underserved regions with fragile health systems",
              },
              {
                icon: <FaUsers className="text-4xl mb-4 text-emerald-600" />,
                title: "Multi-stakeholder",
                desc: "Tools for health workers, policymakers, and researchers",
              },
              {
                icon: <FaEnvelope className="text-4xl mb-4 text-emerald-600" />,
                title: "Data Integration",
                desc: "Aggregates data from WHO, NCDC, Meta, and more",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                NTD360 collects and analyzes data from multiple sources to
                provide comprehensive insights:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Environmental factors (rainfall, temperature, humidity)",
                  "Population mobility (Meta Data for Good, mobile network data)",
                  "Historical outbreak patterns (NCDC, WHO)",
                  "Geo-tagged sanitation and health data",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-emerald-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-lg text-gray-600">
                We use machine learning models like{" "}
                <span className="font-semibold">XGBoost</span> and{" "}
                <span className="font-semibold">LSTM</span>, hosted on{" "}
                <span className="font-semibold">AWS cloud infrastructure</span>,
                to process data and generate predictive risk maps and alerts.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Data visualization"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-400 rounded-lg z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Impact
              </h2>
              <p className="text-lg mb-8">
                With Nigeria's doctor-to-patient ratio at 1:5,000 and similar
                challenges across many regions, our platform helps maximize
                limited healthcare capacity, reduce burnout, and support
                smarter, faster public health decisions—especially in
                underserved and high-risk areas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <AnimatedCounter value="95%" label="Prediction Accuracy" />
                <AnimatedCounter value="50+" label="Diseases Tracked" />
                <AnimatedCounter value="10+" label="Target country" />
                <AnimatedCounter value="24/7" label="Monitoring" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Healthcare impact"
                className="rounded-lg shadow-xl max-h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powered by a coalition of changemakers committed to strengthening
              public health infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center items-center h-32 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPartner}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 px-8 py-6 rounded-lg shadow-md text-center"
              >
                <div className="text-2xl font-bold text-emerald-600">
                  {partners[currentPartner].logo}
                </div>
                <div className="text-gray-700">
                  {partners[currentPartner].name}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-50 px-6 py-4 rounded-lg shadow-sm cursor-pointer"
                onClick={() => setCurrentPartner(index)}
              >
                <div className="text-xl font-semibold text-emerald-600">
                  {partner.logo}
                </div>
                <div className="text-gray-600 text-sm">{partner.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
        <PartnersPage />
    </div>
  );
};

export default Home;
