import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import web_gradient_rev from '../assets/web_gradient_rev.png'

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const chevronTransition = { type: "spring", stiffness: 300, damping: 30 };
  const panelTransition = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <motion.div
      layout
      initial={false}
      className="mb-4 rounded-2xl overflow-hidden bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${
          isOpen ? 'bg-indigo-50' : 'hover:bg-gray-50'
        }`}
      >
        <span className="text-xl font-semibold text-gray-800 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={chevronTransition}
          className={`flex-shrink-0 ${isOpen ? 'text-indigo-600' : 'text-gray-400'}`}
        >
          <HiChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" }
            }}
            transition={panelTransition}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-600 text-lg leading-relaxed border-t border-gray-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "What does ProdCon actually do?",
      answer:
      "ProdCon operates like a mini-consulting firm and a product school, offering hands-on exposure to business problems and tech innovations. From cracking case studies on market entry, we ensure our members gain experiential learning."
    },
    {
      question: "Who can join ProdCon?",
      answer:
        "Any student at MANIT Bhopal who is passionate about strategy, user experience, or business analysis can join. Whether you're from CS, Mech, or even Civil — if you're intrigued by why some startups scale and others fail, this is your platform to learn and grow."
    },
    {
      question: "How does ProdCon help with placements?",
      answer: "Consulting and PM roles demand structured thinking, communication, and a business-first mindset. At ProdCon, we run mock placement drives, resume reviews, and case prep cohorts, ensuring that our members are ready to crack roles in companies like Flipkart, Amazon and Microsoft. Our alumni network supports placement strongly."
    }
  ];

  return (
    <div className="relative w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ 
        backgroundImage: `url(${web_gradient_rev})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-white/80 text-center mb-12">
          Got questions? We've got answers.
        </p>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
