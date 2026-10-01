import { motion } from 'motion/react';
import { ArrowDown, Cpu, Zap, Activity, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onLearnMoreClick: (id: string) => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#020703] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Visual background decorations - glowing matrix green nodes and grid line paths */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent opacity-60" />
      
      {/* Decorative Vector Grid Lines */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle, #00ff66 1px, transparent 1px), linear-gradient(to right, #00ff66 1px, transparent 1px), linear-gradient(to bottom, #00ff66 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 40px 40px, 40px 40px',
        }}
      />

      {/* Background glowing spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tag / Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/5 border border-brand-green/20"
              id="hero-tag"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span className="font-mono text-xs text-brand-green tracking-wider uppercase font-semibold">
                Nasdaq: CIFR • Elite Digital Infrastructure
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                id="hero-headline"
              >
                Building the digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-brand-cyan glow-text">
                  infrastructure of the future
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
                id="hero-subheading"
              >
                Cipher is an industrial-scale technology company building and operating the highly specialized next-generation data centers powering the Bitcoin network and future heavy computational grids.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              id="hero-actions"
            >
              <button
                onClick={() => onLearnMoreClick('infrastructure')}
                className="bg-brand-green text-black hover:bg-white transition-all font-sans font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 group cursor-pointer shadow-[0_0_20px_rgba(0,255,102,0.15)] hover:shadow-[0_0_30px_rgba(0,255,102,0.3)]"
                id="hero-btn-primary"
              >
                Explore Infrastructure
                <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={() => onLearnMoreClick('calculator')}
                className="bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-brand-green/30 transition-all font-sans font-semibold px-8 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                id="hero-btn-secondary"
              >
                ROI Modeling Tool
              </button>
            </motion.div>

            {/* Core Pillars Features (mini-grid) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-900/60 max-w-xl mx-auto lg:mx-0 text-left"
              id="hero-pillars"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-brand-green font-mono text-xs font-semibold tracking-wider uppercase">
                  <Zap className="h-3.5 w-3.5" />
                  Power
                </div>
                <p className="text-xs text-neutral-400 font-sans">Low cost contracts</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-brand-cyan font-mono text-xs font-semibold tracking-wider uppercase">
                  <Cpu className="h-3.5 w-3.5" />
                  Hardware
                </div>
                <p className="text-xs text-neutral-400 font-sans">Elite ASIC fleets</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase">
                  <Activity className="h-3.5 w-3.5" />
                  Cooling
                </div>
                <p className="text-xs text-neutral-400 font-sans">Liquid immersion</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-neutral-300 font-mono text-xs font-semibold tracking-wider uppercase">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Scale
                </div>
                <p className="text-xs text-neutral-400 font-sans">Publicly traded</p>
              </div>
            </motion.div>

          </div>

          {/* Hero Right Content - Advanced Tech Graphic / Floating Schematic Dashboard */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-neutral-950/40 border border-brand-green/10 p-6 shadow-2xl overflow-hidden backdrop-blur-md"
              id="hero-graphic"
            >
              {/* Circuit lines decorative overlays */}
              <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#00ff66_1px,transparent_1px),linear-gradient(to_bottom,#00ff66_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              {/* Floating state mock metrics inside a gorgeous UI dashboard mockup */}
              <div className="space-y-5 relative z-10 flex flex-col h-full justify-between">
                
                {/* Dashboard Header */}
                <div className="flex justify-between items-center pb-4 border-b border-neutral-900">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
                    <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-400">
                      ODESSA INFRASTRUCTURE NODES
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-brand-green font-semibold bg-brand-green/5 border border-brand-green/25 px-2 py-0.5 rounded">
                    ACTIVE
                  </span>
                </div>

                {/* Substation Schema Wireframe representation */}
                <div className="flex-grow flex flex-col justify-center gap-4 py-4">
                  
                  {/* Energy input node */}
                  <div className="flex items-center justify-between bg-neutral-900/40 border border-neutral-800/80 p-3 rounded-xl hover:border-brand-green/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 text-yellow-400">
                        <Zap className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-sans text-xs text-neutral-400">POWER DRAW</p>
                        <p className="font-mono text-sm text-white font-semibold">207.4 MW</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-yellow-500 font-semibold">99.8% EFF</span>
                  </div>

                  {/* Hashrate node */}
                  <div className="flex items-center justify-between bg-neutral-900/40 border border-neutral-800/80 p-3 rounded-xl hover:border-brand-green/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 text-brand-cyan">
                        <Cpu className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-sans text-xs text-neutral-400">COMPUTATION CAP</p>
                        <p className="font-mono text-sm text-white font-semibold">6,210 PH/s</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-brand-cyan font-semibold">8.4 EH/s POOL</span>
                  </div>

                  {/* Temperature node */}
                  <div className="flex items-center justify-between bg-neutral-900/40 border border-neutral-800/80 p-3 rounded-xl hover:border-brand-green/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-brand-green/10 flex items-center justify-center border border-brand-green/20 text-brand-green">
                        <Activity className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-sans text-xs text-neutral-400">IMMERSION SYSTEM TEMP</p>
                        <p className="font-mono text-sm text-white font-semibold">31.2°C Stable</p>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-brand-green font-semibold">LIQUID COOLD</span>
                  </div>

                </div>

                {/* Footer status line */}
                <div className="pt-4 border-t border-neutral-900 flex justify-between items-center font-mono text-[9px] text-neutral-500">
                  <span>LAST SEC DATA SYNC: ACTIVE</span>
                  <span>SSL v3 SECT</span>
                </div>

              </div>

              {/* Glowing circles overlapping from bottom */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
