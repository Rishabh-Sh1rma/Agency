import React from 'react';
import { Page, ProcessStep } from '../types';
import { Target, Cpu, Zap, BarChart3, ArrowRight, Layers, MousePointer2, Settings, Database, Activity } from 'lucide-react';
import { FAQ } from '../components/FAQ';

interface ProcessProps {
  onNavigate: (page: Page) => void;
}

export const Process: React.FC<ProcessProps> = ({ onNavigate }) => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Strategy & Positioning',
      description: 'We deep dive into your ICP (Ideal Customer Profile), map out demand channels, and craft an offer that creates leverage. We ensure your message resonates with high-value prospects.',
      icon: 'target'
    },
    {
      number: '02',
      title: 'System Build',
      description: 'We construct the infrastructure: landing pages, tracking pixels, CRM integrations, and lead capture funnels. This is the engine that processes traffic into qualified appointments.',
      icon: 'cpu'
    },
    {
      number: '03',
      title: 'Demand Engine',
      description: 'We launch paid traffic campaigns via Google Ads & Meta Ads. We test angles rapidly to find the winning creatives and keywords that drive lowest Cost Per Acquisition (CPA).',
      icon: 'zap',
      hasImage: true
    },
    {
      number: '04',
      title: 'Scale & Optimization',
      description: 'Data dictates decisions. We cut losing ads, double down on winners, and increase budget to scale lead volume while maintaining quality. More budget → more leads → more calls.',
      icon: 'scale',
      hasImage: true
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'target': return <Target className="w-8 h-8 text-brand-cyan" />;
      case 'cpu': return <Cpu className="w-8 h-8 text-brand-cyan" />;
      case 'zap': return <Zap className="w-8 h-8 text-brand-cyan" />;
      case 'scale': return <BarChart3 className="w-8 h-8 text-brand-cyan" />;
      default: return <Target className="w-8 h-8" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-20 px-4">
      <div className="text-center mb-24 reveal-on-scroll">
        <h2 className="text-brand-cyan font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center justify-center gap-2">
           <span className="w-8 h-px bg-brand-cyan"></span> Our Methodology <span className="w-8 h-px bg-brand-cyan"></span>
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">From Stranger to Sales Call</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
          We don't guess. We follow a 4-step engineering process designed to extract maximum value from paid traffic.
        </p>
      </div>

      <div className="relative space-y-32">
        {/* Animated Central Timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan/0 via-brand-cyan/50 to-brand-cyan/0 -ml-px"></div>
        
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col md:flex-row items-center gap-16 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } reveal-on-scroll`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            
            {/* Animated Center Node */}
            <div className="hidden md:flex absolute left-1/2 -ml-5 w-10 h-10 rounded-full bg-brand-dark border border-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.4)] items-center justify-center z-10">
              <div className="w-3 h-3 bg-brand-cyan rounded-full animate-pulse"></div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
               <div className={`glass-panel p-10 rounded-[2rem] border-l-4 border-l-transparent hover:border-l-brand-cyan transition-all duration-500 group relative overflow-hidden ${
                 step.hasImage ? 'mb-12 md:mb-0' : ''
               }`}>
                  {/* Big Number Watermark */}
                  <div className="absolute -top-6 -right-6 text-[10rem] font-black text-white/5 select-none pointer-events-none group-hover:text-brand-cyan/5 transition-colors duration-500">
                    {step.number}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="p-4 bg-brand-cyan/10 rounded-2xl w-fit mb-8 border border-brand-cyan/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                      {getIcon(step.icon)}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-brand-cyan transition-colors">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
               </div>
            </div>

            {/* Image/Visual Side */}
            <div className="w-full md:w-1/2 flex justify-center">
              {step.hasImage ? (
                <div className="w-full aspect-video rounded-3xl border border-white/10 overflow-hidden bg-brand-panel relative group shadow-2xl hover:shadow-brand-cyan/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none group-hover:opacity-0 transition-opacity"></div>
                  
                  {/* Actual Images with Styling */}
                  <div className="w-full h-full relative">
                     {step.number === '03' ? (
                       <>
                         <img 
                           src="https://i.ibb.co/VWMCCh58/Whats-App-Image-2026-01-29-at-11-26-06-PM.jpg" 
                           alt="Active Campaign Dashboard"
                           className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                         />
                         {/* Overlay Tag */}
                         <div className="absolute bottom-4 left-4 font-mono text-xs text-black bg-brand-cyan px-4 py-1.5 rounded-full font-bold shadow-lg shadow-brand-cyan/50 tracking-widest">
                            LIVE CAMPAIGN VIEW
                         </div>
                       </>
                     ) : (
                       <>
                         <img 
                           src="https://i.ibb.co/93NzVQxF/Time-series-2025-08-18-2025-10-27.png" 
                           alt="Scaling Metrics Graph"
                           className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                         />
                         {/* Overlay Tag */}
                         <div className="absolute bottom-4 left-4 font-mono text-xs text-black bg-brand-green px-4 py-1.5 rounded-full font-bold shadow-lg shadow-brand-green/50 tracking-widest">
                            REAL SCALING DATA
                         </div>
                       </>
                     )}
                  </div>
                </div>
              ) : (
                <div className="hidden md:block w-full"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Grid */}
      <div className="mt-40 reveal-on-scroll">
        <h3 className="text-2xl font-bold text-white text-center mb-16 flex items-center justify-center gap-3">
           <Database className="text-brand-cyan" size={24}/> The Tech Stack We Deploy
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
           {[
             { name: 'Google Ads', icon: <MousePointer2 /> },
             { name: 'Meta Ads', icon: <Layers /> },
             { name: 'GTM', icon: <Settings /> },
             { name: 'GA4', icon: <BarChart3 /> },
             { name: 'Zapier', icon: <Zap /> }
           ].map((tech, i) => (
             <div key={i} className="glass-panel px-10 py-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors group cursor-default min-w-[160px] hover:-translate-y-2 duration-300">
                <div className="text-slate-500 group-hover:text-brand-cyan transition-colors transform group-hover:scale-125 duration-300">
                  {tech.icon}
                </div>
                <span className="font-bold text-white tracking-wide text-sm uppercase">{tech.name}</span>
             </div>
           ))}
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      <div className="mt-24 text-center">
        <button 
          onClick={() => onNavigate(Page.BOOK_CALL)}
          className="inline-flex items-center gap-3 text-brand-cyan hover:text-white font-bold text-xl transition-colors border-b-2 border-brand-cyan/20 pb-1 hover:border-brand-cyan"
        >
          See how this applies to your business <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};