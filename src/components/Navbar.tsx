import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Cpu, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'stats', label: 'Overview' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'about', label: 'Why Cipher' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-brand-green/10 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2 cursor-pointer group"
            id="nav-logo"
          >
            <div className="bg-brand-green/10 border border-brand-green/30 p-1.5 rounded-lg group-hover:border-brand-green transition-colors">
              <Cpu className="h-5 w-5 text-brand-green group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-white">
              CIPHER <span className="text-brand-green font-light group-hover:text-brand-cyan transition-colors duration-300">DIGITAL</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-sans text-sm font-medium tracking-wide transition-colors relative py-1.5 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-brand-green'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick('calculator')}
              className="bg-brand-green text-black hover:bg-white hover:text-black font-sans font-semibold text-xs tracking-wider uppercase px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,255,102,0.15)] hover:shadow-[0_0_20px_rgba(0,255,102,0.3)]"
              id="nav-cta"
            >
              ROI Calc
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-400 hover:text-white p-1 rounded-lg focus:outline-none cursor-pointer"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-neutral-950 border-b border-brand-green/10"
            id="mobile-menu-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-brand-green/10 text-brand-green border-l-2 border-brand-green'
                      : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                  }`}
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                  <ChevronRight className={`h-4 w-4 ${activeSection === item.id ? 'text-brand-green' : 'text-neutral-600'}`} />
                </button>
              ))}
              <div className="pt-4 px-3">
                <button
                  onClick={() => handleNavClick('calculator')}
                  className="w-full bg-brand-green text-black hover:bg-white font-sans font-semibold text-sm py-3 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                  id="mobile-nav-cta"
                >
                  Launch ROI Calculator
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
