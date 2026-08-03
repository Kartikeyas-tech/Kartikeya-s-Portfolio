import { motion } from 'motion/react';
import { BookOpen, FileText, ExternalLink, ShieldCheck, Award, Landmark, Building2, CheckCircle2, Share2, MessageSquare, Download, FileDown } from 'lucide-react';
import { DotGrid, ArcRing } from './Decorations';

// @ts-ignore
import researchPaperPdf from '../assets/978-3-031-95017-9_57 (2).pdf';
// @ts-ignore
import tweetImg1 from '../assets/images/Screenshot 2026-08-02 213341.png';
// @ts-ignore
import tweetImg2 from '../assets/images/Screenshot 2026-08-02 213330.png';
// @ts-ignore
import tweetImg3 from '../assets/images/Screenshot 2026-08-02 213351.png';
// @ts-ignore
import tweetImgUP from '../assets/images/tweet.png';

export default function PublicationsSection() {
  const publicationCards = [
    {
      title: 'A Comprehensive Survey of Dark Web Crawlers',
      publisher: 'Springer • Lecture Notes in Networks and Systems (Vol 1479)',
      type: 'Research Paper',
      date: 'August 2025',
      conference: 'ISMS 2025 • NIT Kurukshetra',
      citation: 'Srivastava, K., Singh, R. (2025) A Comprehensive Survey of Dark Web Crawlers. In: Garg, L., Kesswani, N., Brigui, I. (eds) AI Technologies for Information Systems and Management Science. ISMS 2025. Lecture Notes in Networks and Systems, vol 1479. Springer, Cham.',
      link: 'https://doi.org/10.1007/978-3-031-95017-957',
      pdfUrl: researchPaperPdf,
      description: 'Presented at the ISMS 2025 Conference at NIT Kurukshetra. Provides an in-depth survey and taxonomic comparison of dark web crawling architectures, passive intelligence collection, onion routing discovery models, and hidden service analysis.',
      tags: ['Dark Web', 'Crawler Survey', 'ISMS 2025', 'NIT Kurukshetra', 'Springer'],
      badge: 'Springer Research'
    },
    {
      title: 'Financial Cyber Fraud Legal & Technical Intervention Model',
      publisher: 'Cyber Victim Relief & Technical Analysis Division',
      type: 'Case Study & Operational Paper',
      date: '2022 - Present',
      description: 'Engineered multi-tier forensic tracking and legal recovery workflows that assisted cyber fraud victims in recovering approximately ₹2.5 Crore in compromised assets.',
      tags: ['Fraud Recovery', 'Legal Intervention', '₹2.5 Cr Recovered'],
      badge: 'Victim Relief'
    },
    {
      title: 'Open-Source Intelligence (OSINT) Tactical Handbook for LEAs',
      publisher: 'Law Enforcement Training & Security Hubs',
      type: 'Practical Training Manual',
      date: '2023',
      description: 'Comprehensive guide covering passive digital footprinting, domain intelligence, public registry lookup, and threat actor profiling for police investigators.',
      tags: ['OSINT', 'Digital Footprinting', 'Threat Profiling'],
      badge: 'LEA Manual'
    },
    {
      title: 'Institutional Incident Response & Cyber Awareness Guidelines',
      publisher: 'Central & State Training Academies',
      type: 'Awareness & Defense Framework',
      date: '2023 - 2025',
      description: 'Structured cybersecurity awareness programs designed for senior government officials, administrative officers, and defense personnel to identify and counter digital threats.',
      tags: ['Incident Response', 'Cyber Awareness', 'Public Safety'],
      badge: 'Institutional'
    }
  ];

  const premierInstitutions = [
    { name: 'Southern Western Command, Indian Army', role: 'Cyber Defense & OSINT Lectures' },
    { name: 'NACIN (Customs & Indirect Taxes)', role: 'Financial Cyber Crime & Intelligence' },
    { name: 'CISF DMRC Unit', role: 'Critical Infrastructure & Threat Awareness' },
    { name: 'RTC-DAD Lucknow', role: 'Defense Accounts & Security Training' },
    { name: 'State & Central Police Agencies', role: 'OSINT & Cyber Commando Modules' }
  ];

  return (
    <section id="publications" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden scroll-mt-20 border-t border-slate-200">
      {/* Decorative Background Elements */}
      <ArcRing position="top-right" sizeClassName="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]" strokeWidth={28} className="opacity-40" />
      <div className="absolute top-12 left-6 hidden lg:block opacity-60 pointer-events-none">
        <DotGrid cols={4} rows={6} />
      </div>

      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] block mb-2">
            RESEARCH & CONTRIBUTIONS
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-cyber-slate uppercase tracking-tight flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-cyber-green-dark" />
            <span>Publications & Special Projects</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-green mt-3 rounded-full" />
        </div>

        {/* Publications & Frameworks Cards Grid */}
        <div className="mb-14">
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-cyber-slate uppercase tracking-tight mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            <span>Featured Publications & Modules</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publicationCards.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-slate-200 hover:border-emerald-400 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200">
                      {pub.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-medium">{pub.date}</span>
                  </div>

                  <h4 className="font-sans font-extrabold text-base sm:text-lg text-cyber-slate group-hover:text-emerald-700 transition-colors mb-2 leading-snug">
                    {pub.title}
                  </h4>

                  <p className="font-mono text-xs text-emerald-700 font-semibold mb-2">
                    {pub.publisher}
                  </p>

                  {pub.conference && (
                    <p className="font-mono text-[11px] text-slate-500 font-medium mb-2 italic">
                      * {pub.conference}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3 text-justify">
                    {pub.description}
                  </p>

                  {pub.citation && (
                    <div className="bg-slate-50 border-l-2 border-emerald-500 p-2.5 rounded-r-md my-3 font-mono text-[11px] text-slate-600 leading-snug">
                      <span className="font-bold text-slate-800 block mb-0.5">Citation:</span>
                      {pub.citation}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {pub.pdfUrl && (
                      <a
                        href={pub.pdfUrl}
                        download="A_Comprehensive_Survey_of_Dark_Web_Crawlers.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-white bg-emerald-600 hover:bg-emerald-700 font-bold px-3 py-1 rounded shadow-xs transition-colors"
                      >
                        <FileDown className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </a>
                    )}

                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-emerald-700 font-bold hover:underline bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded border border-emerald-200 transition-colors"
                      >
                        <span>{pub.type}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-emerald-700 font-bold">
                        <span>{pub.type}</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Promoted Tweets & Official Mentions Section */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] block">
              OFFICIAL SOCIAL MEDIA HIGHLIGHTS
            </span>
          </div>
          <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-cyber-slate uppercase tracking-tight mb-6 flex items-center gap-2.5">
            <Share2 className="w-6 h-6 text-emerald-600" />
            <span>Promoted Tweets & Official Mentions</span>
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border-2 border-emerald-500/30 rounded-2xl overflow-hidden shadow-md"
          >
            {/* Card Header */}
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600/30 border border-emerald-400 flex items-center justify-center font-black text-emerald-400 text-sm">
                  IA
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                    <span>South Western Command - Indian Army</span>
                    <span className="inline-block w-4 h-4 bg-sky-500 text-white rounded-full text-[10px] text-center font-bold leading-4">✓</span>
                  </h4>
                  <p className="font-mono text-xs text-slate-400">@SWComd_IA • Official Post</p>
                </div>
              </div>

              <span className="font-mono text-xs font-semibold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                Cyber Awareness Week 2026
              </span>
            </div>

            {/* Card Content & Text */}
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200">
              <h5 className="font-sans font-bold text-base sm:text-lg text-slate-900 mb-2">
                🔒 Cyber Awareness Week 2026 | Stay Alert, Stay Secure
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify mb-4">
                As part of Cyber Awareness Week 2026 (01–07 Jul), a lecture-cum-talk on "Social Media Vulnerabilities & Protective Measures" was conducted at Sapta Shakti Auditorium for all ranks and families. The session was delivered by renowned Cyber Expert and young entrepreneur Mr. Kartikeya Srivastava, who highlighted emerging cyber threats, responsible social media practices, and measures to enhance cyber resilience in the digital domain.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-emerald-700 font-medium">
                <span>#CyberAwarenessWeek</span>
                <span>#CyberSecurity</span>
                <span>#DigitalSecurity</span>
                <span>#IndianArmy</span>
                <span>#SaptaShaktiCommand</span>
              </div>
            </div>

            {/* Screenshot Grid */}
            <div className="p-4 sm:p-6 bg-slate-100">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-3 font-semibold">
                Official Post Screenshots
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-2 border border-slate-200 shadow-xs flex flex-col items-center">
                  <img
                    src={tweetImg2}
                    alt="South Western Command Indian Army Tweet Screenshot 1"
                    className="w-full h-auto max-h-[480px] object-contain rounded-lg border border-slate-100"
                  />
                </div>

                <div className="bg-white rounded-xl p-2 border border-slate-200 shadow-xs flex flex-col items-center">
                  <img
                    src={tweetImg3}
                    alt="South Western Command Indian Army Photos Screenshot 2"
                    className="w-full h-auto max-h-[480px] object-contain rounded-lg border border-slate-100"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Transforming UP Tweet Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-white border-2 border-emerald-500/30 rounded-2xl overflow-hidden shadow-md mt-8"
          >
            {/* Card Header */}
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600/30 border border-emerald-400 flex items-center justify-center font-black text-emerald-400 text-sm">
                  UP
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm sm:text-base text-white flex items-center gap-1.5">
                    <span>Transforming UP</span>
                    <span className="inline-block w-4 h-4 bg-sky-500 text-white rounded-full text-[10px] text-center font-bold leading-4">✓</span>
                  </h4>
                  <p className="font-mono text-xs text-slate-400">@transforming_up • Govt of Uttar Pradesh Official Post</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">
                  Government Initiative
                </span>
                <a
                  href="https://x.com/transforming_up/status/1958893168545734930"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded-full flex items-center gap-1 transition-colors"
                >
                  <span>View Post</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card Content & Text */}
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200">
              <h5 className="font-sans font-bold text-base sm:text-lg text-slate-900 mb-2">
                🏛️ Official Post by Transforming UP | Cyber Security Training
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify mb-4">
                Official tweet recognition from Transforming UP (@transforming_up), Department of Information & Public Relations, Government of Uttar Pradesh, highlighting special cybersecurity awareness sessions and capacity-building workshops delivered by Cyber Security Expert Mr. Kartikeya Srivastava.
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs text-emerald-700 font-medium">
                <span>#TransformingUP</span>
                <span>#CyberSecurity</span>
                <span>#UPGovt</span>
                <span>#DigitalResilience</span>
                <span>#UttarPradesh</span>
              </div>
            </div>

            {/* Screenshot Box */}
            <div className="p-4 sm:p-6 bg-slate-100">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-3 font-semibold">
                Official Tweet Screenshot
              </p>
              <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex flex-col items-center">
                <img
                  src={tweetImgUP}
                  alt="Transforming UP Official Tweet Screenshot"
                  className="w-full h-auto max-h-[520px] object-contain rounded-lg border border-slate-100"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
