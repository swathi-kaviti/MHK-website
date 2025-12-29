import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Heart, ShoppingCart, Landmark, Cpu, Truck, ChevronRight } from 'lucide-react';

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      icon: Building2,
      title: 'Enterprise SaaS',
      description: 'Scalable multi-tenant architectures for global software delivery.',
      stats: '99.99% Uptime',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Heart,
      title: 'Healthcare Tech',
      description: 'HIPAA-compliant patient data systems and diagnostic AI models.',
      stats: 'Secure & Compliant',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: ShoppingCart,
      title: 'Digital Commerce',
      description: 'High-frequency transaction processing and personalized retail engines.',
      stats: '+40% Conversion',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Landmark,
      title: 'FinTech',
      description: 'Algorithmic trading infrastructure and fraud detection networks.',
      stats: 'Microsecond Latency',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: Cpu,
      title: 'Smart Manufacturing',
      description: 'IoT sensor integration for predictive maintenance and digital twins.',
      stats: 'Zero Downtime',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Truck,
      title: 'Global Logistics',
      description: 'Route optimization algorithms and real-time supply chain visibility.',
      stats: 'Real-time Tracking',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="industries" className="py-32 bg-slate-50 text-slate-900 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Text */}
          <div className="lg:col-span-5 sticky top-32">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
                <div className="flex items-center gap-3 mb-6">
                   <span className="h-px w-12 bg-emerald-600"></span>
                   <span className="text-emerald-600 uppercase tracking-widest text-sm font-bold">Sectors</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-slate-900">
                  Vertical <br />
                  <span className="text-slate-500">Specialization</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                   We don't just write code; we understand the unique regulatory, operational, and competitive landscapes of critical global industries.
                </p>
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="text-slate-900 font-semibold flex items-center gap-3 group"
                >
                  Explore Case Studies 
                  <span className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                     <ChevronRight className="w-4 h-4 text-white" />
                  </span>
                </motion.button>
             </motion.div>
          </div>

          {/* Right Side: Interactive List */}
          <div className="lg:col-span-7">
             <div className="space-y-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveIndustry(index)}
                    className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 border overflow-hidden ${
                       activeIndustry === index 
                       ? 'bg-white border-emerald-500/50 shadow-xl scale-[1.02]' 
                       : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                     <div className="relative z-10 flex items-start gap-6">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${industry.color} shadow-md shrink-0`}>
                           <industry.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                           <div className="flex justify-between items-start">
                              <h3 className={`text-xl font-bold mb-2 transition-colors ${activeIndustry === index ? 'text-slate-900' : 'text-slate-700'}`}>
                                 {industry.title}
                              </h3>
                              {activeIndustry === index && (
                                <motion.span 
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  className="text-xs font-bold px-3 py-1 bg-emerald-50 rounded-full text-emerald-700 border border-emerald-200"
                                >
                                   {industry.stats}
                                </motion.span>
                              )}
                           </div>
                           <p className={`text-sm leading-relaxed transition-colors ${activeIndustry === index ? 'text-slate-600' : 'text-slate-500'}`}>
                             {industry.description}
                           </p>
                        </div>
                     </div>
                     
                     {/* Decorative Background Glow for Active Item */}
                     {activeIndustry === index && (
                        <motion.div 
                          layoutId="activeGlow"
                          className={`absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br ${industry.color} opacity-5 blur-3xl rounded-full pointer-events-none`}
                        />
                     )}
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;