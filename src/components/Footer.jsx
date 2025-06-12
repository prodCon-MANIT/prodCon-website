import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [Subscribed , setSubscribed] = useState('Subscribe');
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle newsletter signup
    
    setEmail('');
    setSubscribed("Subscribed");
    setTimeout(()=>{
        setSubscribed('Subscribe');
    }, 1000)
  };

  const socialLinks = [
 main
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
   
    { icon: <Github size={20} />, href: '#' },
    { 
=======
  
    { icon: <Twitter size={30} />, href: '#' },
    { icon: <Instagram size={30} />, href: 'https://www.instagram.com/prodcon.manit/?hl=en' },
 
    { icon: <Linkedin size={30} />, href: 'https://www.linkedin.com/company/prodcon-the-product-consulting-club-manit-bhopal%C2%A0-nit-b/' }, main
  ];

  return (
    <footer className="bg-indigo-950 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">ProdCon</h2>
            <p className="text-sm">
              Solving what truly matters,
              <br />
              Turning ideas into impact
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#fff' }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="/resources" className="hover:text-white">Resources</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our email for the latest news and events.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:space-x-2">
              <input
                type="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-indigo-300 text-gray-900 focus:outline-none mb-2 sm:mb-0"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
              >
                {Subscribed}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm">
          © {new Date().getFullYear()} ProdCon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
