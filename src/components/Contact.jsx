import React from 'react';
import './contact.css';
import web_gradient from "../assets/web_gradient.png";
import myImage from "../assets/location-bg.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const sponsors = [
    {
      name: "xyz",
      url: "https://www.adani.com/"
    },
    {
      name: "xyz",
      url: "https://rupeezy.in/"
    },
    {
      name: "xyz",
      url: "https://www.raphe.com/"
    },
    {
      name: "xyz",
      url: "https://wadhwanifoundation.org/"
    },

    {
      name: "xyz",
      url: "https://wadhwanifoundation.org/"
    },
    {
      name: "xyz",
      url: "https://www.linkedin.com/in/i-am-startup-community-india"
    },
    {
      name: "xyz",
      url: "https://www.adani.com/"
    },
    {
      name: "xyz",
      url: "https://www.adani.com/"
    },
  ];

  return (
    <div className="text-white font-sans">
      {/* Header Section */}
      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-black bg-black"
        style={{ backgroundImage: `url(${web_gradient})` }}
      >
        <div className="absolute w-[600px] h-[400px] bg-purple-700/30 rounded-full blur-[150px] top-[200px] left-[-150px] z-0" />
        
        {/* Sponsor Section */}
        <div className="w-full max-w-6xl mx-auto z-10 px-4">
          <h1 className="text-5xl font-bold text-white text-center mb-13">Our Media Sponsors</h1>
          
          {/* Sponsors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb--10">
            {sponsors.map((sponsor, index) => (
              <a 
                key={index}
                href={sponsor.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <span className="text-xl font-semibold text-black">{sponsor.name}</span>
              </a>
            ))}
          </div>

          {/* Become Sponsor Section */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "40px",
            display: "flex",
            alignItems: "center",
            gap: "45px",
            width: "90%",
            maxWidth: "1000px",
            margin: "0 auto",
            position: "relative",
            bottom: "-140px",
            zIndex: "1"
          }}>
            <h2 style={{
              fontSize: "25px",
              fontWeight: "bold",
              margin: 0,
              color: "#000000"
            }}>
              Become our<br />Sponsor
            </h2>
            <div style={{
              flex: 1,
              backgroundColor: "#F8F8F8",
              borderRadius: "16px",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "2px solid #727171"
            }}>
              <input 
                type="email" 
                placeholder="Your email"
                style={{
                  flex: 1,
                  border: "none",
                  background: "transparent",
                  padding: "12px 16px",
                  fontSize: "16px",
                  color: "#666",
                  outline: "none"
                }}
              />
              <button 
                type="submit" 
                style={{
                  backgroundColor: "#F2A53E",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "5px 39px",
                  fontSize: "16px",
                  fontWeight: "500",
                  cursor: "pointer"
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div style={{ marginTop: "-30px" }}>
        <div
          className="relative bg-cover bg-center text-center text-white"
          style={{
            backgroundImage: `url(${myImage})`,
            height: "600px",
          }}
        >
          <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center px-4">
            <h2 className="text-5xl font-bold text-[#D99343] mb-4">Location</h2>
            <p className=" font-medium mb-2 font-bold text-5xl">Maulana Azad National Institute of Technology</p>
            <p className="text-md max-w-xl">
              <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-white" />


              Link Road Number 3, Near Kali Mata Mandir, Bhopal, Madhya Pradesh, India 462003
            </p>
            <div
              style={{
                width: "737px",
                marginTop: "55px",
                borderBottom: "2px solid #FFFFFF",
              }}
              className="line"
            ></div>
          </div>


        </div>
      </div>

      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.237550403466!2d77.3996967789681!3d23.213616207704654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e43fe40941%3A0x10377d4af64ac6e9!2sMaulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1659611970585!5m2!1sen!2sus"
        style={{ border: 0, width: '100%', height: '40vh' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Contact Details & Form Section */}
      <div className="bg-[#1a1a2e] py-10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-10 relative">
            Contact Us
            <div className="absolute w-30 h-0.5 bg-purple-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
          </h2>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6 text-left w-full max-w-sm backdrop-blur-lg bg-white/5 p-6 rounded-2xl">
              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                  <FontAwesomeIcon icon={faPhone} className="text-purple-400 text-base" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-base">Call Us</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-purple-300 font-medium  text-m">Kushagra Tiwari</p>
                      <a href="tel:+918092834736" className="text-gray-300 text-sm hover:text-purple-400 transition-colors">+91 8092834736</a>
                    </div>
                    <div>
                      <p className="text-purple-300 font-text-m">Saksham Guliyani</p>
                      <a href="tel:+919462945410" className="text-gray-300 text-sm hover:text-purple-400 transition-colors">+91 89622 70969</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-purple-400 text-base" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-base">Email Us</h3>
                  <a href="mailto:prodconmanit@gmail.com" className="text-gray-300 text-sm hover:text-purple-400 transition-colors">prodconmanit@gmail.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                  <FontAwesomeIcon icon={faLocationDot} className="text-purple-400 text-base" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-base">Visit Us</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Maulana Azad National Institute of Technology,<br />
                    Bhopal, Madhya Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Write to Us Form */}
            <div className="w-full max-w-md">
              <div className="backdrop-blur-lg bg-white/5 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6 text-left">Write to us</h3>
                <form className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-white/5 rounded-lg text-white border border-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-white/5 rounded-lg text-white border border-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      required
                      placeholder="Your Message"
                      rows="3"
                      className="w-full px-4 py-3 bg-white/5 rounded-lg text-white border border-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 placeholder-gray-400 resize-none text-sm"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold py-3 px-6 rounded-lg 
                    shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:scale-[1.02] transition-all duration-300 text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;