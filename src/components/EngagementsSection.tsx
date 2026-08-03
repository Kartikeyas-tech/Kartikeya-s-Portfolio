import { Shield, Building, GraduationCap } from 'lucide-react';
import { DotGrid, ArcRing } from './Decorations';

export default function EngagementsSection() {
  const categories = [
    {
      id: 'lea',
      icon: Shield,
      title: 'Law Enforcement Agencies',
      description: 'Specialized OSINT and digital investigation training built for the realities of active casework and forensics tracking.'
    },
    {
      id: 'institutions',
      icon: Building,
      title: 'Institutions & Government',
      description: 'Cyber safety workshops and security awareness drives tailored for public administrators and government personnel handling critical data.'
    },
    {
      id: 'corporates',
      icon: GraduationCap,
      title: 'Corporates & Educational',
      description: 'Interactive employee, student, and faculty sessions covering digital footprint sanitation, phishing defenses, and secure browsing practices.'
    }
  ];

  return (
    <section id="engagements" className="py-20 bg-white border-b border-cyber-border relative overflow-hidden">
      
      {/* Background Arc Rings */}
      <ArcRing position="top-right" sizeClassName="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]" strokeWidth={28} />
      <ArcRing position="bottom-left" sizeClassName="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]" strokeWidth={20} className="opacity-70" />

      {/* Margin Dot Grids */}
      <div className="absolute top-10 left-6 hidden lg:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>
      <div className="absolute bottom-10 right-6 hidden lg:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>

      <div className="max-w-[1120px] mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-cyber-navy mt-2 tracking-tight uppercase">
            Who I Work With
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="border border-cyber-border p-7 rounded-xl relative bg-white transition-all duration-300 hover:shadow-[0_12px_24px_rgba(0,230,118,0.06)] hover:border-cyber-green/40 group"
                id={`engagement-card-${cat.id}`}
              >
                {/* Glowing green top border signature bar */}
                <div className="absolute top-0 left-6 w-8 h-[3px] bg-cyber-green rounded-full transition-all duration-300 group-hover:w-20" />
                
                <div className="flex justify-between items-center mb-5 mt-2">
                  <span className="font-mono text-[9px] text-cyber-ink-faint uppercase tracking-widest font-bold">
                    TARGET | {cat.id.toUpperCase()}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-cyber-light-bg border border-cyber-border flex items-center justify-center group-hover:bg-cyber-green/10 group-hover:border-cyber-green/30 transition-all duration-300">
                    <Icon size={14} className="text-cyber-ink-soft group-hover:text-cyber-green transition-colors duration-300" />
                  </div>
                </div>

                <h4 className="font-sans text-sm font-extrabold uppercase tracking-wide text-cyber-navy mb-2.5 group-hover:text-cyber-green transition-colors duration-200">
                  {cat.title}
                </h4>
                <p className="text-xs sm:text-sm text-cyber-ink-soft leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
