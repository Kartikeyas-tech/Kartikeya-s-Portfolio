import { Award, Globe, ShieldCheck } from 'lucide-react';
// @ts-ignore
import speechImg from '../assets/images/speech.jpeg';
import { DotGrid, ArcRing } from './Decorations';

export default function WhyChooseSection() {
  return (
    <section id="why-choose-me" className="py-24 bg-white border-b border-cyber-border overflow-hidden relative">
      
      {/* Randomized Circular Arc Ring Graphic (Top-Left corner) */}
      <ArcRing position="top-left" sizeClassName="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]" strokeWidth={32} />
      
      {/* Secondary Circular Arc Ring Graphic (Bottom-Right corner) */}
      <ArcRing position="bottom-right" sizeClassName="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]" strokeWidth={24} className="opacity-80" />

      {/* Decorative dot grids in margins */}
      <div className="absolute top-12 left-10 hidden md:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>
      <div className="absolute bottom-12 right-10 hidden md:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content - 6 cols on large desktop */}
          <div className="lg:col-span-6">
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-cyber-navy tracking-tight mb-6 uppercase">
              WHY CHOOSE ME
            </h2>
            
            <p className="text-[15px] sm:text-[16px] text-cyber-ink-soft leading-relaxed max-w-[62ch] mb-8 font-medium">
              I Have Been Working In Cyber Security For Organizations Across The Country For More Than 4+ Years Experience, Delivering High-Impact Training And Security Defense.
            </p>

            <div className="border-l-2 border-cyber-green pl-5 mb-10">
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-cyber-navy mb-3">
                Provide Advanced Security For Advanced Threat
              </h3>
              <p className="text-xs sm:text-sm text-cyber-ink-soft leading-relaxed max-w-[58ch]">
                Multiple Layers Of Security Are Dispersed Across The Computers, Networks, Programs, Or Data That One Wants To Keep Secure.
              </p>
            </div>

            {/* List of Features */}
            <div className="space-y-6 sm:space-y-8">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm border border-slate-300 flex items-center justify-center bg-white shadow-sm shrink-0 mt-1">
                  <Award className="w-5 h-5 text-cyber-navy" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-sm sm:text-base text-cyber-navy">
                    Certified and Professional Expert
                  </h4>
                  <p className="text-xs sm:text-sm text-cyber-ink-soft mt-1 leading-relaxed max-w-[52ch]">
                    For Business To Have A Successful Defense Against Cyber attacks, The People, Processes, And Technology.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm border border-slate-300 flex items-center justify-center bg-white shadow-sm shrink-0 mt-1">
                  <Globe className="w-5 h-5 text-cyber-navy" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-sm sm:text-base text-cyber-navy">
                    Security on a global scale
                  </h4>
                  <p className="text-xs sm:text-sm text-cyber-ink-soft mt-1 leading-relaxed max-w-[52ch]">
                    By Automating Interconnections Across A Few Cisco Security Products and deploying resilient perimeter protocols.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm border border-slate-300 flex items-center justify-center bg-white shadow-sm shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5 text-cyber-navy" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-sm sm:text-base text-cyber-navy">
                    Actionable Threat Intelligence
                  </h4>
                  <p className="text-xs sm:text-sm text-cyber-ink-soft mt-1 leading-relaxed max-w-[52ch]">
                    Proactive security assessments, passive investigation methodologies, and real-time threat analysis to safeguard critical digital infrastructure.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Portrait Graphic - 6 cols on large desktop */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Mint Green / Pale Teal Diagonal Geometric background decoration block behind portrait */}
            <div className="absolute w-[80%] h-[110%] bg-[#EAFBF2] -rotate-6 rounded-3xl pointer-events-none z-0 transform translate-x-4 translate-y-2 opacity-80" />
            
            {/* Fine dashed accent circle surrounding */}
            <div className="absolute w-[110%] aspect-square rounded-full border border-dashed border-cyber-green/20 pointer-events-none z-0 animate-[spin_60s_linear_infinite]" />

            {/* Main Portrait Frame - Styled exactly with high contrast black-and-white layout matching screenshot */}
            <div className="relative z-10 w-[320px] sm:w-[420px] md:w-[480px] lg:w-[500px] aspect-square bg-white border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden">
              <img 
                src={speechImg} 
                alt="Kartikeya Srivastava - Why Choose Me" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Corner accent decorations inside frame */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyber-green z-20" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyber-green z-20" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyber-green z-20" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyber-green z-20" />

              {/* Text overlay overlay or simple subtle lighting */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent z-15 pointer-events-none" />
            </div>

            {/* Dotted texture in the background */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 opacity-[0.08] pointer-events-none bg-[radial-gradient(#00e676_2px,transparent_2px)] [background-size:8px_8px] z-0" />
            <div className="absolute -top-6 -right-6 w-20 h-20 opacity-[0.08] pointer-events-none bg-[radial-gradient(#00e676_2px,transparent_2px)] [background-size:8px_8px] z-0" />

          </div>

        </div>
      </div>
    </section>
  );
}
