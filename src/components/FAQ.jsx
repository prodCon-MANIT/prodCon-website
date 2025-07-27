import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
      question: "What kind of activities/Events does ProdCon conduct?",
      answer:
      "We at ProdCon chands-on sessions like guesstimates, market entry strategy, design sprints, and product teardown workshops — mimicking real-world consulting and product challenges."
    },
    {
      question: "Is there any  prior knowledge required to join ProdCon ?",
      answer:
        "Not at all. We are looking for someone who thrives to make an impact and is eager to learn.We conduct beginner-friendly sessions to upskill, specially for our team members through an initiative called NirmAn"
    },
    {
      question: "How does ProdCon help with placements?",
      answer: "We run mock interviews resume workshops,, and case prep cohorts. Many of our members land roles at top firms like  Flipkart, Amazon and Microsoft, with guidance from our strong alumni network."
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
