import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import React from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`rounded-3xl mb-4 overflow-hidden transition-all duration-300 border bg-white shadow-sm ${isOpen ? 'border-violet-300' : 'border-slate-100 hover:border-slate-300 hover:shadow-md'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-7 md:p-8 text-left focus:outline-none group"
      >
        <span className={`text-lg md:text-xl font-black transition-all duration-500 tracking-tight pr-4 ${isOpen ? 'text-violet-600' : 'text-slate-800 group-hover:text-slate-900'}`}>
          {question}
        </span>
        <span className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-xl transition-all duration-500 border ${isOpen ? 'bg-violet-600 border-violet-500 text-white rotate-180' : 'bg-slate-50 border-slate-200 text-slate-500 group-hover:bg-slate-100 group-hover:text-slate-800'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-7 md:px-8 pb-8 text-slate-600 leading-relaxed font-medium text-base border-t border-slate-50 pt-6">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is your typical design process?",
      answer: "My process involves Discovery (understanding goals), Strategy (planning architecture), Design (crafting beautiful modern UI), and Development (MERN stack implementation). I focus on quality and communication."
    },
    {
      question: "Do you build full-stack applications from scratch?",
      answer: "Absolutely! I specialize in building complete systems from the database (MongoDB) and backend (Node.js/Express) to the frontend (React.js/Tailwind), ensuring everything runs seamlessly."
    },
    {
      question: "Can you redesign an existing project?",
      answer: "Yes, I can revamp existing projects, transforming outdated designs into modern, high-performance, and visually captivating web applications using modern tools."
    },
    {
      question: "What technologies do you mostly use?",
      answer: "My core stack is the MERN stack (MongoDB, Express, React, Node.js). On the frontend, I use Tailwind CSS for styling and Framer Motion for high-quality animations."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-700 font-bold text-xs uppercase tracking-widest mb-6"
          >
            <MessageCircle size={14} className="text-violet-500" /> Common Queries
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mt-2 tracking-tighter"
          >
            Ask Me <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">Anything</span>
          </motion.h2>
        </div>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
