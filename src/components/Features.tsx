import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Video, PenTool } from 'lucide-react';
import AnimatedText from './AnimatedText';

const features = [
  {
    icon: BookOpen,
    title: 'Chapter Summaries',
    description: 'Get quick, easy-to-understand summaries of your textbook chapters.'
  },
  {
    icon: PenTool,
    title: 'Interactive Quizzes',
    description: 'Test your knowledge with fun quizzes that adapt to your learning style.'
  },
  {
    icon: Video,
    title: 'Video Solutions',
    description: 'Watch step-by-step video explanations for complex topics.'
  },
  {
    icon: Brain,
    title: 'Smart Learning',
    description: 'AI-powered system that learns how you learn best.'
  }
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-[#F5F5F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="message-bubble message-bubble-received mb-8"
        >
          <AnimatedText
            text="Here's how I can help you ace your studies! 🚀"
            className="text-2xl font-bold"
          />
        </motion.div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`message-bubble ${index % 2 === 0 ? 'message-bubble-received' : 'message-bubble-sent'}`}
            >
              <div className="flex items-start gap-4">
                <feature.icon className={`h-6 w-6 ${index % 2 === 0 ? 'text-blue-500' : 'text-white'}`} />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="message-bubble message-bubble-received mt-8"
        >
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              Start Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}