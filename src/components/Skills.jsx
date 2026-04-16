import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsList = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "JWT", "Mongoose"] },
    { category: "Database", items: ["MongoDB", "Schema Design", "Data Modeling"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "NPM / Yarn"] }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 text-xs font-bold tracking-[0.25em] uppercase mb-3"
          >
            My Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Skills</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsList.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
