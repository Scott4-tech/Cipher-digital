import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Cpu, 
  Thermometer, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Newspaper, 
  ArrowRight, 
  Calendar, 
  ChevronRight, 
  FileText,
  BadgeAlert,
  HelpCircle,
  PlayCircle
} from 'lucide-react';

// Data & Types
import { LEADERSHIP_TEAM, RECENT_UPDATES } from './data';
import { Executive, PressRelease } from './types';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import InfrastructureMap from './components/InfrastructureMap';
import MiningCalculator from './components/MiningCalculator';
import CareersBoard from './components/CareersBoard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedPR, setSelectedPR] = useState<PressRelease | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Scroll spy to update active section in the Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'stats', 'infrastructure', 'calculator', 'about', 'leadership', 'careers', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#020502] text-white min-h-screen font-sans antialiased selection:bg-brand-green selection:text-black">
      
      {/* 1. Header / Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* 2. Hero Section */}
      <Hero onLearnMoreClick={navigateToSection} />

      {/* 3. Stats Dashboard Counter */}
      <StatsCounter />

      {/* 4. Infrastructure Map Showcase */}
      <InfrastructureMap />

      {/* 5. Mining ROI Calculator Section */}
      <MiningCalculator />

      {/* 6. Why Cipher / About Section */}
      <section id="about" className="py-24 bg-[#020603] border-t border-b border-neutral-900/60 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-brand-green font-bold tracking-widest uppercase mb-3 block">
              WHY CIPHER DIGITAL
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" id="about-heading">
              Our sustainable operational advantages
            </h2>
            <p className="mt-4 font-sans text-neutral-400 font-light" id="about-subheading">
              We stand out through our low-cost long-term electricity contracts, optimized modular thermal engineering, and extreme focus on execution hashrate uptime.
            </p>
          </div>

          {/* Advantages Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="about-cards-grid">
            
            {/* Advantage 1: Low-Cost Energy Contracts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 255, 102, 0.25)' }}
              className="bg-neutral-950/40 border border-neutral-850 rounded-3xl p-8 space-y-6 text-left flex flex-col justify-between"
              id="about-card-energy"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-yellow-500/10 border border-yellow-500/25 flex items-center justify-center text-yellow-400">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Low-Cost Energy Hedging</h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                  Sourced under long-term power purchase agreements (PPAs) with direct physical hedging. Average electricity cost of approximately <span className="text-white font-medium">$0.027 - $0.035 / kWh</span> keeps operations highly profitable even during down-cycles.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-900 font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                CONTRACT MATURITIES UP TO 2032
              </div>
            </motion.div>

            {/* Advantage 2: Immersion Cooling Technology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(0, 240, 255, 0.25)' }}
              className="bg-neutral-950/40 border border-neutral-850 rounded-3xl p-8 space-y-6 text-left flex flex-col justify-between"
              id="about-card-cooling"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan">
                  <Thermometer className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Thermodynamic Optimization</h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                  Flagship facilities implement liquid dielectric immersion cooling, dissipating heat 1,200x more effectively than standard air enclosures. Extends ASIC rig longevity and enables massive hardware overclocking efficiency.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-900 font-mono text-[10px] text-brand-cyan uppercase tracking-wider">
                CUSTOM IMMERSION ARCHITECTURE
              </div>
            </motion.div>

            {/* Advantage 3: Strategic Grid Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, borderColor: 'rgba(52, 211, 153, 0.25)' }}
              className="bg-neutral-950/40 border border-neutral-850 rounded-3xl p-8 space-y-6 text-left flex flex-col justify-between"
              id="about-card-grid-interconnect"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Grid Interconnection Scale</h3>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                  Co-located adjacent to grid transmission bottlenecks to absorb stranded, zero-marginal-cost renewable wind and solar energy. Participate dynamically in grid response systems to stabilize ERCOT utility distribution.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-900 font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                DYNAMIC ERCOT GRID INTEGRATION
              </div>
            </motion.div>

          </div>

          {/* Interactive Promo Panel: Video Mockup */}
          <div className="mt-16 bg-neutral-950/30 border border-neutral-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden" id="about-promo">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl" />
            
            <div className="space-y-4 max-w-xl relative z-10">
              <span className="font-mono text-[10px] text-brand-cyan font-bold uppercase tracking-wider">
                VIDEO PRESENTATION
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Inside the Odessa Megawatt Facility
              </h3>
              <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                Take a virtual visual flight over our flagship Odessa facility. Learn how heavy utility transformers, high-density modular containers, and massive dry-cooling farms operate seamlessly together.
              </p>
            </div>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="bg-neutral-900 hover:bg-brand-green hover:text-black border border-neutral-800 text-white font-sans font-semibold text-xs tracking-wider uppercase px-6 py-4 rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-md relative z-10 shrink-0"
              id="open-video-btn"
            >
              <PlayCircle className="h-5 w-5 text-brand-green shrink-0" />
              Watch Video Tour
            </button>
          </div>

        </div>
      </section>

      {/* 7. Executive Leadership Team Section */}
      <section id="leadership" className="py-24 bg-[#010402] relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-brand-green font-bold tracking-widest uppercase mb-3 block">
              LEADERSHIP PROFILE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" id="leadership-heading">
              Our executive officers
            </h2>
            <p className="mt-4 font-sans text-neutral-400 font-light" id="leadership-subheading">
              Cipher’s founders and executives have deep experience in institutional financial markets, heavy power engineering, and large-scale tech operations.
            </p>
          </div>

          {/* Leaders Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="leadership-grid">
            {LEADERSHIP_TEAM.map((exec, idx) => (
              <motion.div
                key={exec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-neutral-950/40 border border-neutral-800/80 rounded-2xl p-6 text-left flex flex-col justify-between hover:border-brand-green/20 transition-all group"
                id={`exec-card-${idx}`}
              >
                <div className="space-y-4">
                  {/* Photo avatar */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-850">
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="object-cover w-full h-full grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="font-mono text-[9px] text-brand-green tracking-widest uppercase font-bold">
                        VIEW LEAD BIO
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold text-white leading-tight">
                      {exec.name}
                    </h3>
                    <p className="font-sans text-xs text-brand-green font-medium">
                      {exec.title}
                    </p>
                  </div>
                </div>

                <p className="mt-4 font-sans text-xs text-neutral-400 font-light leading-relaxed border-t border-neutral-900 pt-4">
                  {exec.bio}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Corporate Investors Press Releases Updates feed */}
      <section className="py-24 bg-[#020502] border-t border-b border-neutral-900/60 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl text-left">
              <span className="font-mono text-xs text-brand-green font-bold tracking-widest uppercase mb-3 block">
                NEWS & DISCLOSURES
              </span>
              <h2 className="font-display text-3xl font-bold text-white tracking-tight" id="pr-title">
                Corporate press & SEC updates
              </h2>
            </div>
            
            <button
              onClick={() => navigateToSection('contact')}
              className="font-sans text-xs font-semibold text-brand-green hover:text-white uppercase tracking-wider flex items-center gap-1 group cursor-pointer"
            >
              Sign Up For Email Alerts
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Updates Feed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="pr-grid">
            {RECENT_UPDATES.map((update, idx) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedPR(update)}
                className="bg-neutral-950/40 border border-neutral-800/80 p-8 rounded-3xl text-left flex flex-col justify-between hover:border-brand-green/20 transition-all cursor-pointer group"
                id={`pr-card-${idx}`}
              >
                <div className="space-y-4">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-500">
                    <span className="text-brand-green bg-brand-green/5 border border-brand-green/20 px-2 py-0.5 rounded">
                      {update.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-neutral-600" /> {update.date}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-brand-green transition-colors leading-snug">
                    {update.title}
                  </h3>

                  <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                    {update.snippet}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center gap-1 text-[11px] font-sans font-semibold text-brand-cyan group-hover:text-brand-green transition-colors uppercase tracking-wider">
                  Read Full Document
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Careers Openings Board */}
      <CareersBoard />

      {/* 10. Contact Corporate Form */}
      <ContactForm />

      {/* 11. Footer Section */}
      <Footer />

      {/* Media Video Tour Overlay modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden w-full max-w-3xl relative z-10 shadow-2xl"
              id="video-modal-content"
            >
              {/* Aspect Ratio video container placeholder */}
              <div className="aspect-video w-full bg-neutral-900 flex flex-col items-center justify-center p-8 relative">
                
                {/* Simulated video frame with custom graphics */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00ff66_1px,transparent_1px),linear-gradient(to_bottom,#00ff66_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                <Zap className="h-16 w-14 text-brand-green animate-pulse mb-4" />
                <h3 className="font-display text-xl font-bold text-white mb-2">ODESSA FACILITY: FLYOVER</h3>
                <p className="font-sans text-xs text-neutral-400 max-w-sm text-center font-light leading-relaxed mb-6">
                  This mock player represents the media flyover file. In a live environment, this renders high-density live streaming feeds or hosting servers tours.
                </p>

                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="bg-neutral-800 text-neutral-300 hover:text-white font-sans font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl border border-neutral-700/80 cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Press Release Details overlay modal */}
      <AnimatePresence>
        {selectedPR && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPR(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 w-full max-w-2xl relative z-10 shadow-2xl text-left"
              id="pr-modal"
            >
              <div className="pb-4 border-b border-neutral-900 mb-6">
                <div className="flex items-center justify-between font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  <span className="text-brand-green bg-brand-green/5 border border-brand-green/20 px-2 py-0.5 rounded">
                    {selectedPR.category}
                  </span>
                  <span>{selectedPR.date}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                  {selectedPR.title}
                </h3>
              </div>

              <div className="space-y-4 font-sans text-sm text-neutral-400 font-light leading-relaxed max-h-[300px] overflow-y-auto pr-2">
                <p>
                  <strong>WILMINGTON, Del., June 25, 2026</strong> — {selectedPR.snippet}
                </p>
                <p>
                  As an industrial-scale technology company focused on elite Bitcoin mining and infrastructure, we are committed to transparent reporting and long-term expansion goals. Our low-cost power purchase agreements remain a pillar of resilience across all seasonal ERCOT cycles.
                </p>
                <p>
                  Our Odessa facility expansion is proceeding on schedule, with state-of-the-art Whatsminer systems being deployed in specialized dielectric liquid immersion tanks. This deployment keeps average operating chip temperatures below 32°C, maximizing processing efficiency to approximately 22 J/TH.
                </p>
                <p className="border-t border-neutral-900 pt-4 text-xs text-neutral-500 font-mono italic">
                  Forward-Looking Statements Disclosures: This press release contains forward-looking statements under federal securities laws. Real outcomes could differ due to energy prices, grid interconnection loads, and equipment constraints.
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-900 mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedPR(null)}
                  className="bg-neutral-900 hover:bg-white hover:text-black border border-neutral-800 text-white font-sans font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl cursor-pointer transition-colors"
                >
                  Close Disclosure
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
