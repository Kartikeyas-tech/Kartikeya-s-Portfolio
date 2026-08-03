import { motion } from 'motion/react';
import { ExternalLink, AlertCircle } from 'lucide-react';
import VirusTotalScannerModal from './VirusTotalScannerModal';
import { DotGrid, ArcRing } from './Decorations';

export default function ResourcesSection() {

  const certifications = [
    {
      title: 'Google Cybersecurity Certificate',
      costPill: 'Free 7-day trial, then paid',
      costType: 'partial',
      desc: 'Hands-on entry path covering Python, Linux, SQL, SIEM tools, and incident response basics on Coursera.',
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
      desc: 'ISC2\'s "One Million Certified in Cybersecurity" free voucher program stopped accepting new participants on 20 May 2026. The CC certification still exists but is now paid for new candidates — check isc2.org for any new regional or scholarship offers.',
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
      desc: 'Check whether an email address has appeared in a known data breach — completely free on the website, no account needed. The Pwned Passwords API (checking if a password has leaked, using k-anonymity so the full password is never sent) is also free and unlimited. The Breach/domain search API for automated lookups requires a paid subscription key, starting at a low monthly cost.',
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
      desc: 'Free URL scanning and analysis — see exactly what a link loads before you click it.',
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
      desc: 'Free certificate transparency log search — no signup or API key required.',
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
  ];

  return (
    <div className="bg-white min-h-screen py-12 relative overflow-hidden">
      {/* Background Light Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none cyber-grid-light" />

      <ArcRing position="top-left" sizeClassName="w-[360px] h-[360px] sm:w-[520px] sm:h-[520px]" />
      <ArcRing position="bottom-right" sizeClassName="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px]" className="opacity-75" />

      <div className="absolute top-12 right-6 hidden lg:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>
      <div className="absolute bottom-12 left-6 hidden lg:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <p className="text-sm sm:text-base text-slate-600 max-w-[75ch] mb-8 leading-relaxed">
          Curated list of cybersecurity learning pathways, free lookup APIs, investigation utilities, and live file/URL scanners for security enthusiasts and LEA officers.
        </p>

        {/* SECTION 01: CERTIFICATIONS */}
        <div id="roadmap-certifications" className="mb-16 bg-[#F1F5F9] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] block mb-1">
              GET CERTIFIED
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-cyber-slate uppercase tracking-tight">
              Free &amp; Low-Cost Certifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-[68ch] mt-1 leading-relaxed">
              Programs open and close their free seats often. Each card is marked with what&apos;s actually free today; verify on the provider&apos;s site before you commit time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, cIdx) => {
              let badgeStyle = 'bg-emerald-100 text-emerald-900 border-emerald-300';
              if (cert.costType === 'partial') {
                badgeStyle = 'bg-amber-100 text-amber-900 border-amber-300';
              } else if (cert.costType === 'closed') {
                badgeStyle = 'bg-rose-100 text-rose-900 border-rose-300';
              }

              return (
                <motion.div
                  key={cIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: cIdx * 0.05 }}
                  className="bg-white border border-slate-200/90 rounded-xl p-5 hover:border-[#2CD97B] transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h4 className="font-sans font-extrabold text-base text-cyber-slate group-hover:text-emerald-700 transition-colors">
                        {cert.title}
                      </h4>
                      <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border shrink-0 ${badgeStyle}`}>
                        {cert.costPill}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {cert.desc}
                    </p>
                  </div>

                  <div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-700 hover:underline font-bold"
                    >
                      <span>{cert.displayUrl}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-xs text-slate-500 italic mt-6 flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            <span>Prices, free seats, and program availability change often in this industry — always confirm current terms directly on the provider&apos;s site before enrolling.</span>
          </p>
        </div>

        {/* SECTION 02: CYBER SECURITY SERVICES & UTILITIES */}
        <div id="roadmap-tools" className="mb-16 bg-[#EEF4FB] border border-blue-200/70 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] block mb-1">
              PORTFOLIO CYBER SERVICES
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-cyber-slate uppercase tracking-tight">
              Cyber Security Services &amp; Threat Utilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-[68ch] mt-1 leading-relaxed">
              Interactive cyber security inspection tools and threat intelligence utilities provided directly through Kartikeya Srivastava&apos;s portfolio for file analysis, credential auditing, and digital threat inspection.
            </p>
          </div>

          {/* Featured Tool Cards with Live Inspection */}
          <div className="mb-8">
            <VirusTotalScannerModal />
          </div>

          {/* Mini Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'Asset & OSINT Infrastructure Search',
                desc: 'Domain, connected device, and network asset intelligence service.',
                url: 'https://www.shodan.io/',
                displayUrl: 'Asset Recon Utility',
              },
              {
                name: 'Web Payload & Link Inspector',
                desc: 'Deep payload and malicious link behavior inspection service.',
                url: 'https://urlscan.io/',
                displayUrl: 'URL Threat Service',
              },
              {
                name: 'IP Reputation & Forensic Auditor',
                desc: 'Real-time IP threat rating and malicious node forensic audit service.',
                url: 'https://www.abuseipdb.com/',
                displayUrl: 'IP Forensic Service',
              },
              {
                name: 'PKI & SSL Certificate Validator',
                desc: 'Domain SSL encryption log analysis & sub-domain enumeration utility.',
                url: 'https://crt.sh/',
                displayUrl: 'SSL Audit Service',
              },
            ].map((mTool, mIdx) => (
              <motion.div
                key={mIdx}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: mIdx * 0.05 }}
                className="bg-white border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between hover:border-[#2CD97B] transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <div>
                  <h4 className="font-sans font-extrabold text-base text-cyber-slate mb-1.5">
                    {mTool.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {mTool.desc}
                  </p>
                </div>

                <a
                  href={mTool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-700 hover:underline font-bold"
                >
                  <span>{mTool.displayUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 03: PRACTICE & LABS */}
        <div id="roadmap-practice" className="bg-[#EAFBF2]/60 border border-emerald-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] block mb-1">
              KEEP PRACTICING
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-cyber-slate uppercase tracking-tight">
              Where To Apply All Of This
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-[65ch] mt-1">
              Reading and watching only gets you so far — these are free places to actually practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {practiceLabs.map((lab, lIdx) => (
              <motion.a
                key={lIdx}
                href={lab.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: lIdx * 0.05 }}
                className="bg-white border border-emerald-200/80 rounded-xl p-5 hover:border-[#2CD97B] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-sans font-extrabold text-base text-cyber-slate group-hover:text-emerald-700 transition-colors">
                      {lab.name}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lab.desc}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
