import React, { useState } from 'react';
import { Search, Shield, Globe, Database, Key, Terminal, Image as ImageIcon, Calendar } from 'lucide-react';
import { DotGrid, ArcRing } from './Decorations';

// Static imports for the service images requested by user
// @ts-ignore
import gal8 from '../assets/images/gallery8.jpeg';
// @ts-ignore
import gal6 from '../assets/images/gallery6.jpeg';
// @ts-ignore
import gal3 from '../assets/images/gallery3.jpeg';
// @ts-ignore
import gal18 from '../assets/images/gallery18.jpeg';
// @ts-ignore
import gal17 from '../assets/images/gallery17.jpeg';
// @ts-ignore
import gal10 from '../assets/images/gallery10.jpeg';
// @ts-ignore
import gal16 from '../assets/images/gallery16.jpeg';

export default function ExpertiseSection() {
  const expertiseItems = [
    {
      id: 'A.01',
      title: 'OSINT Investigations',
      description: 'Open-source intelligence gathering methodology, digital footprint analysis, and ethical online investigation technique.',
      icon: Search,
    },
    {
      id: 'A.02',
      title: 'LEA Training Programs',
      description: 'Hands-on training modules built specifically for law enforcement teams to strengthen digital investigation capability.',
      icon: Terminal,
    },
    {
      id: 'A.03',
      title: 'Cyber Awareness Campaigns',
      description: 'Public and institutional awareness drives on phishing, fraud, and everyday digital hygiene, tailored to the audience.',
      icon: Globe,
    },
    {
      id: 'A.04',
      title: 'Digital Footprint & Privacy',
      description: 'Helping individuals and organizations understand — and reduce — their unintended public exposure online.',
      icon: Key,
    },
    {
      id: 'A.05',
      title: 'Social Engineering Defense',
      description: 'Training on recognizing and resisting the manipulation tactics behind scams and targeted attacks.',
      icon: Shield,
    },
    {
      id: 'A.06',
      title: 'Curriculum Design',
      description: 'Structured, scenario-based training material built for both technical and non-technical audiences.',
      icon: Database,
    }
  ];

  const events = [
    { id: 8, img: gal8, name: 'gallery8.jpeg', title: 'LEA Keynote & Law Enforcement Honors' },
    { id: 6, img: gal6, name: 'gallery6.jpeg', title: 'OSINT & Cyber Investigation Session' },
    { id: 3, img: gal3, name: 'gallery3.jpeg', title: 'Command Headquarters Briefing' },
    { id: 18, img: gal18, name: 'gallery18.jpeg', title: 'National Security Training Milestone' },
    { id: 17, img: gal17, name: 'gallery17.jpeg', title: 'Special Cyber Defense Commando Forum' },
    { id: 10, img: gal10, name: 'gallery10.jpeg', title: 'Cyber Crime Unit Felicitation' },
    { id: 16, img: gal16, name: 'gallery16.jpeg', title: 'Institutional Defense Address' }
  ];

  // Duplicate items for infinite seamless scrolling marquis
  const marqueeItems = [...expertiseItems, ...expertiseItems, ...expertiseItems];
  const marqueeEvents = [...events, ...events, ...events];

  // Track image load errors to render elegant fallbacks
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="expertise" className="py-24 bg-cyber-light-bg border-b border-cyber-border overflow-hidden relative">
      
      {/* Background arc rings in opposite corners */}
      <ArcRing position="bottom-left" sizeClassName="w-[320px] h-[320px] sm:w-[460px] sm:h-[460px]" strokeWidth={32} />
      <ArcRing position="top-right" sizeClassName="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px]" strokeWidth={24} className="opacity-70" />

      {/* Margin Dot Grids */}
      <div className="absolute top-10 left-8 hidden lg:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>
      <div className="absolute bottom-10 right-8 hidden lg:block z-0 opacity-80">
        <DotGrid cols={3} rows={5} />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#00e676_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-cyber-navy tracking-tight uppercase">
            CORE AREAS OF EXPERTISE
          </h2>
          <div className="w-16 h-1 bg-cyber-green mx-auto mt-4 mb-6 rounded-full" />
          <p className="max-w-[70ch] text-[14.5px] text-cyber-ink-soft mx-auto leading-relaxed font-medium">
            Key domains driving open-source intelligence, law enforcement training, and digital investigation methodology.
          </p>
        </div>

        {/* 1st Carousel: Services / Expertise Cards (Right to Left Marquee) */}
        <div className="relative w-full overflow-hidden py-6 animate-marquee-paused">
          {/* Ambient Fade Gradients for visual depth */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-cyber-light-bg to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-cyber-light-bg to-transparent z-20 pointer-events-none" />

          {/* Scrolling track - Right to Left */}
          <div className="flex w-max animate-marquee">
            {marqueeItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] mx-4 relative bg-white border border-slate-100 rounded-2xl pt-14 pb-8 px-6 text-center shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_45px_rgba(0,230,118,0.08)] hover:border-cyber-green/40 transition-all duration-300 group"
                >
                  {/* Concentric icon badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-cyber-light-bg border border-cyber-green/40 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-350">
                    <div className="w-12 h-12 rounded-full bg-[#EAFBF2] border border-cyber-green flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-cyber-green" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-sans text-lg font-extrabold text-cyber-navy mb-3 group-hover:text-cyber-green transition-colors duration-250">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-cyber-ink-soft leading-relaxed max-w-[240px] mx-auto">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2nd Carousel: Event Images (Left to Right / Opposite direction) */}
        <div className="relative w-full overflow-hidden py-10 animate-marquee-paused">
          {/* Ambient Fade Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-cyber-light-bg to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-cyber-light-bg to-transparent z-20 pointer-events-none" />

          {/* Scrolling track - Left to Right */}
          <div className="flex w-max animate-marquee-reverse">
            {marqueeEvents.map((item, index) => {
              const hasError = imageErrors[item.id];

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 w-[240px] min-[400px]:w-[290px] sm:w-[380px] md:w-[420px] h-[220px] sm:h-[260px] mx-3 sm:mx-4 relative bg-slate-950 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-lg group transition-all duration-300 p-0"
                >
                  {/* Event Image element preserving original ratio without cropping */}
                  {!hasError && (
                    <img
                      src={item.img}
                      alt={item.title}
                      onError={() => handleImageError(item.id)}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 z-10"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Gradient overlay to soften bottom text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 z-20 pointer-events-none" />

                  {/* Dynamic Placeholder for Event Image when it fails or is missing */}
                  {hasError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/90 z-15 group-hover:bg-slate-950/80 transition-all border border-dashed border-cyber-green/20 rounded-none">
                      <div className="w-12 h-12 rounded-full bg-cyber-green/5 border border-cyber-green/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <ImageIcon className="w-5 h-5 text-cyber-green/60" />
                      </div>
                      <span className="font-mono text-[9px] tracking-widest text-cyber-green/40 mb-1.5 block uppercase">
                        {item.name}
                      </span>
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-200">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-2 leading-relaxed max-w-[200px]">
                        Add file to assets/images to show photo
                      </p>
                    </div>
                  )}

                  {/* Event tag labels */}
                  <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-1.5 text-cyber-green">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                        LIVE EVENT
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

