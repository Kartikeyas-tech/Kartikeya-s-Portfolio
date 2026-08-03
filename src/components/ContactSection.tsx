import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSubmission } from '../types';
import { Mail, Linkedin, MapPin, Send, Trash2, CheckCircle2, Terminal, Phone, Building, HelpCircle, Loader2 } from 'lucide-react';
import { GreenCircuitBackground } from './Decorations';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [service, setService] = useState('Cyber Security Consultancy');
  const [msg, setMsg] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'form' | 'logs'>('form');

  // Load submissions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ks_portfolio_submissions');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse submissions', e);
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone || 'Not provided');
      formData.append('organization', org || 'Individual / Not specified');
      formData.append('service', service);
      formData.append('message', msg);
      formData.append('_subject', `New Enquiry [${service}] from ${name}`);

      const response = await fetch('https://formspree.io/f/xnjeelkv', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const newSubmission: ContactSubmission = {
          id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
          name,
          org: org || undefined,
          msg: `[Service: ${service}] ${msg}`,
          timestamp: new Date().toLocaleString()
        };

        const updated = [newSubmission, ...submissions];
        setSubmissions(updated);
        localStorage.setItem('ks_portfolio_submissions', JSON.stringify(updated));

        // Reset Form
        setName('');
        setEmail('');
        setPhone('');
        setOrg('');
        setService('Cyber Security Consultancy');
        setMsg('');
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 8000);
      } else {
        const data = await response.json().catch(() => ({}));
        if (data && data.errors && Array.isArray(data.errors)) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage('Formspree submission failed. Please verify fields and try again.');
        }
      }
    } catch (err: any) {
      console.error('Formspree submission error:', err);
      setErrorMessage('Network connection error. Could not reach Formspree endpoint.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('ks_portfolio_submissions', JSON.stringify(updated));
  };

  const clearAllSubmissions = () => {
    if (window.confirm('Clear all secure sandbox message logs?')) {
      setSubmissions([]);
      localStorage.removeItem('ks_portfolio_submissions');
    }
  };

  return (
    <section id="contact" className="py-20 bg-cyber-light-bg border-b border-cyber-border">
      <div className="max-w-[1120px] mx-auto px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-12 gap-4">
          <div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-cyber-navy mt-2 tracking-tight uppercase">
              Get In Touch
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Details Column */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-base text-cyber-ink-soft mb-8 leading-relaxed max-w-[45ch]">
                For training requests, awareness campaign design, or speaking engagements — reach out directly, or send a short brief through the secure sandbox log form.
              </p>
              
              <ul className="list-none p-0 m-0 border-t border-cyber-border">
                <li className="flex justify-between items-center py-4.5 border-b border-cyber-border">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cyber-ink-faint flex items-center gap-2">
                    <Mail size={14} className="text-cyber-green" /> Email
                  </span>
                  <a 
                    href="mailto:kartikeyastech@gmail.com" 
                    className="font-sans text-[14px] font-extrabold text-cyber-navy hover:text-cyber-green transition-colors duration-150 break-all"
                  >
                    kartikeyastech@gmail.com
                  </a>
                </li>
                <li className="flex justify-between items-center py-4.5 border-b border-cyber-border">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cyber-ink-faint flex items-center gap-2">
                    <Linkedin size={14} className="text-cyber-green" /> LinkedIn
                  </span>
                  <a 
                    href="https://www.linkedin.com/in/kartikeya-srivastava-794335192/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-sans text-[14px] font-extrabold text-cyber-navy hover:text-cyber-green transition-colors duration-150"
                  >
                    kartikeya-srivastava-794335192
                  </a>
                </li>
                <li className="flex justify-between items-center py-4.5 border-b border-cyber-border">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cyber-ink-faint flex items-center gap-2">
                    <MapPin size={14} className="text-cyber-green" /> Based In
                  </span>
                  <span className="font-sans text-[14px] font-extrabold text-cyber-navy">
                    India
                  </span>
                </li>
              </ul>
            </div>


          </div>

          {/* Form and logs columns */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {activeTab === 'form' ? (
                <motion.div
                  key="contact-form-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    {/* Success Banner */}
                    <AnimatePresence>
                      {success && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-4 bg-emerald-950 border border-cyber-green text-emerald-100 rounded-lg flex items-start gap-3 shadow-[0_4px_24px_rgba(0,230,118,0.15)]"
                        >
                          <CheckCircle2 className="text-cyber-green mt-0.5 shrink-0 animate-bounce" size={16} />
                          <div>
                            <span className="font-mono text-[9px] text-cyber-green font-bold uppercase block tracking-wider mb-0.5">
                              ENQUIRY SUBMITTED
                            </span>
                            <p className="text-xs leading-normal text-slate-200">
                              Your enquiry has been successfully submitted. Thank you for reaching out!
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="p-3.5 bg-red-950 border border-red-500 text-red-200 rounded-lg text-xs font-mono"
                        >
                          ⚠️ {errorMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="flex flex-col">
                        <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-wider text-cyber-ink-faint mb-1 font-bold">
                          Full Name <span className="text-cyber-green">*</span>
                        </label>
                        <input 
                          id="name" 
                          type="text" 
                          required 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name"
                          className="w-full border border-cyber-border rounded-lg p-2.5 font-sans text-sm bg-white text-cyber-navy focus:outline-none focus:border-cyber-green focus:shadow-[0_0_12px_rgba(0,230,118,0.1)] transition-all duration-150"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col">
                        <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider text-cyber-ink-faint mb-1 font-bold">
                          Email Address <span className="text-cyber-green">*</span>
                        </label>
                        <input 
                          id="email" 
                          type="email" 
                          required 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@organization.com"
                          className="w-full border border-cyber-border rounded-lg p-2.5 font-sans text-sm bg-white text-cyber-navy focus:outline-none focus:border-cyber-green focus:shadow-[0_0_12px_rgba(0,230,118,0.1)] transition-all duration-150"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-wider text-cyber-ink-faint mb-1 font-bold">
                          Phone / WhatsApp
                        </label>
                        <input 
                          id="phone" 
                          type="tel" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 00000 00000"
                          className="w-full border border-cyber-border rounded-lg p-2.5 font-sans text-sm bg-white text-cyber-navy focus:outline-none focus:border-cyber-green focus:shadow-[0_0_12px_rgba(0,230,118,0.1)] transition-all duration-150"
                        />
                      </div>

                      {/* Organization */}
                      <div className="flex flex-col">
                        <label htmlFor="org" className="font-mono text-[10px] uppercase tracking-wider text-cyber-ink-faint mb-1 font-bold">
                          Organization
                        </label>
                        <input 
                          id="org" 
                          type="text" 
                          value={org}
                          onChange={(e) => setOrg(e.target.value)}
                          placeholder="Law Enforcement / Agency / Firm"
                          className="w-full border border-cyber-border rounded-lg p-2.5 font-sans text-sm bg-white text-cyber-navy focus:outline-none focus:border-cyber-green focus:shadow-[0_0_12px_rgba(0,230,118,0.1)] transition-all duration-150"
                        />
                      </div>
                    </div>

                    {/* Service Required */}
                    <div className="flex flex-col">
                      <label htmlFor="service" className="font-mono text-[10px] uppercase tracking-wider text-cyber-ink-faint mb-1 font-bold">
                        Enquiry Type / Service Required
                      </label>
                      <select 
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full border border-cyber-border rounded-lg p-2.5 font-sans text-sm bg-white text-cyber-navy focus:outline-none focus:border-cyber-green focus:shadow-[0_0_12px_rgba(0,230,118,0.1)] transition-all duration-150"
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
                      <label htmlFor="msg" className="font-mono text-[10px] uppercase tracking-wider text-cyber-ink-faint mb-1 font-bold">
                        Message / Enquiry Details <span className="text-cyber-green">*</span>
                      </label>
                      <textarea 
                        id="msg" 
                        required 
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        placeholder="Detail your training requirements, audience scale, VAPT scope, or investigation inquiry..."
                        rows={4}
                        className="w-full border border-cyber-border rounded-lg p-2.5 font-sans text-sm bg-white text-cyber-navy focus:outline-none focus:border-cyber-green focus:shadow-[0_0_12px_rgba(0,230,118,0.1)] transition-all duration-150 resize-y min-h-[100px]"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="font-mono text-[11px] tracking-widest uppercase text-cyber-slate bg-cyber-green border border-cyber-green py-3 px-6 rounded-md flex items-center justify-center gap-2 cursor-pointer hover:bg-cyber-slate hover:text-cyber-green hover:border-cyber-green transition-all duration-200 select-none self-start font-bold shadow-[0_4px_16px_rgba(0,230,118,0.2)] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send size={12} />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-logs-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full bg-cyber-slate text-white border border-cyber-green/30 rounded-lg p-5 shadow-inner relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none cyber-grid" />
                  
                  <div className="flex justify-between items-center mb-4 pb-2.5 border-b border-cyber-navy/80 relative z-10">
                    <span className="font-mono text-[11px] text-cyber-green uppercase tracking-widest font-bold flex items-center gap-2">
                      <Terminal size={14} className="text-cyber-green animate-pulse" /> Sandbox Log Buffer
                    </span>
                    {submissions.length > 0 && (
                      <button
                        onClick={clearAllSubmissions}
                        className="text-[10px] font-mono text-slate-400 hover:text-cyber-green flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Trash2 size={12} /> Clear Buffer
                      </button>
                    )}
                  </div>

                  {submissions.length === 0 ? (
                    <div className="py-14 px-4 border border-dashed border-cyber-green/20 rounded-lg flex flex-col items-center justify-center text-center bg-cyber-slate/50 relative z-10">
                      <Terminal size={24} className="text-cyber-green/40 mb-3 animate-pulse" />
                      <p className="font-mono text-[11px] text-white font-bold uppercase tracking-wider">
                        No active log nodes
                      </p>
                      <p className="text-xs text-slate-400 max-w-[32ch] mt-1.5 leading-relaxed">
                        Submit a brief using the &quot;Compose Secure&quot; tab to seed this decrypted sandbox registry.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 max-h-[440px] overflow-y-auto pr-1 relative z-10">
                      {submissions.map((sub) => (
                        <div 
                          key={sub.id} 
                          className="border border-cyber-green/20 bg-cyber-navy/80 p-4 rounded-lg flex flex-col justify-between relative hover:border-cyber-green/50 transition-all duration-150"
                        >
                          <button
                            onClick={() => deleteSubmission(sub.id)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-cyber-green transition-colors p-1 cursor-pointer"
                            title="Delete record"
                          >
                            <Trash2 size={12} />
                          </button>

                          <div className="pr-6">
                            <span className="font-mono text-[9px] text-cyber-green/70 block uppercase">
                              SYS_TIMESTAMP: {sub.timestamp}
                            </span>
                            <h5 className="font-mono text-xs font-bold text-white mt-1.5 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-ping" />
                              {sub.name} {sub.org ? `[${sub.org}]` : ''}
                            </h5>
                            <p className="text-xs text-slate-300 leading-relaxed mt-2.5 bg-cyber-slate p-3 rounded border border-cyber-green/10 whitespace-pre-wrap font-mono">
                              {sub.msg}
                            </p>
                          </div>

                          <div className="mt-3.5 flex justify-between items-center text-[9px] font-mono text-slate-400 border-t border-cyber-navy/60 pt-2.5">
                            <span>HEX_ID: {sub.id.substring(0, 8).toUpperCase()}</span>
                            <span className="text-cyber-green font-bold uppercase">● DECRYPTED</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
