import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Folder } from 'lucide-react';

const SelectedWorks = () => {
  const projects = [
    {
      title: 'Voltix - EV Marketplace',
      category: 'Full-Stack MERN',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1472&auto=format&fit=crop',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      link: 'https://voltixev.vercel.app/',
      accent: "bg-blue-500",
      bg: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      title: 'Elite-Tech',
      category: 'E-Commerce React',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop',
      tags: ['React.js', 'JS', 'Tailwind CSS'],
      link: 'https://elitetech.vercel.app/',
      accent: "bg-violet-500",
      bg: "bg-violet-50 text-violet-700 border-violet-200"
    }
  ];

  return (
    <section id="work" className="py-24 px-6 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl text-left">
            <motion.p
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2"
            >
              <Folder size={16} /> Recent Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter"
            >
              Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">Works</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <a href="https://github.com/mohammadsnan" target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-[1.5rem] font-bold transition-all hover:scale-105 active:scale-95 shadow-sm hover:shadow-md hover:border-slate-300">
              Github Profile <Github size={18} />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl aspect-[16/11] flex flex-col p-2">
                
                {/* Image Section */}
                <div className="w-full h-[65%] rounded-[2rem] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase border ${project.bg}`}>
                      {project.category}
                    </span>
                  </div>
                  <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white text-slate-900 border border-slate-100 shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                    >
                      <ArrowUpRight size={20} className="w-5 h-5 text-slate-900 group-hover:text-blue-600 transition-colors" />
                  </motion.a>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-between p-6">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-tight">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
