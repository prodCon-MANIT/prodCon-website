import React, { useState } from 'react';
import './contact.css';
import web_gradient from "../assets/web_gradient.png";
import myImage from "../assets/location-bg.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [contactFormData, setContactFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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



  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxVvzjE_kf-SCVp61exDLw2h-XqWLm3NviRW7gJ6tYP2tdqPsQXavJqU68xCJsGP0eM/exec';

      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactFormData)
      });

      setSubmitMessage('Message sent successfully!');

      setContactFormData({
        fullName: '',
        email: '',
        message: ''
      });

    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 3000);
    }
  };

  return (
    <div className="overflow-x-hidden text-white font-sans">
      <div
        className="md:min-h-60 min-h-80 bg-cover bg-center flex flex-col items-center justify-end  px-4 sm:px-6 md:px-8 pb-10"
        style={{ backgroundImage: `url(${web_gradient})` }}
      >

        <div className="w-full px-2">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 flex flex-col md:flex-row items-center justify-between p-2 md:p-4 max-w-4xl mx-auto mt-16 md:mt-28">

            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Become our <span className="text-purple-700">Sponsor</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-2">
                Support our mission and grow with us.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center w-full md:w-auto bg-gray-50 rounded-lg border border-gray-300 overflow-hidden shadow-sm mt-3 md:mt-0">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-transparent placeholder-gray-500 text-gray-800 text-sm md:text-base focus:outline-none"
              />
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-sm md:text-base font-medium transition-colors w-full sm:w-auto"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Location Section */}
      <div>
        <div
          className="relative bg-cover bg-center text-center text-white"
          style={{
            backgroundImage: `url(${myImage})`,
            height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center px-4">
            <h2 className="text-5xl font-bold text-[#D99343] mb-4">Location</h2>
            <p className="font-medium mb-2 sm:font-bold text-xl sm:text-5xl">Maulana Azad National Institute of Technology</p>
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
        title="MANIT Bhopal Location"
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
                      <p className="text-purple-300 font-medium text-m">Kushagra Tiwari</p>
                      <a href="tel:+918092834736" className="text-gray-300 text-sm hover:text-purple-400 transition-colors">+91 8092834736</a>
                    </div>
                    <div>
                      <p className="text-purple-300 font-medium text-m">Saksham Guliyani</p>
                      <a href="tel:+919462945410" className="text-gray-300 text-sm hover:text-purple-400 transition-colors">+91 94629 45410</a>
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

                {/* Submit Message */}
                {submitMessage && (
                  <div className={`mb-4 p-3 rounded-lg text-sm ${submitMessage.includes('Error')
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                    : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                    {submitMessage}
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={contactFormData.fullName}
                      onChange={handleContactInputChange}
                      required
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-white/5 rounded-lg text-white border border-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={contactFormData.email}
                      onChange={handleContactInputChange}
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-white/5 rounded-lg text-white border border-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={contactFormData.message}
                      onChange={handleContactInputChange}
                      required
                      placeholder="Your Message"
                      rows="3"
                      className="w-full px-4 py-3 bg-white/5 rounded-lg text-white border border-purple-500/20 focus:border-purple-500 outline-none transition-all duration-300 placeholder-gray-400 resize-none text-sm"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold py-3 px-6 rounded-lg 
                    shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:scale-[1.02] transition-all duration-300 text-sm
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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