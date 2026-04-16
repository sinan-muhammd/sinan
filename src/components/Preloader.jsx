import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [phase, setPhase] = useState('name');

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('done'), 2000);
        const t2 = setTimeout(onComplete, 2500);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, [onComplete]);

    return (
        <motion.div
            key="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
            {/* Subtle gradient top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-rose-500" />

            <AnimatePresence mode="wait">
                {phase === 'name' && (
                    <motion.div
                        key="name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center gap-5"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
                            Sinan Mohammad
                        </h1>
                        <div className="flex items-center gap-3">
                            <div className="h-px w-10 bg-slate-200" />
                            <p className="text-sm font-semibold text-slate-400 tracking-[0.25em] uppercase">
                                Full-Stack Developer
                            </p>
                            <div className="h-px w-10 bg-slate-200" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Loading bar */}
            <div className="absolute bottom-8 w-48 h-[2px] bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: phase === 'name' ? '70%' : '100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="h-full bg-gradient-to-r from-blue-500 via-violet-500 to-rose-500"
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
