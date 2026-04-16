import { motion } from 'framer-motion';
import { LayoutGrid, Server, Database, CheckCircle2 } from 'lucide-react';
import React from 'react';

const Services = () => {
    const services = [
        {
            id: "frontend",
            title: 'Frontend Development',
            description: 'Building pixel-perfect, responsive, and accessible user interfaces that provide seamless experiences across all devices.',
            icon: <LayoutGrid />,
            accent: "text-blue-600",
            bg: "bg-blue-50 border-blue-200",
            features: [
                "React.js & Next.js Development",
                "Responsive & Mobile-First Design",
                "Animations with Framer Motion",
                "Tailwind CSS Styling",
                "Component-Based Architecture"
            ]
        },
        {
            id: "backend",
            title: 'Backend Development',
            description: 'I architect robust and scalable server-side solutions that handle business logic and data securely and efficiently.',
            icon: <Server />,
            accent: "text-violet-600",
            bg: "bg-violet-50 border-violet-200",
            features: [
                "API Development (RESTful)",
                "Node.js & Express.js",
                "Authentication & Authorization (JWT)",
                "Third-Party API Integrations",
                "Secure Data Handling"
            ]
        },
        {
            id: "database",
            title: 'Database Design',
            description: 'I design efficient database schemas and manage data integrity to ensure your application runs smoothly at scale.',
            icon: <Database />,
            accent: "text-emerald-600",
            bg: "bg-emerald-50 border-emerald-200",
            features: [
                "MongoDB Schema Design",
                "Data Modeling & Relationships",
                "Aggregation Pipelines",
                "Performance Optimization",
                "Data Migration & Backup"
            ]
        }
    ];

    return (
        <section className="py-24 px-6 bg-slate-50 min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-violet-600 text-xs font-bold tracking-[0.25em] uppercase mb-3 flex justify-center items-center gap-2"
                    >
                        Professional Solutions
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter"
                    >
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Offerings</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Comprehensive web development services focused on quality, performance, and modern intelligent aesthetics.
                    </motion.p>
                </div>

                <div className="space-y-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-14 flex flex-col md:flex-row gap-12 md:gap-20 items-center group relative overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500"
                        >
                            <div className={`w-24 h-24 md:w-28 md:h-28 rounded-3xl ${service.bg} border shrink-0 flex items-center justify-center shadow-sm transition-all duration-700 relative z-10 group-hover:scale-105`}>
                                <div className={`${service.accent} transition-transform`}>
                                  {React.cloneElement(service.icon, { size: 40 })}
                                </div>
                            </div>

                            <div className="flex-1 relative z-10">
                                <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-violet-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                                    {service.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className={`w-3.5 h-3.5 ${service.accent}`} />
                                            </div>
                                            <span className="text-slate-600 font-bold text-sm tracking-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="absolute top-10 right-10 text-9xl font-black text-slate-50 pointer-events-none group-hover:text-slate-100 transition-colors duration-500">
                               0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
