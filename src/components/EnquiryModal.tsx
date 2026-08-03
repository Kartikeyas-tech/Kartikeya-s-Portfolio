import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, User, Building, Phone, HelpCircle, Loader2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function EnquiryModal({ isOpen, onClose, defaultService = 'Cyber Security Consultancy' }: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone || 'Not provided');
      formData.append('organization', organization || 'Individual / Not specified');
      formData.append('service', service);
      formData.append('message', message);
      formData.append('_subject', `New Enquiry [${service}] from ${name}`);

      const response = await fetch('https://formspree.io/f/xnjeelkv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        // Save local backup log if needed
        const savedSubmissions = JSON.parse(localStorage.getItem('ks_portfolio_submissions') || '[]');
        const newRecord = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
          org: organization,
          service,
          msg: message,
          timestamp: new Date().toLocaleString()
        };
        localStorage.setItem('ks_portfolio_submissions', JSON.stringify([newRecord, ...savedSubmissions]));
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && Array.isArray(data.errors)) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage('Submission failed. Please check your network or try again.');
        }
      }
    } catch (err: any) {
      console.error('Formspree submission error:', err);
      setErrorMessage('Network connection error. Could not reach Formspree server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setOrganization('');
    setService('Cyber Security Consultancy');
    setMessage('');
    setSubmitted(false);
    setErrorMessage(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-cyber-slate/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-white border border-cyber-border rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="bg-cyber-slate text-white p-6 border-b border-cyber-navy flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center text-cyber-green">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="font-mono text-[10px] text-cyber-green font-bold uppercase tracking-widest block">
                  SECURE ENQUIRY
                </span>
                <h3 className="font-sans font-black text-lg text-white uppercase tracking-tight">
                  Submit Enquiry
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-cyber-navy/60 rounded-lg transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mb-4 shadow-sm animate-bounce">
                  <CheckCircle2 size={32} />
                </div>
                <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-widest block mb-1">
                  ENQUIRY SENT SUCCESSFULLY
                </span>
                <h4 className="font-sans font-black text-xl text-cyber-navy uppercase tracking-tight mb-2">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-xs text-slate-600 max-w-[42ch] mb-6 leading-relaxed">
                  Your enquiry has been successfully delivered to <strong className="text-cyber-navy">Kartikeya Srivastava</strong>. You will receive a response shortly.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="font-mono text-xs uppercase tracking-wider px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                  <button
                    onClick={onClose}
                    className="font-mono text-xs uppercase tracking-wider px-5 py-2 bg-cyber-green text-cyber-slate font-bold rounded-lg hover:bg-emerald-400 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-mono">
                    ⚠️ {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-slate-600 mb-1 font-bold flex items-center gap-1.5">
                      <User size={12} className="text-cyber-green" /> Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full border border-slate-300 rounded-lg p-2.5 font-sans text-xs text-cyber-navy bg-slate-50/50 focus:bg-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-slate-600 mb-1 font-bold flex items-center gap-1.5">
                      <Mail size={12} className="text-cyber-green" /> Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@organization.org"
                      className="w-full border border-slate-300 rounded-lg p-2.5 font-sans text-xs text-cyber-navy bg-slate-50/50 focus:bg-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-slate-600 mb-1 font-bold flex items-center gap-1.5">
                      <Phone size={12} className="text-cyber-green" /> Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 00000 00000"
                      className="w-full border border-slate-300 rounded-lg p-2.5 font-sans text-xs text-cyber-navy bg-slate-50/50 focus:bg-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all"
                    />
                  </div>

                  {/* Organization */}
                  <div className="flex flex-col">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-slate-600 mb-1 font-bold flex items-center gap-1.5">
                      <Building size={12} className="text-cyber-green" /> Organization / Agency
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Police Academy / Tech Corp"
                      className="w-full border border-slate-300 rounded-lg p-2.5 font-sans text-xs text-cyber-navy bg-slate-50/50 focus:bg-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all"
                    />
                  </div>
                </div>

                {/* Service Needed */}
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-slate-600 mb-1 font-bold flex items-center gap-1.5">
                    <HelpCircle size={12} className="text-cyber-green" /> Enquiry Type / Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg p-2.5 font-sans text-xs text-cyber-navy bg-slate-50/50 focus:bg-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all"
                  >
                    <option value="Cyber Security Consultancy">Cyber Security Consultancy</option>
                    <option value="Corporate / Staff Security Training">Corporate / Staff Security Training</option>
                    <option value="Vulnerability Assessment & VAPT Audit">Vulnerability Assessment &amp; VAPT Audit</option>
                    <option value="OSINT & Threat Intelligence Inquiry">OSINT &amp; Threat Intelligence Inquiry</option>
                    <option value="Keynote Speaking & Guest Lecture">Keynote Speaking &amp; Guest Lecture</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-slate-600 mb-1 font-bold flex items-center gap-1.5">
                    Enquiry Details / Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your project, timeline, location, or training requirements..."
                    className="w-full border border-slate-300 rounded-lg p-2.5 font-sans text-xs text-cyber-navy bg-slate-50/50 focus:bg-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all resize-y min-h-[90px]"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-slate-400">
                    Encrypted Direct Delivery
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 bg-cyber-green text-cyber-slate rounded-lg hover:bg-emerald-400 transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
