import React from 'react';
import { Brain, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">Youva.AI</span>
            </div>
            <p className="text-gray-600">
              Making learning fun and effective for grades 5-8.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Demo</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Updates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Schools</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Integration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Resources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Partnership</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Parents Guide</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Student Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Youva.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}