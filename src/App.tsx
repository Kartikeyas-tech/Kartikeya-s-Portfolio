import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, UserCheck, Award } from 'lucide-react';
import Header from './components/Header';
import HeroBackgroundSlideshow from './components/HeroBackgroundSlideshow';
import KnowMeMore from './components/KnowMeMore';
import NetworkDiagram from './components/NetworkDiagram';
import ExpertiseSection from './components/ExpertiseSection';
import WhyChooseSection from './components/WhyChooseSection';
import ApproachSection from './components/ApproachSection';
import EngagementsSection from './components/EngagementsSection';
import CareerRoadmap from './components/CareerRoadmap';
import PublicationsSection from './components/PublicationsSection';
import ResourcesSection from './components/ResourcesSection';
import ContactSection from './components/ContactSection';
import AwardsGallery from './components/AwardsGallery';
import VirusTotalScannerModal from './components/VirusTotalScannerModal';
import EnquiryModal from './components/EnquiryModal';
import Footer from './components/Footer';
import { ArcRing } from './components/Decorations';

// Use the expert profile image path
// @ts-ignore
import expertProfileImg from './assets/images/kartikeya_profile.png';

export default function App() {
  const [activePage, setActivePage] = useState('profile');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  useEffect(() => {
    const getPageFromHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = [
        'profile',
        'expertise',
        'roadmap',
        'resources',
        'engagements',
        'publications',
        'awards',
        'contact',
      ];
      if (hash && validPages.includes(hash)) {
        return hash;
      }
      return 'profile';
    };

    setActivePage(getPageFromHash());

    const handleHashChange = () => {
      const newPage = getPageFromHash();
      setActivePage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white text-cyber-ink selection:bg-cyber-green selection:text-cyber-slate flex flex-col font-sans">
      <Header activePage={activePage} onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {/* PUBLICATIONS PAGE VIEW */}
            {activePage === 'publications' && (
              <div>
                <div className="bg-cyber-slate text-white py-12 border-b border-cyber-navy">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-green uppercase tracking-widest mb-2 font-bold">
                      <a href="#profile" className="hover:underline">Home</a>
                      <span>/</span>
                      <span className="text-slate-400">Publications</span>
                    </div>
                    <h1 className="font-sans font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                      Publications &amp; Special Projects
                    </h1>
                  </div>
                </div>
                <PublicationsSection />
              </div>
            )}

            {/* RESOURCES PAGE VIEW */}
            {activePage === 'resources' && (
              <div>
                <div className="bg-cyber-slate text-white py-12 border-b border-cyber-navy">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-green uppercase tracking-widest mb-2 font-bold">
                      <a href="#profile" className="hover:underline">Home</a>
                      <span>/</span>
                      <span className="text-slate-400">Resources</span>
                    </div>
                    <h1 className="font-sans font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                      Security &amp; OSINT Resources
                    </h1>
                  </div>
                </div>
                <ResourcesSection />
              </div>
            )}

            {/* EXPERTISE PAGE VIEW */}
            {activePage === 'expertise' && (
              <div>
                <div className="bg-cyber-slate text-white py-12 border-b border-cyber-navy">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-green uppercase tracking-widest mb-2 font-bold">
                      <a href="#profile" className="hover:underline">Home</a>
                      <span>/</span>
                      <span className="text-slate-400">Expertise</span>
                    </div>
                    <h1 className="font-sans font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                      Core Cyber Security Expertise
                    </h1>
                  </div>
                </div>
                <ExpertiseSection />
                <ApproachSection />
              </div>
            )}

            {/* ROADMAP PAGE VIEW */}
            {activePage === 'roadmap' && (
              <div>
                <div className="bg-cyber-slate text-white py-12 border-b border-cyber-navy">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-green uppercase tracking-widest mb-2 font-bold">
                      <a href="#profile" className="hover:underline">Home</a>
                      <span>/</span>
                      <span className="text-slate-400">Roadmap</span>
                    </div>
                    <h1 className="font-sans font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                      Career Roadmap &amp; Guidance
                    </h1>
                  </div>
                </div>
                <CareerRoadmap />
              </div>
            )}

            {/* PORTFOLIO / ENGAGEMENTS PAGE VIEW */}
            {activePage === 'engagements' && (
              <div>
                <div className="bg-cyber-slate text-white py-12 border-b border-cyber-navy">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-green uppercase tracking-widest mb-2 font-bold">
                      <a href="#profile" className="hover:underline">Home</a>
                      <span>/</span>
                      <span className="text-slate-400">Portfolio</span>
                    </div>
                    <h1 className="font-sans font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                      Engagements &amp; Fieldwork Portfolio
                    </h1>
                  </div>
                </div>
                <EngagementsSection />
              </div>
            )}

            {/* GALLERY & AWARDS PAGE VIEW */}
            {activePage === 'awards' && (
              <div>
                <div className="bg-cyber-slate text-white py-12 border-b border-cyber-navy">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-green uppercase tracking-widest mb-2 font-bold">
                      <a href="#profile" className="hover:underline">Home</a>
                      <span>/</span>
                      <span className="text-slate-400">Gallery</span>
                    </div>
                    <h1 className="font-sans font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                      Gallery
                    </h1>
                  </div>
                </div>
                <div className="bg-white text-slate-900 py-16">
                  <div className="max-w-[1120px] mx-auto px-8">
                    <AwardsGallery />
                  </div>
                </div>
              </div>
            )}

            {/* CONTACT PAGE VIEW */}
            {activePage === 'contact' && (
              <div>
                <div className="bg-cyber-slate text-white py-12 border-b border-cyber-navy">
                  <div className="max-w-[1240px] mx-auto px-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-green uppercase tracking-widest mb-2 font-bold">
                      <a href="#profile" className="hover:underline">Home</a>
                      <span>/</span>
                      <span className="text-slate-400">Contact</span>
                    </div>
                    <h1 className="font-sans font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                      Schedule An Appointment or Inquiry
                    </h1>
                  </div>
                </div>
                <ContactSection />
              </div>
            )}

            {/* HOME PAGE VIEW (DEFAULT) */}
            {(activePage === 'profile' || activePage === 'home') && (
              <div>
                {/* HERO SECTION */}
                <section id="profile" className="min-h-[calc(100vh-4.5rem)] flex items-center py-12 lg:py-16 bg-cyber-slate text-white overflow-hidden relative cyber-grid">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyber-slate/30 via-transparent to-cyber-slate/80 pointer-events-none" />
                  <HeroBackgroundSlideshow />

                  <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyber-green block mb-2">
                          HELLO I&apos;M
                        </span>
                        <motion.h1 
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="font-sans font-black text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.05] tracking-tight mb-5 text-white uppercase"
                        >
                          Kartikeya <span className="text-cyber-green">Srivastava</span>
                        </motion.h1>

                        <p className="font-mono text-[13px] text-cyber-green font-bold tracking-widest mb-6 uppercase border-l-2 border-cyber-green pl-3">
                          CYBER SECURITY EXPERT <span className="text-slate-500 mx-2">/</span> YOUNG ENTREPRENEUR
                        </p>

                        <p className="text-[16.5px] text-slate-300 max-w-[50ch] leading-relaxed mb-8">
                          I work closely with Law Enforcement Agencies and different organizations to deliver specialized training in Open-Source Intelligence, and design cyber awareness campaigns that help officers, institutions, and the public recognize and resist digital threats.
                        </p>

                        <div className="flex flex-wrap gap-3.5 items-center">
                          <a 
                            href="#expertise" 
                            className="font-mono text-[12px] tracking-wider uppercase text-cyber-slate bg-cyber-green border border-cyber-green px-6 py-3 rounded-sm flex items-center gap-2 cursor-pointer hover:bg-white hover:border-white transition-all duration-150 select-none font-bold shadow-[0_4px_20px_rgba(0,230,118,0.25)]"
                          >
                            <span>Explore Expertise</span>
                            <span>→</span>
                          </a>
                          <a 
                            href="#contact" 
                            className="font-mono text-[12px] tracking-wider uppercase border border-cyber-green text-cyber-green px-6 py-3 rounded-sm hover:bg-cyber-green hover:text-cyber-slate transition-all duration-200 select-none font-bold shadow-[0_0_12px_rgba(0,230,118,0.15)] flex items-center justify-center cursor-pointer"
                          >
                            Get In Touch
                          </a>
                        </div>
                      </div>

                      <div className="relative flex justify-center items-center">
                        <svg className="absolute w-[300px] sm:w-[380px] md:w-[460px] lg:w-[500px] xl:w-[540px] aspect-square pointer-events-none z-0 overflow-visible" viewBox="0 0 100 100">
                          <defs>
                            <linearGradient id="heroRingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#00e676" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#00e676" stopOpacity="0.01" />
                            </linearGradient>
                          </defs>
                          <circle cx="50" cy="50" r="48.5" fill="none" stroke="url(#heroRingGradient)" strokeWidth="0.7" />
                        </svg>

                        <div className="absolute w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] aspect-square rounded-full bg-cyber-green/5 blur-[80px] pointer-events-none z-0" />

                        <div className="relative z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px] xl:w-[520px] aspect-[3/4] overflow-hidden flex items-end rounded-none">
                          <img 
                            src={expertProfileImg} 
                            alt="Kartikeya Srivastava" 
                            className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02]"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-cyber-slate via-transparent to-transparent opacity-85" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <KnowMeMore />

                {/* ABOUT / MISSION OVERVIEW */}
                <section className="py-16 sm:py-20 bg-white text-slate-900 border-b border-cyber-border relative overflow-hidden">
                  <ArcRing position="top-right" sizeClassName="w-[300px] h-[300px] sm:w-[440px] sm:h-[440px]" strokeWidth={28} />
                  <ArcRing position="bottom-left" sizeClassName="w-[260px] h-[260px] sm:w-[360px] sm:h-[360px]" strokeWidth={22} className="opacity-75" />

                  <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                      <div className="lg:col-span-7 flex flex-col justify-center">
                        <span className="font-mono text-xs font-bold text-cyber-green-dark uppercase tracking-widest block mb-3">
                          BACKGROUND &amp; MISSION
                        </span>
                        <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[32px] text-cyber-navy uppercase tracking-tight leading-[1.2] mb-6">
                          BRIDGING TECHNICAL OSINT ANALYSIS &amp; OPERATIONAL LAW ENFORCEMENT NEEDS
                        </h2>
                        <p className="text-[14.5px] text-slate-600 leading-relaxed mb-4 text-justify">
                          Kartikeya Srivastava has established himself as a trusted figure in digital investigations, open-source intelligence (OSINT), and cyber defense strategy across India. Working closely with Law Enforcement Agencies (LEAs), policing wings, and security educational hubs, he designs practical, scenario-driven frameworks to tackle modern cybercrime.
                        </p>
                        <p className="text-[14.5px] text-slate-600 leading-relaxed mb-4 text-justify">
                          Unlike standard lecture-based cyber awareness, Kartikeya&apos;s methodology emphasizes real-world digital footprinting, passive investigation techniques, and tactical trace analysis. His training sessions empower officers and investigators with actionable tools to track threat actors, process public registries, and secure critical digital infrastructure.
                        </p>
                        <p className="text-[14.5px] text-slate-600 leading-relaxed mb-6 text-justify">
                          As a young entrepreneur in cybersecurity, he continues to push boundaries in public awareness campaigns, threat mitigation, and capacity building for public administrators and enforcement agencies.
                        </p>
                        <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 sm:gap-8 text-slate-800 font-mono text-xs font-semibold">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyber-green-dark shrink-0" />
                            <span>OSINT Specialist</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <UserCheck className="w-4 h-4 text-cyber-green-dark shrink-0" />
                            <span>LEA Instructor</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-cyber-green-dark shrink-0" />
                            <span>Cyber Security Researcher</span>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-[460px] bg-[#08131e] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden flex flex-col items-center">
                          <span className="font-mono text-[10px] sm:text-xs font-bold text-cyber-green tracking-[0.25em] uppercase block text-center mb-1 relative z-10">
                            SPECIALIZATION NETWORK
                          </span>
                          <h3 className="font-sans font-black text-xl sm:text-2xl text-white uppercase tracking-tight block text-center mb-6">
                            CAPABILITY NODE MAP
                          </h3>
                          <div className="w-full flex flex-col items-center">
                            <NetworkDiagram />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* STATS COUNT BAND */}
                <section className="bg-cyber-navy py-12 border-y border-cyber-green/20 relative overflow-hidden">
                  <div className="max-w-[1120px] mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-sans font-black text-3xl sm:text-4xl text-cyber-green tracking-tight mb-1">
                          10000+
                        </span>
                        <span className="font-mono text-[9.5px] uppercase tracking-[0.15em] text-slate-300">
                          Happy Officers
                        </span>
                      </div>
                      <div className="flex flex-col items-center border-l border-white/10">
                        <span className="font-sans font-black text-3xl sm:text-4xl text-cyber-green tracking-tight mb-1">
                          410+
                        </span>
                        <span className="font-mono text-[9.5px] uppercase tracking-[0.15em] text-slate-300">
                          Projects Done
                        </span>
                      </div>
                      <div className="flex flex-col items-center border-l border-white/10">
                        <span className="font-sans font-black text-3xl sm:text-4xl text-cyber-green tracking-tight mb-1">
                          88%
                        </span>
                        <span className="font-mono text-[9.5px] uppercase tracking-[0.15em] text-slate-300">
                          Threat Mitigation
                        </span>
                      </div>
                      <div className="flex flex-col items-center border-l border-white/10">
                        <span className="font-sans font-black text-3xl sm:text-4xl text-cyber-green tracking-tight mb-1">
                          168+
                        </span>
                        <span className="font-mono text-[9.5px] uppercase tracking-[0.15em] text-slate-300">
                          Active Sensors
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                <WhyChooseSection />

                {/* PORTFOLIO THREAT INSPECTION SERVICE */}
                <section className="py-16 bg-[#EEF4FB] border-y border-blue-200/70">
                  <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
                    <div className="mb-8">
                      <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] block mb-1">
                        PORTFOLIO CYBER SERVICE
                      </span>
                      <h2 className="font-sans font-black text-2xl sm:text-3xl text-cyber-slate uppercase tracking-tight">
                        File &amp; Threat Intelligence Inspector
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-[68ch] mt-1 leading-relaxed">
                        Interactive threat inspection utility provided directly through Kartikeya Srivastava&apos;s portfolio for analyzing file fingerprints, URLs, and cryptographic hashes against multi-engine security databases.
                      </p>
                    </div>
                    <VirusTotalScannerModal />
                  </div>
                </section>

                {/* PRIVACY MANDATE BANNER */}
                <section className="bg-cyber-navy py-16 text-white text-center border-y border-cyber-navy/80 relative overflow-hidden">
                  <div className="max-w-[1120px] mx-auto px-8 relative z-10 flex flex-col items-center">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight max-w-[32ch] mb-4">
                      Privacy Is <span className="text-cyber-green font-semibold underline decoration-cyber-green/40">A HUMAN RIGHT</span> And It Belongs To You
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-[55ch] leading-relaxed mb-6">
                      Your website, email accounts, endpoints, and networks are vulnerable to continuous surveillance. I establish custom defensive solutions and deliver state-of-the-art training parameters.
                    </p>
                    <a
                      href="#contact"
                      className="font-mono text-[11px] tracking-widest uppercase bg-cyber-green text-cyber-slate font-bold px-5 py-2.5 rounded-sm hover:bg-white hover:text-cyber-slate transition-all duration-200"
                    >
                      Get Protected
                    </a>
                  </div>
                </section>

                <ContactSection />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onOpenEnquiryModal={() => setIsEnquiryModalOpen(true)} />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
}
