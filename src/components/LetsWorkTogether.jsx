import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import React from 'react';

export default function LetsWorkTogether() {
  return (
    <footer id="connect" className="py-24 px-6 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-24 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-4"
          >
            Project Inquiry
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl lg:text-[140px] font-black text-slate-900 leading-[0.9] tracking-tighter"
          >
            LET'S WORK <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-rose-500">TOGETHER</span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-16">
          <div className="space-y-6 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 justify-center md:justify-start"
            >
               <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-white">
                  <img src="/profile.jpg" alt="Sinan" className="w-full h-full object-cover" />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">SINAN MOHAMMAD</h3>
                  <p className="text-slate-500 font-bold tracking-widest text-[10px] uppercase">Available for Hire</p>
               </div>
            </motion.div>
            <p className="text-slate-500 font-bold text-base max-w-sm leading-relaxed">
              Based in Kerala, India. Dedicated to building intelligent, fast, and visually stunning web applications.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-10 w-full md:w-auto">
            <motion.a 
              href="mailto:muhammadsinanac111@gmail.com"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group text-xl sm:text-2xl md:text-4xl font-black text-slate-900 hover:text-blue-600 transition-all flex items-center gap-6"
            >
              <span className="relative overflow-hidden">
                muhammadsinanac111@gmail.com
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700"></span>
              </span>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-3xl border border-slate-200 bg-slate-50 flex items-center justify-center p-2 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                 <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-slate-900 group-hover:text-white transform group-hover:-rotate-45 transition-all duration-500" />
              </div>
            </motion.a>

            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/sinan-muhammad-ac" },
                { icon: <Github size={22} />, link: "https://github.com/mohammadsnan" },
                { icon: <Mail size={22} />, link: "mailto:muhammadsinanac111@gmail.com" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: '#0f172a', color: '#fff' }}
                  className="w-14 h-14 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-600 transition-all shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">© 2024 DESIGNED & BUILT BY SINAN</p>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
             <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy</span>
             <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
