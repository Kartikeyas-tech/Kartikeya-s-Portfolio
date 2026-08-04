import React, { useState } from 'react';
import { motion } from 'motion/react';
import VirusTotalScannerModal from './VirusTotalScannerModal';
import { DotGrid, ArcRing } from './Decorations';
import {
  ExternalLink,
  Copy,
  Check,
  BookOpen,
  Award,
  Terminal,
  Target,
  Shield,
  Cpu,
  KeyRound,
  Search,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  Layers,
  Code,
  ShieldCheck,
  Upload
} from 'lucide-react';

export default function CareerRoadmap() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'path' | 'certs' | 'tools' | 'practice'>('path');
  const [showVtScanner, setShowVtScanner] = useState<boolean>(true);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stages = [
    {
      num: '01',
      title: 'Foundations',
      duration: '0 – 3 months',
      skills: 'networking basics (OSI & TCP/IP), Windows & Linux fundamentals, basic Python/Bash scripting, and core security concepts (CIA triad, common threat types).',
      resources: [
        {
          name: 'Professor Messer',
          desc: 'Free Network+ & Security+ video courses',
          url: 'https://www.professormesser.com/',
        },
        {
          name: 'Cisco Networking Academy',
          desc: 'Free "Intro to Cybersecurity" course + certificate',
          url: 'https://www.netacad.com/courses/cybersecurity',
        },
        {
          name: 'OverTheWire: Bandit',
          desc: 'Free Linux command-line wargame',
          url: 'https://overthewire.org/wargames/bandit/',
        },
        {
          name: 'freeCodeCamp',
          desc: 'Free Python & scripting fundamentals',
          url: 'https://www.freecodecamp.org/',
        },
      ],
    },
    {
      num: '02',
      title: 'Core Security Skills',
      duration: '3 – 6 months',
      skills: 'web application security fundamentals, vulnerability assessment basics, applied cryptography, and hands-on use of tools like Nmap, Wireshark, and Burp Suite Community.',
      resources: [
        {
          name: 'PortSwigger Web Security Academy',
          desc: 'Fully free, industry-standard web security training',
          url: 'https://portswigger.net/web-security',
        },
        {
          name: 'OWASP Top 10',
          desc: 'Free official documentation on core web risks',
          url: 'https://owasp.org/www-project-top-ten/',
        },
        {
          name: 'TryHackMe',
          desc: 'Free "Intro to Cyber Security" path & beginner rooms',
          url: 'https://tryhackme.com/',
        },
        {
          name: 'Wireshark',
          desc: 'Free, open-source packet analysis tool',
          url: 'https://www.wireshark.org/',
        },
      ],
    },
    {
      num: '03',
      title: 'OSINT & Specialization',
      duration: '6 – 9 months',
      skills: 'OSINT methodology, digital footprint analysis, threat intelligence basics, and an introduction to digital forensics.',
      resources: [
        {
          name: 'OSINT Framework',
          desc: 'Free directory of categorized OSINT tools',
          url: 'https://osintframework.com/',
        },
        {
          name: "Bellingcat's Toolkit & Guides",
          desc: 'Free open-source investigation methodology',
          url: 'https://www.bellingcat.com/resources/how-tos/',
        },
        {
          name: 'TraceLabs Search Party CTF',
          desc: 'Free OSINT CTF practice for a real cause',
          url: 'https://www.tracelabs.org/initiatives/search-party',
        },
        {
          name: 'Autopsy',
          desc: 'Free, open-source digital forensics platform',
          url: 'https://www.autopsy.com/',
        },
      ],
    },
    {
      num: '04',
      title: 'Career Readiness',
      duration: '9 – 12+ months',
      skills: 'applied practice through CTFs and labs, a public portfolio of write-ups, and structured certification progress.',
      resources: [
        {
          name: 'HackTheBox: Starting Point',
          desc: 'Free beginner-friendly guided machines',
          url: 'https://app.hackthebox.com/starting-point',
        },
        {
          name: 'CTFtime',
          desc: 'Free calendar of open CTF competitions',
          url: 'https://ctftime.org/',
        },
        {
          name: 'GitHub',
          desc: 'Free space to publish write-ups & projects',
          url: 'https://github.com/',
        },
        {
          name: 'Certifications',
          desc: 'Jump to the free/low-cost cert list below',
          url: '#roadmap-certifications',
          isInternal: true,
        },
      ],
    },
  ];

  const certifications = [
    {
      title: 'Cisco Introduction to Cybersecurity',
      costPill: 'Free',
      costType: 'free',
      desc: 'Self-paced course plus a certificate of completion, no cost at any step. A solid Stage 1 starting point.',
      url: 'https://www.netacad.com/courses/cybersecurity',
      displayUrl: 'netacad.com',
    },
    {
      title: 'IBM SkillsBuild: Cybersecurity',
      costPill: 'Free',
      costType: 'free',
      desc: 'Free courses with digital badges covering cybersecurity fundamentals and analyst-track skills.',
      url: 'https://skillsbuild.org/',
      displayUrl: 'skillsbuild.org',
    },
    {
      title: 'Fortinet NSE 1–3 (Training Institute)',
      costPill: 'Free',
      costType: 'free',
      desc: 'Self-paced, vendor-backed certificates covering security awareness and threat fundamentals: genuinely free, no trial period.',
      url: 'https://training.fortinet.com/',
      displayUrl: 'training.fortinet.com',
    },
    {
      title: 'Palo Alto Networks: Cybersecurity Fundamentals',
      costPill: 'Free',
      costType: 'free',
      desc: 'Free foundational course and certificate through the Palo Alto Networks Beacon platform.',
      url: 'https://beacon.paloaltonetworks.com/',
      displayUrl: 'beacon.paloaltonetworks.com',
    },
    {
      title: 'Google Cybersecurity Certificate',
      costPill: 'Free to audit',
      costType: 'partial',
      desc: 'Free to audit all course content on Coursera. The official shareable certificate normally requires a paid subscription, though financial aid can be requested.',
      url: 'https://www.coursera.org/professional-certificates/google-cybersecurity',
      displayUrl: 'coursera.org',
    },
    {
      title: 'Microsoft SC-900 Learning Path',
      costPill: 'Free course, paid exam',
      costType: 'partial',
      desc: 'The Microsoft Learn training path for Security, Compliance & Identity Fundamentals is free; sitting the SC-900 exam itself carries a fee.',
      url: 'https://learn.microsoft.com/training/paths/describe-concepts-of-security-compliance-identity/',
      displayUrl: 'learn.microsoft.com',
    },
    {
      title: 'ISC2 Certified in Cybersecurity (CC)',
      costPill: 'Free program closed',
      costType: 'closed',
      desc: "ISC2's \"One Million Certified in Cybersecurity\" free voucher program stopped accepting new participants on 20 May 2026. The CC certification still exists but is now paid for new candidates; check isc2.org for any new regional or scholarship offers.",
      url: 'https://www.isc2.org/landing/1mcc',
      displayUrl: 'isc2.org',
    },
    {
      title: 'TryHackMe Learning Paths',
      costPill: 'Free rooms, paid full path',
      costType: 'partial',
      desc: 'Not a formal certification, but the free tier\'s individual rooms (including intro/pre-security content) are genuinely useful and cost nothing. Full guided paths and some advanced rooms need a subscription.',
      url: 'https://tryhackme.com/',
      displayUrl: 'tryhackme.com',
    },
  ];

  const tools = [
    {
      id: 'vt',
      name: 'VirusTotal',
      tags: ['Free Public API', 'File / URL Scanning'],
      desc: 'VirusTotal aggregates 70+ antivirus engines and URL/domain blocklists into a single lookup. The Public API is free after signing up for a VirusTotal Community account, limited to 4 requests/minute and 500/day, and is licensed for non-commercial use only.',
      code: `# Check a file hash's reputation (Public API v3)
curl --request GET \\
  --url https://www.virustotal.com/api/v3/files/<file_hash> \\
  --header 'x-apikey: YOUR_API_KEY'`,
      links: [
        { label: 'Get a free API key', url: 'https://www.virustotal.com/gui/join-us' },
        { label: 'API documentation', url: 'https://docs.virustotal.com/reference/overview' },
      ],
    },
    {
      id: 'hibp',
      name: 'Have I Been Pwned (HIBP)',
      tags: ['Free Web Check', 'Free Passwords API'],
      desc: 'Check whether an email address has appeared in a known data breach: completely free on the website, no account needed. The Pwned Passwords API (checking if a password has leaked, using k-anonymity so the full password is never sent) is also free and unlimited. The Breach/domain search API for automated lookups requires a paid subscription key, starting at a low monthly cost.',
      code: `# Check a password against the free Pwned Passwords API (k-anonymity model)
curl --request GET \\
  --url https://api.pwnedpasswords.com/range/5BAA6`,
      links: [
        { label: 'Free breach check', url: 'https://haveibeenpwned.com/' },
        { label: 'API documentation', url: 'https://haveibeenpwned.com/API/v3' },
      ],
    },
  ];

  const miniTools = [
    {
      name: 'Shodan',
      desc: 'Search engine for internet-connected devices. Free account includes limited search credits.',
      url: 'https://www.shodan.io/',
      displayUrl: 'shodan.io',
    },
    {
      name: 'urlscan.io',
      desc: 'Free URL scanning and analysis: see exactly what a link loads before you click it.',
      url: 'https://urlscan.io/',
      displayUrl: 'urlscan.io',
    },
    {
      name: 'AbuseIPDB',
      desc: 'Free-tier IP reputation lookups for spotting known malicious or abusive addresses.',
      url: 'https://www.abuseipdb.com/',
      displayUrl: 'abuseipdb.com',
    },
    {
      name: 'crt.sh',
      desc: 'Free certificate transparency log search: no signup or API key required.',
      url: 'https://crt.sh/',
      displayUrl: 'crt.sh',
    },
  ];

  const practiceLabs = [
    {
      name: 'TryHackMe',
      desc: 'Guided, beginner-friendly labs',
      url: 'https://tryhackme.com/',
    },
    {
      name: 'Hack The Box',
      desc: 'Free Starting Point machines',
      url: 'https://app.hackthebox.com/',
    },
    {
      name: 'OverTheWire',
      desc: 'Classic free wargames',
      url: 'https://overthewire.org/wargames/',
    },
    {
      name: 'picoCTF',
      desc: 'Free CTF built for students, by CMU',
      url: 'https://picoctf.org/',
    },
    {
      name: 'Hacksplaining',
      desc: 'Free interactive web vuln lessons',
      url: 'https://www.hacksplaining.com/',
    },
    {
      name: 'TraceLabs CTF',
      desc: 'Free OSINT practice for real missing-persons cases',
      url: 'https://www.tracelabs.org/initiatives/search-party',
    },
  ];

  return (
    <div className="bg-[#FAFCFB] text-slate-800 border-b border-slate-200">
      {/* ---------------- ROADMAP SECTION ---------------- */}
      <section id="roadmap" className="pt-20 pb-10 relative overflow-hidden scroll-mt-20">
        {/* Background Light Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none cyber-grid-light" />

        {/* Circular Arc Ring Graphics for Light Section */}
        <ArcRing position="top-right" sizeClassName="w-[360px] h-[360px] sm:w-[520px] sm:h-[520px]" />
        <ArcRing position="bottom-left" sizeClassName="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px]" className="opacity-70" />

        {/* Decorative Dot Grids */}
        <div className="absolute top-10 left-6 hidden lg:block z-0 opacity-80">
          <DotGrid cols={3} rows={5} />
        </div>
        <div className="absolute bottom-10 right-6 hidden lg:block z-0 opacity-80">
          <DotGrid cols={3} rows={5} />
        </div>

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO / TOP HEADER - Light Shade Background #1 (Fresh Neutral Tint) */}
        <motion.div 
          className="mb-12 bg-gradient-to-br from-white via-[#F8FAF9] to-[#EAFBF2]/50 border border-emerald-100 p-8 sm:p-12 rounded-3xl shadow-sm text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#136838]" />
            <span className="font-mono text-[11px] font-bold text-[#136838] tracking-wider uppercase">
              Resource: For Students
            </span>
          </div>

          <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-cyber-slate tracking-tight uppercase mb-4">
            Cybersecurity Learning Roadmap
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-[75ch] mx-auto leading-relaxed font-normal mb-8">
            A structured, four-stage path from zero experience to job-ready; built entirely around free courses, free tools, and free (or largely free) certifications. No paywalls required to get started; where a cost does exist, it's marked clearly.
          </p>

          {/* HERO STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[880px] mx-auto pt-6 border-t border-emerald-100">
            <div className="bg-white border border-slate-200/90 p-4 rounded-xl text-center shadow-xs hover:border-[#2CD97B] transition-colors">
              <span className="font-mono text-[11px] text-[#136838] font-bold tracking-widest uppercase block mb-1">
                Stages
              </span>
              <span className="font-sans text-sm sm:text-base font-extrabold text-cyber-slate">
                4, beginner → advanced
              </span>
            </div>

            <div className="bg-white border border-slate-200/90 p-4 rounded-xl text-center shadow-xs hover:border-[#2CD97B] transition-colors">
              <span className="font-mono text-[11px] text-[#136838] font-bold tracking-widest uppercase block mb-1">
                Cost To Start
              </span>
              <span className="font-sans text-sm sm:text-base font-extrabold text-cyber-slate">
                ₹0 : Stage 1–3 resources free
              </span>
            </div>

            <div className="bg-white border border-slate-200/90 p-4 rounded-xl text-center shadow-xs hover:border-[#2CD97B] transition-colors">
              <span className="font-mono text-[11px] text-[#136838] font-bold tracking-widest uppercase block mb-1">
                Best For
              </span>
              <span className="font-sans text-sm sm:text-base font-extrabold text-cyber-slate">
                Students &amp; career-switchers
              </span>
            </div>
          </div>
        </motion.div>

        {/* ---------------- SECTION 01: ROADMAP STAGES - Light Shade Background #2 (Fresh Mint Light) ---------------- */}
        <div id="roadmap-path" className="mb-16 scroll-mt-28 bg-[#F0FDF4] border border-emerald-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] block mb-1">
              THE PATH
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-cyber-slate uppercase tracking-tight">
              Four Stages, In Order
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-[65ch] mt-1">
              Each stage builds directly on the last. Don't skip ahead to tools or certifications before the fundamentals are solid; it shows up later.
            </p>
          </div>

          <div className="space-y-6">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-emerald-200/90 rounded-2xl p-6 sm:p-8 hover:border-[#2CD97B] transition-all duration-300 shadow-xs hover:shadow-md group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Stage Number & Badge */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start shrink-0">
                    <span className="font-serif text-4xl sm:text-5xl font-extrabold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                      {stage.num}
                    </span>
                    <span className="font-mono text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                      <Clock className="w-3 h-3 text-emerald-700" />
                      {stage.duration}
                    </span>
                  </div>

                  {/* Stage Details */}
                  <div className="flex-1">
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-cyber-slate mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-700 mb-5 leading-relaxed">
                      <strong className="text-emerald-700 font-bold">Build:</strong> {stage.skills}
                    </p>

                    {/* Resources Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {stage.resources.map((res, rIdx) => (
                        <a
                          key={rIdx}
                          href={res.url}
                          target={res.isInternal ? '_self' : '_blank'}
                          rel={res.isInternal ? '' : 'noopener noreferrer'}
                          className="bg-[#F8FAF9] border border-slate-200/90 hover:border-[#2CD97B] p-3.5 rounded-xl transition-all duration-200 flex flex-col justify-between group/res hover:bg-white hover:-translate-y-0.5 shadow-xs"
                        >
                          <div>
                            <div className="font-sans font-bold text-xs sm:text-sm text-cyber-slate group-hover/res:text-emerald-700 transition-colors flex items-center justify-between gap-1 mb-1">
                              <span>{res.name}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 group-hover/res:text-emerald-700 shrink-0" />
                            </div>
                            <p className="text-[11px] text-slate-500 leading-snug">
                              {res.desc}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA to Resources Page */}
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10 text-center">
        <div className="bg-[#08131e] border border-cyber-green/30 rounded-2xl p-8 sm:p-10 text-white flex flex-col items-center">
          <span className="font-mono text-xs font-bold text-cyber-green uppercase tracking-[0.2em] mb-2 block">
            NEXT STEPS &amp; LEARNING PATHS
          </span>
          <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight mb-3">
            Explore Portfolio Services &amp; Certifications
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-[60ch] mb-6 leading-relaxed">
            Access curated cybersecurity certifications, OSINT investigation utilities, practice labs, and our live threat analysis inspector.
          </p>
          <a
            href="#resources"
            className="font-mono text-xs tracking-wider uppercase bg-cyber-green text-cyber-slate font-extrabold px-6 py-3 rounded-md hover:bg-white hover:text-cyber-slate transition-all shadow-[0_0_15px_rgba(0,230,118,0.2)]"
          >
            Go to Resources Page →
          </a>
        </div>
      </div>
    </section>
  </div>
);
}


