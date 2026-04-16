import { motion } from 'framer-motion';
import { Search, GitBranch, PenTool, Code } from 'lucide-react';
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      id: '01',
      title: 'Discovery',
      description: 'Understanding goals, market trends and problem definition.',
      icon: <Search size={22} />,
      accent: "text-blue-600",
      bg: "bg-blue-50 border-blue-200"
    },
    {
      id: '02',
      title: 'Strategy',
      description: 'Blueprinting architecture and planning the user experience.',
      icon: <GitBranch size={22} />,
      accent: "text-violet-600",
      bg: "bg-violet-50 border-violet-200"
    },
    {
      id: '03',
      title: 'Design',
      description: 'Crafting modern, visually stunning and interactive prototypes.',
      icon: <PenTool size={22} />,
      accent: "text-rose-600",
      bg: "bg-rose-50 border-rose-200"
    },
    {
      id: '04',
      title: 'Develop',
      description: 'Translating designs into clean, responsive and high-end code.',
      icon: <Code size={22} />,
      accent: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200"
    },
  ];

  return (
    <section id="process" className="relative py-24 px-6 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-slate-500 text-xs font-bold tracking-[0.25em] uppercase mb-4"
          >
            Streamlined Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter"
          >
            My Working <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-slate-200 -z-10 text-transparent border-dashed border-t-2 border-slate-300" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 transition-all duration-500 text-center hover:-translate-y-2 hover:shadow-lg shadow-sm"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1.5 rounded-full border border-slate-100 text-[10px] font-black text-slate-500 tracking-widest uppercase shadow-sm">
                Step {step.id}
              </div>

              <div className="relative mx-auto mb-10 w-20 h-20 flex items-center justify-center">
                <div className={`relative w-16 h-16 rounded-2xl ${step.bg} border shadow-inner flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 z-10`}>
                  <div className={`${step.accent}`}>
                    {step.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-4 transition-transform duration-500 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;