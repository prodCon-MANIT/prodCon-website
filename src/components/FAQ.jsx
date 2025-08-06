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
        className={`w-full flex items-center justify-between p-5 transition-colors duration-300 ${
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
      question: "What kind of activities/events does ProdCon conduct?",
      answer:
      "At ProdCon, we host engaging and hands-on sessions such as Guesstimates workshops, market entry strategy simulations, design sprints, and product teardown workshops , all designed to mimic real-world Product management and Consulting practices.Additionally we have initiatives like NirmAn especially for ProdCon members."
    },
    {
      question: "Is there any  prior knowledge required to join ProdCon ?",
      answer:
        "Not at all. We welcome students who are eager to learn and want to make an impact. Our beginner-friendly sessions help members build skills first in product thinking, business strategy, and Consulting frameworks , especially through our training initiative called NirmAn."
    },
    {
      question: "How does ProdCon help with placements?",
      answer: "We conduct mock interviews, resume workshops, and Case Interview prep cohorts to prepare members for roles in Product, Consulting, and Strategy. Many of our mentors are leading Product at  top firms like Flipkart, Amazon, and Microsoft & have experience in business Consulting at MBBs of World."
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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-2 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-white/80 text-center mb-12">
          Questions? We've got answers.
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
