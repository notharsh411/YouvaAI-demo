import React from 'react';
import { Menu, X, Brain } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Brain className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold text-gray-900">Youva.AI</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900">Demo</a>
              <a href="#schools" className="text-gray-600 hover:text-gray-900">For Schools</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Try Demo
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
            <a href="#demo" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Demo</a>
            <a href="#schools" className="block px-3 py-2 text-gray-600 hover:text-gray-900">For Schools</a>
            <button className="w-full text-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Try Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}