import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="site-theme">
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto space-y-24">
        
        {/* Main Section */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h1 className="text-6xl font-black tracking-tighter text-white mb-6">Let's <span className="text-purple-600 italic">Consult</span>.</h1>
              <p className="text-gray-400 text-xl leading-relaxed">
                Ready to partner on a case or join our network? Reach out to the ProdCon board.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-5 rounded-3xl bg-white/5 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xl"><Phone size={24} /></div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-white font-medium text-lg">+91 8092834736</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-5 rounded-3xl bg-white/5 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xl"><Mail size={24} /></div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-medium text-lg">prodconmanit@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-5 rounded-3xl bg-white/5 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all shadow-xl"><MapPin size={24} /></div>
                <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-white font-medium text-lg">MANIT, Bhopal (MP)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 glass-card p-10 md:p-14 rounded-[3.5rem] border-t border-white/5"
          >
            <h3 className="text-2xl font-bold mb-10 tracking-tight">Direct Inquiry</h3>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-purple-500 outline-none transition-all placeholder-gray-700" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-purple-500 outline-none transition-all placeholder-gray-700" placeholder="you@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">How can we help?</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-purple-500 outline-none transition-all placeholder-gray-700 resize-none" placeholder="Describe your inquiry..." />
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-widest py-6 rounded-2xl flex items-center justify-center gap-3 transition-all group">
                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Sponsorship / Map Section */}
        <section className="grid md:grid-cols-2 gap-8 pb-10">
            <div className="glass-card p-10 rounded-[3rem] bg-gradient-to-br from-purple-900/10 to-transparent">
                <Globe className="w-10 h-10 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Partner with ProdCon</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    Sponsoring ProdCon gives your brand direct access to Bhopal's brightest strategists and product thinkers.
                </p>
                <div className="flex items-center gap-2">
                    <input className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 outline-none" placeholder="Corporate Email" />
                    <button className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm">Join</button>
                </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="glass-card rounded-[3rem] overflow-hidden grayscale contrast-125 opacity-50 hover:opacity-100 transition-opacity">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.237550403466!2d77.3996967789681!3d23.213616207704654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e43fe40941%3A0x10377d4af64ac6e9!2sMaulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1659611970585!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '300px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location"
                ></iframe>
            </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;