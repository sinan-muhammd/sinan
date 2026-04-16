import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, GraduationCap, Briefcase, Mail, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-600 text-xs font-bold tracking-[0.25em] uppercase mb-3"
          >
            Get To Know Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
          >
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">Me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(220px,auto)]">

          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 row-span-2 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between group hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-8 text-emerald-600 shadow-sm border border-emerald-200 transition-transform group-hover:scale-110">
              <Code2 size={26} />
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Who I Am</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                I'm an aspiring MERN Stack Developer passionate about building responsive, user-friendly applications and solving real-world problems through clean, efficient code.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium">
                I specialize in React, Node.js, and modern web architectures — always aiming for elegant digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Role Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-slate-50 border border-slate-100 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600 shadow-sm border border-blue-200 transition-transform group-hover:scale-110">
              <Briefcase size={22} />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900">Frontend Intern</h4>
              <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-4">Febno Technologies</p>
              <ul className="text-slate-500 font-medium space-y-2 list-disc list-inside">
                <li>Redesigned website UI using React.js</li>
                <li>Built reusable modular components</li>
              </ul>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group hover:border-violet-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-5 text-violet-600 shadow-sm border border-violet-200 transition-transform group-hover:scale-110">
              <MapPin size={22} />
            </div>
            <p className="text-slate-900 font-black text-base tracking-tight">Kerala, India</p>
            <p className="text-slate-500 text-sm mt-1 font-medium">Open to Remote</p>
            <span className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-wider border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available
            </span>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group hover:border-rose-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-5 text-rose-600 shadow-sm border border-rose-200 transition-transform group-hover:scale-110">
              <Mail size={22} />
            </div>
            <p className="text-slate-900 font-black text-base tracking-tight">Say Hello</p>
            <p className="text-slate-500 text-[11px] mt-2 font-medium break-all">muhammadsinanac111@gmail.com</p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="md:col-span-2 lg:col-span-4 bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 group hover:border-amber-200 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-sm border border-amber-200">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Education</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-5 items-start">
                <div className="w-2 h-full min-h-[60px] rounded-full bg-gradient-to-b from-blue-500 to-violet-500 shrink-0" />
                <div>
                  <span className="text-blue-600 text-[10px] font-black tracking-widest uppercase">2025 – Present</span>
                  <h4 className="text-slate-900 font-black text-lg mt-1">MERN Stack</h4>
                  <p className="text-slate-500 text-sm">Technodot Academy</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-2 h-full min-h-[60px] rounded-full bg-gradient-to-b from-emerald-500 to-teal-500 shrink-0" />
                <div>
                  <span className="text-emerald-600 text-[10px] font-black tracking-widest uppercase">2022 – 2025</span>
                  <h4 className="text-slate-900 font-black text-lg mt-1">BCA</h4>
                  <p className="text-slate-500 text-sm">Moulana College, Kerala</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
