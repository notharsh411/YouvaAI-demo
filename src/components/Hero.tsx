import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';

export default function Hero() {
  return (
    <div className="relative bg-[#F5F5F5] pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="message-bubble message-bubble-received"
          >
            <h2 className="text-lg font-medium">Hey there! 👋</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="message-bubble message-bubble-received"
          >
            <AnimatedText
              text="I'm Youva, your AI study buddy for grades 5-8!"
              className="text-2xl font-bold"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="message-bubble message-bubble-sent"
          >
            <AnimatedText
              text="Need help with your studies? I can help you understand your textbooks better, quiz you on topics, and show you cool video explanations! 📚✨"
              className="text-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="message-bubble message-bubble-received"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                >
                  Sign Up for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-blue-500 bg-white hover:bg-gray-50 transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2070"
            alt="Students learning with AI"
            className="rounded-2xl shadow-xl mx-auto max-w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}