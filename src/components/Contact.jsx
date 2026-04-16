import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, ExternalLink, Send, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(event.target);
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                setSubmitStatus('success');
                event.target.reset();
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-slate-50 min-h-screen flex items-center relative overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-rose-600 text-xs font-bold tracking-[0.25em] uppercase mb-4"
                    >
                        Communication
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-6 tracking-tighter"
                    >
                        Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500">Connect</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 max-w-2xl mx-auto text-lg font-medium"
                    >
                        Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Contact Info */}
                    <div className="space-y-6 flex flex-col justify-center">
                        {[
                          { icon: <MapPin />, title: "Location", desc: "Kerala, India", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" },
                          { icon: <Mail />, title: "Email", desc: "muhammadsinanac111@gmail.com", color: "text-violet-600", bg: "bg-violet-50 border-violet-200" },
                          { icon: <ExternalLink />, title: "Network", desc: "LinkedIn & Portfolios", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" }
                        ].map((info, i) => (
                           <motion.div 
                             key={i} 
                             initial={{ opacity: 0, x: -30 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             transition={{ delay: i * 0.1 }}
                             className="p-8 bg-white rounded-[2.5rem] border border-slate-200 flex gap-6 items-center group hover:shadow-lg hover:border-slate-300 transition-all duration-500 shadow-sm"
                           >
                              <div className={`w-14 h-14 rounded-2xl ${info.bg} flex items-center justify-center shrink-0 border group-hover:scale-110 transition-all duration-500`}>
                                  <div className={`${info.color}`}>
                                    {React.cloneElement(info.icon, { size: 24 })}
                                  </div>
                              </div>
                              <div>
                                  <h3 className="text-xl font-black text-slate-900 mb-1 transition-colors">{info.title}</h3>
                                  <p className="text-slate-500 font-bold text-sm tracking-tight">{info.desc}</p>
                              </div>
                           </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-white p-6 md:p-10 lg:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-200 shadow-xl relative overflow-hidden group"
                        onSubmit={onSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2 relative z-10">
                                <label className="text-[10px] font-black text-slate-500 ml-1 uppercase tracking-widest">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    required
                                    placeholder="Sinan"
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-slate-900 placeholder:text-slate-300 font-bold"
                                />
                            </div>
                            <div className="space-y-2 relative z-10">
                                <label className="text-[10px] font-black text-slate-500 ml-1 uppercase tracking-widest">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    required
                                    placeholder="Mohammad"
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-slate-900 placeholder:text-slate-300 font-bold"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 mb-6 relative z-10">
                            <label className="text-[10px] font-black text-slate-500 ml-1 uppercase tracking-widest">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="hello@domain.com"
                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-slate-900 placeholder:text-slate-300 font-bold"
                            />
                        </div>

                        <div className="space-y-2 mb-10 relative z-10">
                            <label className="text-[10px] font-black text-slate-500 ml-1 uppercase tracking-widest">Your Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                placeholder="Tell me about your vision..."
                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition-all text-slate-900 placeholder:text-slate-300 resize-none font-bold"
                            ></textarea>
                        </div>

                        {/* Status Messages */}
                        <AnimatePresence>
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                                    className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center gap-3 text-sm font-bold shadow-sm relative z-10"
                                >
                                    <CheckCircle2 size={20} /> Transmitted Successfully!
                                </motion.div>
                            )}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                                    className="mb-6 p-5 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center gap-3 text-sm font-bold relative z-10"
                                >
                                    <XCircle size={20} /> Transmission Failed.
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full relative group inline-flex h-14 overflow-hidden rounded-2xl p-[1.5px] focus:outline-none transition-transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed z-10"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f43f5e_0%,#f59e0b_50%,#f43f5e_100%)] opacity-20 group-hover:opacity-100 transition-opacity" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-slate-900 px-8 py-1 text-base font-black text-white hover:bg-slate-800 transition-colors shadow-xl">
                                {isSubmitting ? (
                                    <>Transmitting... <Loader2 size={20} className="animate-spin" /></>
                                ) : (
                                    <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                )}
                            </span>
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
