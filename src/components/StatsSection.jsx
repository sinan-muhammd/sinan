import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ number, label, suffix = '+', color, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true;
        const end = parseInt(number);
        const duration = 1800;
        const step = end / (duration / 16);
        let val = 0;
        const timer = setInterval(() => {
          val += step;
          if (val >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(val));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center justify-center py-10 px-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-baseline gap-1">
        <span className={`text-5xl md:text-6xl font-black ${color}`}>{count}</span>
        <span className={`text-3xl font-bold ${color}`}>{suffix}</span>
      </div>
      <span className="text-slate-500 text-sm font-bold uppercase tracking-wider mt-2 text-center">
        {label}
      </span>
    </motion.div>
  );
};

export default function StatsSection() {
  const stats = [
    { number: 10, label: 'Projects Completed', color: 'text-blue-600', delay: 0 },
    { number: 5, label: 'Happy Clients', color: 'text-emerald-600', delay: 0.1 },
    { number: 1, label: 'Years Experience', color: 'text-violet-600', delay: 0.2 },
    { number: 99, label: 'Code Quality', suffix: '%', color: 'text-rose-500', delay: 0.3 },
  ];

  return (
    <section className="bg-slate-50 border-t border-slate-100 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>
    </section>
  );
}