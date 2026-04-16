import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Code2, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};
const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden bg-white">
      {/* AI Light Background Gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-50 via-violet-50 to-rose-50 rounded-full blur-[100px] opacity-70 -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 items-center gap-12 lg:gap-8"
      >
        <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div variants={item} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 text-slate-800 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1 variants={item} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[1.05] mb-5 text-slate-900">
            Hi, I'm{' '}
            <span className="text-slate-900">Sinan</span>
            <br />
            <span className="text-slate-900">Mohammad</span>
          </motion.h1>

          <motion.h2 variants={item} className="text-xl lg:text-2xl text-slate-600 font-semibold mb-6 flex flex-wrap justify-center lg:justify-start items-center gap-3">
            Full-Stack
            <span className="px-3 py-1 rounded-lg bg-violet-100 text-violet-700 font-bold text-base border border-violet-200">MERN</span>
            Developer
          </motion.h2>

          <motion.p variants={item} className="text-slate-500 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
            I build intelligent, fast, and visually stunning web applications. Bridging clean frontend intelligence with robust backend logic.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
            <Link to="/contact" className="group inline-flex items-center justify-center gap-2.5 bg-slate-900 text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-xl shadow-slate-200 hover:shadow-slate-300 hover:-translate-y-1 transition-all duration-300">
              Let's Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="/Sinan_Mohammad_CV.html" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2.5 bg-white text-slate-700 border border-slate-200 px-7 py-3.5 rounded-xl font-bold text-base hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 shadow-sm">
              <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-5 mt-10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connect</span>
            <a href="https://github.com/mohammadsnan" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/sinan-muhammad-ac" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#0a66c2] transition-colors">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-[280px] h-[350px] sm:w-[340px] sm:h-[420px] lg:w-[400px] lg:h-[500px]">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 via-violet-100 to-rose-100 rounded-[3rem] blur-2xl opacity-60" />
            
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-2xl p-2">
              <img src="/profile.jpg" alt="Sinan Mohammad" className="w-full h-full object-cover rounded-[2rem]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
            </div>

            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -bottom-4 -left-6 bg-white/90 backdrop-blur-md border border-slate-100 px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-10">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <Code2 size={18} className="text-violet-600" />
              </div>
              <div>
                <p className="text-slate-900 text-sm font-bold leading-none">10+ Projects</p>
                <p className="text-slate-500 text-xs mt-0.5 font-medium">MERN Stack</p>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute -top-4 -right-6 bg-white/90 backdrop-blur-md border border-slate-100 px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Sparkles size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-slate-900 text-sm font-bold leading-none">1+ Years</p>
                <p className="text-slate-500 text-xs mt-0.5 font-medium">Experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
