import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { JOB_OPENINGS } from '../data';
import { JobPosition } from '../types';
import { Briefcase, MapPin, Clock, ArrowRight, ChevronDown, ChevronUp, CheckCircle, Upload } from 'lucide-react';

export default function CareersBoard() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  
  // Apply Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [fileAttached, setFileAttached] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleExpand = (id: string) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
    }
  };

  const handleApplyClick = (job: JobPosition) => {
    setSelectedJob(job);
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setLinkedIn('');
    setFileAttached(false);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="careers" className="py-24 bg-[#020503] relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-brand-green tracking-widest uppercase font-semibold mb-3">
            CAREERS & GROWTH
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight" id="careers-title">
            Join the elite team shaping digital power
          </h2>
          <p className="mt-4 font-sans text-neutral-400 font-light" id="careers-desc">
            We are looking for exceptional engineers, technicians, and problem solvers who want to build the physical foundation of the digital future. Explore our active roles below.
          </p>
        </div>

        {/* Job Listings List */}
        <div className="max-w-4xl mx-auto space-y-4" id="careers-list">
          {JOB_OPENINGS.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className="bg-neutral-950/40 border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-brand-green/20 transition-all shadow-lg"
                id={`job-card-${job.id}`}
              >
                {/* Header block (clickable to toggle) */}
                <div
                  onClick={() => toggleExpand(job.id)}
                  className="p-6 sm:p-8 flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="space-y-2 text-left">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="font-mono text-[9px] font-bold text-brand-green uppercase tracking-wider bg-brand-green/5 border border-brand-green/20 px-2 py-0.5 rounded">
                        {job.department}
                      </span>
                      <span className="font-mono text-[9px] font-bold text-neutral-400 uppercase tracking-wider bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5" /> {job.type}
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-neutral-500 font-sans text-xs">
                      <MapPin className="h-3.5 w-3.5 text-brand-cyan" /> {job.location}
                    </div>
                  </div>

                  <button className="text-neutral-500 hover:text-white p-1 rounded-lg focus:outline-none cursor-pointer">
                    {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                </div>

                {/* Expanding details accordion block */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-neutral-900"
                    >
                      <div className="p-6 sm:p-8 bg-neutral-950/60 space-y-6 text-left">
                        {/* Description */}
                        <div className="space-y-2">
                          <h4 className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                            Role Description
                          </h4>
                          <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                            {job.description}
                          </p>
                        </div>

                        {/* Requirements */}
                        <div className="space-y-3">
                          <h4 className="font-sans text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                            Requirements & Qualifications
                          </h4>
                          <ul className="space-y-2 font-sans text-sm text-neutral-400 font-light">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex gap-2.5 items-start">
                                <span className="text-brand-green font-mono text-xs font-bold select-none mt-0.5">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action apply CTA */}
                        <div className="pt-4 border-t border-neutral-900 flex justify-end">
                          <button
                            onClick={() => handleApplyClick(job)}
                            className="bg-brand-green text-black hover:bg-white font-sans font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                            id={`apply-btn-${job.id}`}
                          >
                            Apply For This Role
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Custom dialog modal applying for roles */}
        <AnimatePresence>
          {selectedJob && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedJob(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              />

              {/* Form card dialog content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 w-full max-w-lg relative z-10 shadow-2xl text-left"
                id="apply-modal"
              >
                {/* Form header */}
                <div className="pb-4 border-b border-neutral-900 mb-6">
                  <span className="font-mono text-[10px] text-brand-green font-bold uppercase tracking-wider block mb-1">
                    APPLYING FOR CAREER ROLE
                  </span>
                  <h3 className="font-display text-xl font-bold text-white" id="modal-job-title">
                    {selectedJob.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 mt-0.5">
                    {selectedJob.location} • {selectedJob.department}
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4" id="apply-form">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs text-neutral-400 uppercase tracking-wide">Full Name</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green/30 transition-colors"
                        id="apply-name"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs text-neutral-400 uppercase tracking-wide">Email Address</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green/30 transition-colors"
                        id="apply-email"
                      />
                    </div>

                    {/* LinkedIn or Portfolio */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs text-neutral-400 uppercase tracking-wide">LinkedIn / Portfolio URL</label>
                      <input
                        type="url"
                        value={linkedIn}
                        onChange={(e) => setLinkedIn(e.target.value)}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl px-4 py-3 font-sans text-sm text-white focus:outline-none focus:border-brand-green/30 transition-colors"
                        id="apply-linkedin"
                      />
                    </div>

                    {/* Resume Upload mockup */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs text-neutral-400 uppercase tracking-wide">Resume (PDF or DOC)</label>
                      <div
                        onClick={() => setFileAttached(true)}
                        className={`border border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors ${
                          fileAttached
                            ? 'bg-brand-green/5 border-brand-green/30 text-brand-green'
                            : 'bg-neutral-900/40 border-neutral-800 text-neutral-500 hover:border-neutral-700 hover:text-neutral-400'
                        }`}
                        id="apply-resume-zone"
                      >
                        <Upload className="h-5 w-5" />
                        <span className="font-sans text-xs font-medium">
                          {fileAttached ? 'Resume_Attached.pdf' : 'Upload or Drag & Drop Resume'}
                        </span>
                        <span className="font-mono text-[9px] text-neutral-600">PDF, DOC up to 5MB</span>
                      </div>
                    </div>

                    {/* Buttons CTA */}
                    <div className="flex gap-3 pt-4 border-t border-neutral-900 mt-6">
                      <button
                        type="button"
                        onClick={() => setSelectedJob(null)}
                        className="flex-1 bg-neutral-900 text-neutral-400 hover:text-white transition-all font-sans font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl text-center border border-neutral-800 hover:border-neutral-700 cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-brand-green text-black hover:bg-white transition-all font-sans font-semibold text-xs uppercase tracking-wider py-3.5 rounded-xl text-center cursor-pointer shadow-md"
                        id="apply-submit"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                ) : (
                  // Success layout
                  <div className="py-8 flex flex-col items-center text-center space-y-4" id="apply-success">
                    <div className="h-14 w-14 rounded-full bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-lg font-bold text-white">Application Received</h4>
                      <p className="font-sans text-sm text-neutral-400 max-w-sm">
                        Thank you for your interest in Cipher! Our recruiting team has received your application for the{' '}
                        <span className="text-white font-medium">{selectedJob.title}</span> role and will review it shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="mt-6 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white font-sans font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
