import { Cpu, Linkedin, Twitter, ArrowUp, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#010301] border-t border-neutral-900 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={scrollToTop}>
              <div className="bg-brand-green/10 border border-brand-green/30 p-1.5 rounded-lg group-hover:border-brand-green transition-colors">
                <Cpu className="h-5 w-5 text-brand-green" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                CIPHER <span className="text-brand-green font-light">DIGITAL</span>
              </span>
            </div>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              An industrial-scale technology company building and operating the highly optimized, power-efficient digital infrastructure required to secure computational protocols.
            </p>
            {/* Social channels links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-lg bg-neutral-900 border border-neutral-850 hover:border-brand-green/30 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-lg bg-neutral-900 border border-neutral-850 hover:border-brand-green/30 flex items-center justify-center text-neutral-400 hover:text-white transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Col 1: Corporate Navigation */}
          <div className="lg:col-span-2 space-y-3 font-sans">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Corporate</h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li>
                <a href="#hero" className="hover:text-brand-green transition-colors">
                  Home Overview
                </a>
              </li>
              <li>
                <a href="#stats" className="hover:text-brand-green transition-colors">
                  Performance Metrics
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-green transition-colors">
                  Why Cipher
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-brand-green transition-colors">
                  Executive Team
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-brand-green transition-colors">
                  Active Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Interactive Modules */}
          <div className="lg:col-span-2 space-y-3 font-sans">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-xs text-neutral-400 font-light">
              <li>
                <a href="#infrastructure" className="hover:text-brand-green transition-colors">
                  Interactive Site Map
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('calculator');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="hover:text-brand-green transition-colors cursor-pointer text-left"
                >
                  Mining ROI Calculator
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-green transition-colors">
                  Grid Partner Proposals
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Public Markets Investors */}
          <div className="lg:col-span-4 space-y-3 font-sans">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Investor Relations</h4>
            <div className="space-y-2 text-xs text-neutral-400 font-light">
              <p>Nasdaq Listed Symbol: <span className="text-brand-green font-semibold">CIFR</span></p>
              
              {/* Dynamic IR utilities links */}
              <div className="space-y-1.5 pt-1">
                <a
                  href="https://sec.report"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-brand-green transition-colors text-[11px]"
                >
                  SEC EDGAR Filings Profile
                  <ArrowUpRight className="h-3 w-3 text-neutral-600" />
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-1 hover:text-brand-green transition-colors text-[11px]"
                >
                  Request Investor Kit
                  <ArrowUpRight className="h-3 w-3 text-neutral-600" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer copyright block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[11px] text-neutral-500">
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <span>© 2026 Cipher Mining Inc. All Rights Reserved.</span>
            <span className="text-neutral-700">•</span>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-neutral-700">•</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="text-neutral-700">•</span>
            <a href="#disclaimers" className="hover:text-white transition-colors">
              SEC Forward-Looking Disclosures
            </a>
          </div>

          {/* Scroll back to top button */}
          <button
            onClick={scrollToTop}
            className="bg-neutral-900 hover:bg-brand-green hover:text-black border border-neutral-800 hover:border-brand-green/30 h-8 w-8 rounded-lg flex items-center justify-center text-neutral-400 transition-all cursor-pointer shadow-sm"
            id="footer-scroll-top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
