import { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activePage?: string;
  onNavigate?: (pageId: string) => void;
  onOpenEnquiryModal?: () => void;
}

export default function Header({ activePage, onOpenEnquiryModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('profile');

  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash) {
        setCurrentHash(hash);
      } else {
        setCurrentHash('profile');
      }
    };

    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const activeSection = activePage || currentHash;

  const navLinks = [
    { name: 'Home', href: '#profile', id: 'profile' },
    { name: 'Expertise', href: '#expertise', id: 'expertise' },
    { name: 'Roadmap', href: '#roadmap', id: 'roadmap' },
    { name: 'Resources', href: '#resources', id: 'resources' },
    { name: 'Portfolio', href: '#engagements', id: 'engagements' },
    { name: 'Publications', href: '#publications', id: 'publications' },
    { name: 'Gallery', href: '#awards', id: 'awards' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cyber-slate/95 backdrop-blur-md border-b border-cyber-navy/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <a href="#profile" className="flex items-center gap-2 font-sans font-black text-[15px] sm:text-[16px] tracking-tight text-cyber-green no-underline select-none hover:opacity-80 transition-opacity duration-200">
            <span>
              Kartikeya Srivastava
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`font-mono text-[12px] tracking-wider uppercase no-underline relative py-1 transition-colors duration-200 ${
                    isActive ? 'text-cyber-green' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Underline Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-cyber-green"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button - Enquiry */}
          <div className="hidden md:block">
            <button
              onClick={() => {
                if (onOpenEnquiryModal) {
                  onOpenEnquiryModal();
                } else {
                  window.location.hash = 'contact';
                }
              }}
              className="font-mono text-[11px] tracking-wider uppercase border border-cyber-green text-cyber-green px-4.5 py-2 rounded-sm hover:bg-cyber-green hover:text-cyber-slate transition-all duration-200 select-none shadow-[0_0_12px_rgba(0,230,118,0.15)] cursor-pointer"
            >
              Enquiry
            </button>
          </div>

          {/* Mobile Nav Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-cyber-navy/60 bg-cyber-slate"
          >
            <div className="px-8 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-xs tracking-wider uppercase py-2.5 border-b border-cyber-navy/40 last:border-0 transition-colors ${
                    activeSection === link.id ? 'text-cyber-green font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenEnquiryModal) {
                    onOpenEnquiryModal();
                  } else {
                    window.location.hash = 'contact';
                  }
                }}
                className="mt-2 text-center font-mono text-xs tracking-wider uppercase border border-cyber-green text-cyber-green py-2.5 rounded-sm bg-cyber-green/5 cursor-pointer"
              >
                Enquiry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
