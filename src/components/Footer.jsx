import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 space-y-6">
          <h2 className="text-2xl font-black tracking-tighter text-white">PROD<span className="text-purple-600">CON</span></h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Driven by Ideas, Defined by Impact. The strategic bridge between campus and corporate.
          </p>
          <div className="flex gap-4">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="p-3 rounded-xl bg-white/5 text-gray-500 hover:bg-purple-600 hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Platform</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="/about" className="hover:text-purple-500 transition-colors">About Us</a></li>
            <li><a href="/about#resources" className="hover:text-purple-500 transition-colors">Resources</a></li>
            <li><a href="/contact" className="hover:text-purple-500 transition-colors">Join Club</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Support</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li><a href="/contact" className="hover:text-purple-500 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Stay Updated</h4>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 pr-12 outline-none focus:border-purple-600 transition-all text-sm"
            />
            <button className="absolute right-2 top-2 p-2 rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-all">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-600 uppercase tracking-widest">
        <p>© 2026 PRODCON MANIT BHOPAL</p>
        <p>Design Driven by Innovation</p>
      </div>
    </footer>
  );
};

export default Footer;