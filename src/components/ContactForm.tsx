import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronRight, FileText } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [msg, setMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && email && msg) {
      setIsSubmitted(true);
      // Reset after a delay or keep success state
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setOrg('');
    setMsg('');
  };

  return (
    <section id="contact" className="py-24 bg-[#010402] relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-brand-green tracking-widest uppercase font-semibold mb-3">
            GET IN TOUCH
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" id="contact-title">
            Partner with Cipher Digital
          </h2>
          <p className="mt-4 font-sans text-neutral-400 font-light" id="contact-desc">
            Whether you are a power generator, an institutional investor, or a prospective technology vendor, we are always eager to connect. Submit your inquiry below.
          </p>
        </div>

        {/* Two-Column Grid: Contacts (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="contact-grid">
          
          {/* Left Column: Contact Corporate Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Primary Headquarters Address Card */}
            <div className="bg-neutral-950/40 border border-neutral-800/80 rounded-3xl p-8 space-y-6 text-left flex-grow">
              <span className="font-mono text-[9px] text-brand-green font-bold uppercase tracking-wider bg-brand-green/5 border border-brand-green/20 px-2 py-0.5 rounded inline-block">
                CORPORATE HQ
              </span>
              <h3 className="font-display text-lg font-bold text-white">Cipher Mining Inc.</h3>
              
              <div className="space-y-4 font-sans text-sm text-neutral-400">
                <div className="flex gap-3.5 items-start">
                  <MapPin className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Headquarters</p>
                    <p className="font-light mt-0.5">222 Delaware Avenue, Suite 300</p>
                    <p className="font-light">Wilmington, Delaware 19801</p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start">
                  <Phone className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Telephone Liaison</p>
                    <p className="font-light mt-0.5">+1 (302) 555-0198</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Emails List Card */}
            <div className="bg-neutral-950/40 border border-neutral-800/80 rounded-3xl p-8 space-y-4 text-left">
              <span className="font-mono text-[9px] text-brand-cyan font-bold uppercase tracking-wider bg-brand-cyan/5 border border-brand-cyan/20 px-2 py-0.5 rounded inline-block">
                DIRECT CHANNELS
              </span>
              
              <div className="space-y-4 font-sans text-sm">
                {/* Investor Relations */}
                <div className="flex items-center justify-between border-b border-neutral-900 pb-3.5">
                  <div>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">INVESTOR RELATIONS</p>
                    <p className="text-white font-medium mt-0.5">ir@ciphermining.com</p>
                  </div>
                  <Mail className="h-4 w-4 text-neutral-600" />
                </div>

                {/* Media Inquiries */}
                <div className="flex items-center justify-between border-b border-neutral-900 pb-3.5">
                  <div>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">PRESS & MEDIA</p>
                    <p className="text-white font-medium mt-0.5">media@ciphermining.com</p>
                  </div>
                  <Mail className="h-4 w-4 text-neutral-600" />
                </div>

                {/* General inquiries */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">GENERAL INQUIRIES</p>
                    <p className="text-white font-medium mt-0.5">info@ciphermining.com</p>
                  </div>
                  <Mail className="h-4 w-4 text-neutral-600" />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form Panel */}
          <div className="lg:col-span-7 bg-neutral-950/40 border border-neutral-800/80 rounded-3xl p-8 shadow-2xl relative text-left">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  id="contact-form-el"
                >
                  {/* Two-Column Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs text-neutral-400 uppercase tracking-wide">Your Name</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elizabeth Vance"
                        className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green/30 transition-colors"
                        id="contact-name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs text-neutral-400 uppercase tracking-wide">Email Address</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elizabeth@domain.com"
                        className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green/30 transition-colors"
                        id="contact-email"
                      />
                    </div>
                  </div>

                  {/* Organization/Company */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs text-neutral-400 uppercase tracking-wide">Organization / Firm</label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="Energy Grid Solutions Inc."
                      className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green/30 transition-colors"
                      id="contact-org"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs text-neutral-400 uppercase tracking-wide">How can we support you?</label>
                    <textarea
                      required
                      rows={4}
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      placeholder="Specify your inquiry, power proposal, or strategic partnership terms here..."
                      className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green/30 transition-colors resize-none"
                      id="contact-msg"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-neutral-900 flex justify-end">
                    <button
                      type="submit"
                      className="bg-brand-green text-black hover:bg-white font-sans font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                      id="contact-submit"
                    >
                      Transmit Message
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                // Success screen
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  id="contact-success-alert"
                >
                  <div className="h-14 w-14 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-bold text-white">Transmission Successful</h3>
                    <p className="font-sans text-sm text-neutral-400 max-w-sm">
                      Thank you for contacting Cipher Digital. Your submission has been securely delivered to our corporate headquarters liaison. We will respond promptly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-6 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white font-sans font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
