import React from 'react';
import { Linkedin, Twitter, ArrowUp, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenEnquiryModal?: () => void;
}

export default function Footer({ onOpenEnquiryModal }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = [
    { name: 'Home', href: '#profile' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Resources', href: '#resources' },
    { name: 'Portfolio', href: '#engagements' },
    { name: 'Publications', href: '#publications' },
    { name: 'Gallery', href: '#awards' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kartikeya-srivastava-794335192/',
      icon: Linkedin,
      hoverColor: 'hover:bg-[#0A66C2] hover:text-white border-[#0A66C2]/40',
    },
    {
      name: 'Twitter / X',
      href: 'https://twitter.com',
      icon: Twitter,
      hoverColor: 'hover:bg-sky-500 hover:text-white border-sky-500/40',
    },
    {
      name: 'Email',
      href: 'mailto:kartikeyastech@gmail.com',
      icon: Mail,
      hoverColor: 'hover:bg-emerald-600 hover:text-white border-emerald-500/40',
    },
  ];

  return (
    <footer className="border-t border-cyber-navy/90 bg-[#060D17] text-slate-300 relative overflow-hidden pt-16 pb-12">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none cyber-grid" />

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <a href="#profile" className="inline-flex items-center gap-2 font-sans font-black text-xl text-cyber-green tracking-tight hover:opacity-90 transition-opacity">
              <span>Kartikeya Srivastava</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[42ch]">
              Digital Investigations, OSINT Methodology, Law Enforcement Advisory &amp; Cybersecurity Awareness Specialist based in India.
            </p>

            <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span>Available for LEA Workshops &amp; Advisory</span>
            </div>

            {/* Social Media Icons */}
            <div className="pt-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-3 font-semibold">
                Connect via Social Channels
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 transition-all duration-200 ${social.hoverColor} hover:scale-105 shadow-sm`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* PAGE NAVIGATION */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyber-green block mb-4">
              Navigation Pages
            </span>
            <ul className="grid grid-cols-2 gap-2 font-mono text-xs">
              {pages.map((page) => (
                <li key={page.name}>
                  <a
                    href={page.href}
                    className="text-slate-400 hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5 py-1"
                  >
                    <span className="text-cyber-green/50 text-[10px]">&gt;</span>
                    <span>{page.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & DIRECTIVES */}
          <div className="md:col-span-3 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyber-green block mb-2">
              Direct Contact
            </span>
            
            <div className="space-y-3 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyber-green shrink-0" />
                <a
                  href="mailto:kartikeyastech@gmail.com"
                  className="text-slate-300 hover:text-cyber-green transition-colors select-all"
                >
                  kartikeyastech@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  if (onOpenEnquiryModal) {
                    onOpenEnquiryModal();
                  } else {
                    window.location.hash = 'contact';
                  }
                }}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase border border-cyber-green text-cyber-green px-4 py-2.5 rounded-lg hover:bg-cyber-green hover:text-[#05122C] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Enquiry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & NODE METADATA */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left font-mono text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Kartikeya Srivastava. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyber-green hover:border-cyber-green/40 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

