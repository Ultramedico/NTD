// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4"
    >
      <h1 className="text-6xl font-bold text-emerald-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg mb-8 max-w-md">
        The page you're looking for doesn't exist yet or has been moved.
      </p>
      <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl shadow-lg border border-emerald-100 max-w-lg mx-auto mb-8">
  <div className="absolute -top-3 -left-3 bg-emerald-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
    Coming Soon!
  </div>
  
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 mt-1">
      <svg 
        className="w-6 h-6 text-emerald-600 animate-pulse" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M13 10V3L4 14h7v7l9-11h-7z" 
        />
      </svg>
    </div>
    
    <div>
      <h3 className="text-xl font-bold text-emerald-800 mb-2">Under Construction</h3>
      <p className="text-gray-700 leading-relaxed">
        Our developers are <span className="font-semibold text-emerald-600">hard at work</span> crafting this page! 
        While we put the finishing touches, why not explore our 
        <Link to="/" className="text-blue-600 hover:underline mx-1">featured content</Link>
        or check back soon for updates.
      </p>
      
      <div className="mt-4 flex items-center text-sm text-gray-500">
        <svg 
          className="w-4 h-4 mr-1 animate-bounce" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
        <span>Estimated completion: Next update</span>
      </div>
    </div>
  </div>
</div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/"
          className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition duration-300 font-medium"
        >
          Return Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;