import React from 'react';
import { Page, ProcessStep } from '../types';
import { 
  Target, Users, MessageSquare, CalendarCheck, 
  CheckCircle2, AlertTriangle, ArrowRight, 
  Filter, Building2, MapPin, Wallet, 
  Briefcase, Cpu 
} from 'lucide-react';
import { FAQ } from '../components/FAQ';

interface ProcessProps {
  onNavigate: (page: Page) => void;
}

export const Process: React.FC<ProcessProps> = ({ onNavigate }) => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'ICP-Controlled Prospecting',
      description: `No broad targeting. No guessing.

We define and lock your Ideal Customer Profile before anything goes live:
job titles, company size, geography, buying power, and commercial relevance.

Every prospect is filtered against revenue thresholds, budget authority,
problem–solution fit, and market maturity.

If the ICP is wrong, the system fails. That’s why this step is collaborative and non-negotiable.`,
      icon: 'users'
    },
    {
      number: '02',
      title: 'Infrastructure & System Build',
      description: `This is the engine. Not just ads.

We deploy the full acquisition stack:
Meta & Google traffic, lead capture, qualification logic,
CRM & pipeline tracking, automated routing and calendar gating.

The system enforces who can enter, who gets qualified,
and who reaches your calendar.

You never manually chase leads. The system does the filtering for you.`,
      icon: 'cpu'
    },
    {
      number: '03',
      title: 'Context-Aware Conversations',
      description: `Automation without context kills conversion.

Every prospect enters a structured conversation flow:
messaging based on role and industry,
objection handling baked into scripts,
intent signals tracked before booking.

This phase exists to build intent before selling.
No one books a call without context.`,
      icon: 'message',
      hasImage: true
    },
    {
      number: '04',
      title: 'Booked Appointments',
      description: `Decision-makers only.

By the time someone hits your calendar:
they have the problem,
they have the budget,
they have authority.

You don’t qualify on the call.
The call exists to close — not discover basics.`,
      icon: 'calendar',
      hasImage: true
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'users': return <Users className="w-8 h-8 text-brand-cyan" />;
      case 'cpu': return <Cpu className="w-8 h-8 text-brand-cyan" />;
      case 'message': return <MessageSquare className="w-8 h-8 text-brand-cyan" />;
      case 'calendar': return <CalendarCheck className="w-8 h-8 text-brand-cyan" />;
      default: return <Target className="w-8 h-8" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto pb-20 px-4">

      {/* Header */}
      <div className="text-center mb-24 reveal-on-scroll">
        <h2 className="text-brand-cyan font-bold tracking-[0.2em] uppercase text-sm mb-6 flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-brand-cyan"></span> The Methodology <span className="w-8 h-px bg-brand-cyan"></span>
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Engineering Predictable Demand
        </h1>
        <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
          When inputs are controlled, outcomes stop being random. <br />
          This system converts paid traffic into decision-maker conversations — not noise.
        </p>
      </div>

      {/* Steps Timeline */}
      <div className="relative space-y-32 mb-40">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan/0 via-brand-cyan/50 to-brand-cyan/0 -ml-px"></div>

        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col md:flex-row items-center gap-16 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } reveal-on-scroll`}
          >
            {/* Center Node */}
            <div className="hidden md:flex absolute left-1/2 -ml-5 w-10 h-10 rounded-full bg-brand-dark border border-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.4)] items-center justify-center z-10">
              <div className="w-3 h-3 bg-brand-cyan rounded-full animate-pulse"></div>
            </div>

            {/* Text Card */}
            <div className="w-full md:w-1/2">
              <div className="glass-panel p-10 rounded-[2rem] border-l-4 border-l-transparent hover:border-l-brand-cyan transition-all duration-500 group relative overflow-hidden">
                <div className="absolute -top-6 -right-6 text-[10rem] font-black text-white/5">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="p-4 bg-brand-cyan/10 rounded-2xl w-fit mb-8">
                    {getIcon(step.icon)}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-6">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="w-full md:w-1/2 flex justify-center">
             {step.number === '03' && (
              <div className="group w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-brand-panel transition-all duration-500 hover:-translate-y-2">
                 <img 
                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
               />
                </div>
              )}


              {step.number === '04' && (
                <div className="glass-panel p-10 rounded-[2rem] text-center">
                  <p className="text-slate-300 text-xl mb-4">
                    Paid traffic → ICP filtering → system infrastructure → contextual conversations →{" "}
                    <span className="text-brand-cyan font-bold">sales-ready appointments</span>
                  </p>
                  <p className="text-slate-500 mb-6">
                    Not leads. Not traffic. Not vanity metrics. <br />
                    Just controlled inputs producing predictable revenue conversations.
                  </p>
                  <button 
                    onClick={() => onNavigate(Page.BOOK_CALL)}
                    className="inline-flex items-center gap-3 text-brand-cyan hover:text-white font-bold text-lg"
                  >
                    See how this applies to your business <ArrowRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ICP Vetting Process Section */}
      <section className="reveal-on-scroll">
        <div className="glass-panel rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[100px]"></div>

          <div className="relative z-10">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-4">
                <Filter className="text-brand-cyan" />
                ICP Vetting Process
              </h2>
              <p className="text-slate-300 border-l-4 border-brand-cyan pl-6">
                The initial prospect list is the single most important variable in outbound. 
                You approve the targeting logic before outreach begins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Job Titles', desc: 'Decision-maker roles only', icon: <Briefcase /> },
                { title: 'Company Size', desc: 'Revenue and headcount filters', icon: <Building2 /> },
                { title: 'Geography', desc: 'Target regions defined', icon: <MapPin /> },
                { title: 'Buying Power', desc: 'Budget authority verified', icon: <Wallet /> },
                { title: 'Commercial Relevance', desc: 'Problem-solution fit', icon: <Target /> },
                { title: 'Profile Preview', desc: 'ICP validated manually', icon: <CheckCircle2 className="text-brand-green"/> }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5">
                  <div className="mb-4 text-brand-cyan">{item.icon}</div>
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-start gap-4 p-6 rounded-xl bg-red-500/10 border border-red-500/20 max-w-2xl">
              <AlertTriangle className="text-red-500 mt-1" />
              <p className="text-slate-300">
                If this step is wrong, outbound fails. That’s why this is collaborative, not outsourced.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};
