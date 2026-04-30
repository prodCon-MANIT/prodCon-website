import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    answer:
      "We conduct mock interviews, resume workshops, and Case Interview prep cohorts to prepare members for roles in Product, Consulting, and Strategy. Many of our mentors are leading Product at  top firms like Flipkart, Amazon, and Microsoft & have experience in business Consulting at MBBs of World."
  },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-purple-500' : 'text-white group-hover:text-purple-400'}`}>
          {question}
        </span>
        <ChevronDown className={`transition-transform duration-300 text-gray-500 ${isOpen ? 'rotate-180 text-purple-500' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="pb-8 text-gray-400 leading-relaxed text-lg max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="space-y-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Got <span className="text-purple-600">Questions?</span></h2>
        <p className="text-gray-500 text-xl italic">Answers for the strategically curious.</p>
      </div>
      <div className="glass-card p-8 md:px-12 rounded-[3rem]">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;