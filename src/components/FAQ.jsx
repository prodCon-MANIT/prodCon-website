import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import web_gradient_rev from '../assets/web_gradient_rev.png'

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const chevronTransition = { type: "tween", duration: 0.3, ease: "easeInOut" };
  const panelTransition  = { type: "tween", duration: 0.3, ease: "easeInOut" };

  return (
    <motion.div
      layout
      initial={false}
      className="mb-3 bg-gray-100/50 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-3 text-left text-lg text-black font-medium hover:bg-gray-200/50 transition"
      >
        {question}
        <motion.div
          layout
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={chevronTransition}
          style={{ originY: 0.5 }}
        >
          <HiChevronDown size={20} className="text-black" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit   ={{ height: 0, opacity: 0 }}
            transition={panelTransition}
            className="px-5 pb-4 text-gray-800 border-t border-gray-200 overflow-hidden"
          >
            {answer}
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
      "ProdCon operates like a mini-consulting firm and a product school, offering hands-on exposure to business problems and tech innovations. From cracking case studies on market entry, we ensure our members gain experiential learning ."
    },
    {
      question: "Who can join ProdCon?",
      answer:
        " Any student at MANIT Bhopal who is passionate about strategy, user experience, or business analysis can join. Whether you're from CS, Mech, or even Civil — if you're intrigued by why some startups scale and others fail, this is your platform to learn and grow."
    },
    {
      question: "How does ProdCon help with placements?",
      answer: " Consulting and PM roles demand structured thinking, communication, and a business-first mindset. At ProdCon, we run mock placement drives, resume reviews, and case prep cohorts, ensuring that our members are ready to crack roles in companies like Flipkart , Amazon and Microsoft. Our alumni network  supports placement strongly."
    }
  ];

  return (
    <div className="w-full mx-auto p-6"
          style={{ backgroundImage: `url(${web_gradient_rev})` }}
    >
      <h2 className="text-3xl font-bold text-black mb-8 text-center">
        Frequently Asked Questions
      </h2>
      {faqs.map((item, idx) => (
        <AccordionItem
          key={idx}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
