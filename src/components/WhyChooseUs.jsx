import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Rocket, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Over a decade of experience delivering enterprise-grade solutions to Fortune 500 companies and innovative startups.'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'World-class engineers, data scientists, and consultants committed to your success from concept to deployment.'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Agile development processes that accelerate time-to-market while maintaining the highest quality standards.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security practices and compliance standards built into every solution we deliver.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-white">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            The MHK <span className="text-emerald-600">Advantage</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Strategic partnership that goes beyond simple vendor relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="mb-8 flex justify-center">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:border-emerald-100 group-hover:bg-emerald-50 transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-emerald-700 transition-colors">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;