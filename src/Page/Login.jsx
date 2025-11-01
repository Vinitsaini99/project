import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-200 via-sky-200 to-green-200 pt-28 pb-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md"
      >
        {/* Logo */}
        <h1 className="text-center text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-teal-400 to-amber-500">
          FabriQ
        </h1>
        <p className="text-center text-gray-700 mb-8 font-medium">
          Welcome back! Please login to continue.
        </p>

        {/* Form */}
        <form className="flex flex-col space-y-6">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/70 backdrop-blur-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-white/70 backdrop-blur-sm"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-gradient-to-r from-sky-400 via-teal-400 to-amber-400 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Login
          </motion.button>
        </form>

        {/* Links */}
        <div className="text-center mt-6 text-gray-700">
          <p>
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-sky-600 font-semibold hover:underline"
            >
              Sign up
            </a>
          </p>
          <p className="mt-2">
            <a
              href="#"
              className="text-teal-600 font-semibold hover:underline"
            >
              Forgot password?
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
