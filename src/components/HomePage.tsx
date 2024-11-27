import React from "react";
import { motion } from "framer-motion";

type Props = {};

function HomePage({}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 px-4">
      <motion.div
        className="max-w-3xl text-center bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to ApnaShop
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">

        </p>
        <div className="mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;

