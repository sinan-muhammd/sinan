import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LayoutGrid, Server, Database, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Frontend',
      description: 'Building responsive, dynamic UIs with React and Tailwind CSS.',
      icon: <LayoutGrid />,
      accent: "text-blue-600",
      bg: "bg-blue-50 border-blue-200",
    },
    {
      title: 'Backend',
      description: 'Creating robust server-side APIs with Node.js and Express.',
      icon: <Server />,
      accent: "text-violet-600",
      bg: "bg-violet-50 border-violet-200",
    },
    {
      title: 'Database',
      description: 'Architecting scalable schemas using MongoDB for fast retrieval.',
      icon: <Database />,
      accent: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-violet-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              My Expertise
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              What I Do <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">Best</span>
            </motion.h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
            View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:shadow-md transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.bg} border flex items-center justify-center mb-8 transition-transform group-hover:scale-110`}>
                <div className={s.accent}>{React.cloneElement(s.icon, { size: 24 })}</div>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;