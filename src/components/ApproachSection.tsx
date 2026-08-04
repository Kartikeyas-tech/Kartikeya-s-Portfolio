import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ApproachStep } from '../types';
import { ChevronDown, ShieldAlert } from 'lucide-react';
import { DotGrid, ArcRing } from './Decorations';

export default function ApproachSection() {
  const [expandedNum, setExpandedNum] = useState<string | null>('01');

  const steps: ApproachStep[] = [
    {
      num: '01',
      title: 'Assess',
      description: 'Understand the audience, their existing exposure, and the specific threat context before a single slide is built.',
      details: 'Passive OSINT footprint audits are performed on the target profile to evaluate real-world digital exposure. By mapping known weak points and regional cyber threats, we ensure the training addresses immediate, high-priority vulnerabilities rather than generic checklists.'
    },
    {
      num: '02',
      title: 'Design',
      description: 'Build a curriculum and case scenarios drawn from real patterns relevant to the group being trained.',
      details: 'Every scenario is reverse-engineered from actual cyber forensics and current scam tactics. We write custom simulation dossiers, formulate synthetic investigation targets, and create specific operational frameworks tailored to the technical capacity of the attendees.'
    },
    {
      num: '03',
      title: 'Deliver',
      description: 'Run hands-on, scenario-driven sessions rather than slide-only lectures: the goal is practiced skill, not just awareness.',
      details: 'Slides are secondary; live systems are primary. Participants construct live queries, configure investigative browsers, and map metadata in real-time. This interactive sandbox pressure embeds actual tactical skills that can be deployed immediately in daily casework.'
    },
    {
      num: '04',
      title: 'Reinforce',
      description: 'Leave the group with follow-up material and simulated exercises so the training holds after the session ends.',
      details: 'Post-session safety guides, customized investigation flowcharts, and self-test target files are distributed. We provide offline reference tools and direct feedback mechanisms so the skills are locked in and can be continuously updated.'
    }
  ];

  const toggleExpand = (num: string) => {
    setExpandedNum(expandedNum === num ? null : num);
  };

  return (
    <section id="approach" className="py-20 bg-white border-b border-cyber-border relative overflow-hidden">
      
      {/* Background Arc Rings */}
      <ArcRing position="bottom-right" sizeClassName="w-[340px] h-[340px] sm:w-[480px] sm:h-[480px]" strokeWidth={32} />
      <ArcRing position="top-left" sizeClassName="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px]" strokeWidth={20} className="opacity-60" />

      {/* Margin Dot Grids */}
      <div className="absolute top-12 left-6 hidden lg:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>
      <div className="absolute bottom-12 right-6 hidden lg:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>

      <div className="max-w-[1120px] mx-auto px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-16 gap-3">
          <div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-cyber-navy mt-2 tracking-tight uppercase">
              How Training Runs
            </h2>
          </div>
          <p className="max-w-[34ch] text-[14px] text-cyber-ink-soft leading-relaxed border-l-2 border-cyber-green pl-4">
            The same robust, battle-tested blueprint, whether the room holds five officers or fifty active intelligence agents.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map((step) => {
            const isExpanded = expandedNum === step.num;
            return (
              <div 
                key={step.num}
                className={`border rounded-lg transition-all duration-300 ${
                  isExpanded 
                    ? 'border-cyber-green bg-cyber-light-bg shadow-[0_4px_20px_rgba(0,230,118,0.05)]' 
                    : 'border-cyber-border hover:border-cyber-green/40 bg-white hover:shadow-sm'
                }`}
                id={`approach-step-${step.num}`}
              >
                <button
                  onClick={() => toggleExpand(step.num)}
                  className="w-full text-left py-5 px-6 grid grid-cols-[50px_1fr_30px] sm:grid-cols-[70px_1fr_30px] gap-4 sm:gap-6 items-center cursor-pointer focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <span className={`font-sans font-black text-2xl sm:text-3xl block leading-none transition-colors duration-200 ${isExpanded ? 'text-cyber-green' : 'text-slate-300'}`}>
                    {step.num}
                  </span>
                  <div>
                    <h4 className={`font-sans font-extrabold text-base sm:text-lg mb-1 transition-colors duration-200 ${isExpanded ? 'text-cyber-navy' : 'text-slate-800'}`}>
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-cyber-ink-soft leading-relaxed max-w-[62ch]">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`transition-colors duration-200 ${isExpanded ? 'text-cyber-green' : 'text-slate-400'}`}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 px-6 pl-[50px] sm:pl-[70px] pr-10 text-sm text-cyber-ink-soft">
                        <div className="border border-cyber-green/30 rounded-md p-4 bg-cyber-slate text-white relative shadow-inner">
                          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-[0.03] cyber-grid" />
                          <div className="flex items-center gap-2 mb-2">
                            <ShieldAlert size={14} className="text-cyber-green" />
                            <span className="font-mono text-[9px] text-cyber-green font-bold uppercase tracking-wider block">
                              Operational Parameters | Intel Detail
                            </span>
                          </div>
                          <p className="leading-relaxed text-xs text-slate-200">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
