import { motion } from 'motion/react';
import { CORE_STATS } from '../data';
import { Award, Zap, Cpu, BarChart3 } from 'lucide-react';

const getIcon = (label: string) => {
  if (label.includes('Power Portfolio')) return <Zap className="h-6 w-6 text-brand-green" />;
  if (label.includes('Hashrate')) return <Cpu className="h-6 w-6 text-brand-cyan" />;
  if (label.includes('GW')) return <Award className="h-6 w-6 text-amber-400" />;
  return <BarChart3 className="h-6 w-6 text-emerald-400" />;
};

export default function StatsCounter() {
  return (
    <section id="stats" className="py-20 bg-[#010302] border-t border-b border-neutral-900/60 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono text-brand-green tracking-widest uppercase font-semibold mb-3"
            id="stats-label"
          >
            METRICS & CAPABILITIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
            id="stats-heading"
          >
            Bitcoin mining capacity at an elite scale
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 font-sans text-neutral-400 font-light"
            id="stats-subheading"
          >
            Our industry-leading power purchase agreements, state-of-the-art ASIC hardware, and custom modular engineering position us in the absolute top tier of low-cost, high-availability global operators.
          </motion.p>
        </div>

        {/* Bento-like Grid of Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="stats-grid">
          {CORE_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 255, 102, 0.25)' }}
              className="bg-neutral-950/50 backdrop-blur-sm border border-neutral-800/80 p-8 rounded-2xl flex flex-col justify-between transition-colors h-full"
              id={`stat-card-${idx}`}
            >
              <div className="space-y-4">
                <div className="bg-neutral-900 w-12 h-12 rounded-xl flex items-center justify-center border border-neutral-800">
                  {getIcon(stat.label)}
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-xs font-medium uppercase tracking-wider text-neutral-400">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline gap-1" id={`stat-val-${idx}`}>
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="font-display text-xl sm:text-2xl font-bold text-brand-green">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="mt-6 font-sans text-xs text-neutral-400 leading-relaxed border-t border-neutral-900 pt-4">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
