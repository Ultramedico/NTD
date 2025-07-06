import { Link } from "react-router-dom";
import { GiVirus } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Define navigation items with their exact paths
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Partners", path: "/partners" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`fixed w-full z-50 ${
        scrolled ? "bg-emerald-800 shadow-xl" : "bg-emerald-700"
      } text-white p-4 transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Link to="/"
            className="flex items-center space-x-2">
            <GiVirus className="text-2xl" />
            <h1 className="text-xl font-bold">NTD360</h1>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className="hover:text-emerald-200 transition duration-300 font-medium"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/request-demo"
              className="bg-white text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-300 font-medium"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-6 px-4 space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    className="block py-2 hover:text-emerald-200 transition duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="pt-2"
              >
                <Link
                  to="/request-demo"
                  className="inline-block bg-white text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-100 transition duration-300 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Request Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
