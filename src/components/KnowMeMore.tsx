// @ts-ignore
import profileImg from '../assets/images/KMM.png';
import { DotGrid, ArcRing, GreenCircuitBackground } from './Decorations';

export default function KnowMeMore() {
  return (
    <section id="know-me-more" className="py-20 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      
      {/* Top-Right Thick Circular Ring Arc Graphic */}
      <ArcRing position="top-right" sizeClassName="w-[360px] h-[360px] sm:w-[520px] sm:h-[520px]" />
      
      {/* Subtle Bottom-Left Circular Arc Graphic */}
      <ArcRing position="bottom-left" sizeClassName="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]" strokeWidth={24} className="opacity-70" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Mint Frame, Left Dot Grids & Experience Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Dot Grid Graphic 1: Top-Left of Portrait */}
              <div className="absolute -left-12 top-6 hidden sm:block">
                <DotGrid />
              </div>

              {/* Dot Grid Graphic 2: Bottom-Left of Portrait */}
              <div className="absolute -left-12 bottom-12 hidden sm:block">
                <DotGrid />
              </div>

              {/* Outer arch border frame wrapping the mint background */}
              <div className="p-2 sm:p-3 rounded-[2.5rem] border-2 border-[#C1EAD7]/70 relative">
                
                {/* Mint Green Card Container */}
                <div className="relative rounded-[1.8rem] bg-[#E8F8F0] overflow-hidden aspect-[4/5] sm:aspect-[3/4] w-full flex items-center justify-center">
                  
                  {/* Portrait Image */}
                  <img
                    src={profileImg}
                    alt="Kartikeya Srivastava"
                    className="w-full h-full object-cover object-top relative z-10 filter contrast-[1.03]"
                  />

                  {/* Dark Navy Experience Badge at Bottom Right */}
                  <div className="absolute bottom-0 right-0 bg-[#0B1A30] text-white p-4 sm:p-5 rounded-tl-2xl shadow-2xl z-20 min-w-[140px] text-left border-t border-l border-[#1A2E4B] overflow-hidden">
                    <span className="font-sans font-black text-3xl sm:text-4xl text-[#2CD97B] block leading-none tracking-tight mb-1 relative z-10">
                    4+
                    </span>
                    <span className="font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-white block leading-tight relative z-10">
                      YEARS<br />EXPERIENCE
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Title, Intro & Bullet points from Portfolio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#0B1A30] uppercase tracking-tight mb-4">
              KNOW ME MORE
            </h2>

            <div className="text-[#475569] text-sm sm:text-base leading-relaxed mb-8 font-normal space-y-3 text-justify">
              <p>
                Mr. Kartikeya Srivastava is an experienced cybersecurity expert and trainer specializing in national security and public safety frameworks. Holding a Masters degree in Cyber Security. He has a proven track record of training Law Enforcement Agencies and senior government officials to counter evolving cyber threats.
              </p>
              <p>
                Previously associated with I4C, Ministry of Home Affairs, he contributed to the Cyber Commando Project. He has also assisted cyber fraud victims in recovering approximately ₹2.5 Cr through legal and technical intervention.
              </p>
              <p>
                Mr. Srivastava, has delivered lectures at premier institutions including Southern Western Command Indian Army, NACIN-Customs, CISF DMRC Unit, RTC-DAD Lucknow, and other state/ central agencies. He has designed and conducted multiple cybersecurity awareness and incident response training programs.
              </p>
            </div>

            {/* Bullet List with Vertical Timeline Connector */}
            <div className="relative space-y-8 pl-2">
              
              {/* Vertical connector line */}
              <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-[#E2F5EC] pointer-events-none" />

              {/* Point 1 */}
              <div className="relative flex items-start gap-5">
                <div className="w-4 h-4 rounded-full bg-[#2CD97B] shrink-0 mt-1 shadow-[0_0_8px_rgba(44,217,123,0.6)] z-10 ring-4 ring-white" />
                <div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#0B1A30] mb-1">
                    OSINT & Digital Footprint Investigations
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    Open-source intelligence gathering methodology, digital footprint analysis, and ethical online investigation techniques for complex casework.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="relative flex items-start gap-5">
                <div className="w-4 h-4 rounded-full bg-[#2CD97B] shrink-0 mt-1 shadow-[0_0_8px_rgba(44,217,123,0.6)] z-10 ring-4 ring-white" />
                <div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#0B1A30] mb-1">
                    Law Enforcement Agency (LEA) Training
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    Hands-on training modules built specifically for law enforcement teams and officers to strengthen digital investigation capabilities.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="relative flex items-start gap-5">
                <div className="w-4 h-4 rounded-full bg-[#2CD97B] shrink-0 mt-1 shadow-[0_0_8px_rgba(44,217,123,0.6)] z-10 ring-4 ring-white" />
                <div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#0B1A30] mb-1">
                    Cyber Awareness & Threat Defense Campaigns
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    Public, institutional, and corporate awareness drives on phishing, fraud, social engineering defense, and digital hygiene.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
