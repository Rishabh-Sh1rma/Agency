import React from 'react';
import { Page } from '../types';
import { ArrowRight, CheckCircle2, TrendingUp, Phone, ShieldCheck, Users, Quote, Activity, BarChart2, Radio, Target, Filter, ArrowDown } from 'lucide-react';
import { FAQ } from '../components/FAQ';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 md:space-y-36 pb-20 overflow-x-hidden">
      
      {/* Hero Section with Blurred Dashboard BG */}
      <section className="relative pt-12 md:pt-24 text-center max-w-7xl mx-auto px-4 min-h-[85vh] flex flex-col items-center justify-center">
        
        {/* Background Dashboard Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-[-1] opacity-30 select-none pointer-events-none">
           <img 
             src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
             alt="Analytics Dashboard" 
             className="w-full h-full object-cover blur-[80px] scale-110 animate-pulse-slow"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>
        </div>

        <div className="animate-reveal" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass-panel border-brand-cyan/20 text-brand-cyan text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:bg-brand-cyan/10 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            Accepting New Partners for 2026
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05] drop-shadow-2xl">
            Get Qualified Sales Appointments <br className="hidden md:block"/> in 90 Days — Or <br />
            <span className="text-transparent bg-clip-text bg-cyber-gradient relative">
               I Work For Free
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-cyan opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00026 6.99997C35.9172 3.86908 123.978 -1.22915 197.986 2.07347" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Predictable high-intent call generation systems for Indian service businesses & B2B companies. <br className="hidden md:block" /> Scalable frameworks designed for growth-focused partners.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => onNavigate(Page.BOOK_CALL)}
              className="group relative w-full sm:w-auto px-10 py-5 bg-cyber-gradient text-black font-bold text-lg rounded-xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Free Strategy Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button 
              onClick={() => onNavigate(Page.CASE_STUDIES)}
              className="w-full sm:w-auto px-10 py-5 glass-panel hover:bg-white/10 text-white font-semibold text-lg rounded-xl transition-all border border-white/10 flex items-center justify-center gap-2 group"
            >
              View Case Studies <Activity size={18} className="text-brand-cyan group-hover:rotate-12 transition-transform"/>
            </button>
          </div>
        </div>

        {/* Floating Abstract UI Elements */}
        <div className="absolute top-[20%] left-[5%] hidden lg:block animate-float">
           <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border-l-4 border-l-brand-green">
              <div className="p-2 bg-green-500/20 rounded-lg"><TrendingUp size={20} className="text-brand-green"/></div>
              <div>
                 <div className="text-xs text-slate-400">ROAS</div>
                 <div className="text-xl font-bold text-white">10.4X</div>
              </div>
           </div>
        </div>
        <div className="absolute bottom-[20%] right-[5%] hidden lg:block animate-float-delayed">
           <div className="glass-panel p-4 rounded-xl flex items-center gap-3 border-l-4 border-l-brand-cyan">
              <div className="p-2 bg-cyan-500/20 rounded-lg"><Phone size={20} className="text-brand-cyan"/></div>
              <div>
                 <div className="text-xs text-slate-400">Calls Booked</div>
                 <div className="text-xl font-bold text-white">42</div>
              </div>
           </div>
        </div>
      </section>

      {/* Offer Section (Exact Wording) */}
      <section className="max-w-5xl mx-auto text-center px-4 reveal-on-scroll">
        <div className="glass-panel p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <Quote className="absolute top-8 left-8 text-brand-cyan/10 w-16 h-16 transform -scale-x-100" />
          
          <p className="text-2xl md:text-3xl font-medium text-slate-100 leading-relaxed relative z-10">
            "I help Indian service businesses & B2B companies build a predictable lead generation system that books qualified calls and high-ticket clients in 90 days, backed by a minimum-call guarantee. If we don’t hit the target, I work for free until we do."
          </p>
        </div>
      </section>

      {/* Proof Metrics */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-10 rounded-3xl text-center hover:bg-white/5 transition-all duration-500 group relative overflow-hidden reveal-on-scroll">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <BarChart2 size={100} />
            </div>
            <div className="w-16 h-16 mx-auto bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-brand-cyan/20">
              <TrendingUp className="w-8 h-8 text-brand-cyan" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">₹40 Lakhs+</h3>
            <p className="text-slate-400 font-medium">Revenue Generated Recently</p>
          </div>

          <div className="glass-panel p-10 rounded-3xl text-center hover:bg-white/5 transition-all duration-500 group relative overflow-hidden reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Phone size={100} />
            </div>
            <div className="w-16 h-16 mx-auto bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-brand-green/20">
              <Phone className="w-8 h-8 text-brand-green" />
            </div>
            <h3 className="text-5xl font-bold text-white mb-2 group-hover:text-brand-green transition-colors">500+</h3>
            <p className="text-slate-400 font-medium">Real Sales Calls Booked</p>
          </div>

          <div className="glass-panel p-10 rounded-3xl text-center hover:bg-white/5 transition-all duration-500 group relative overflow-hidden reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users size={100} />
            </div>
            <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-purple-500/20">
              <Users className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">8X - 10X</h3>
            <p className="text-slate-400 font-medium">Average ROAS for Partners</p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="max-w-5xl mx-auto px-4 reveal-on-scroll">
        <div className="glass-panel rounded-[3rem] p-10 md:p-16 border-brand-green/20 relative overflow-hidden">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-green/10 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-brand-green blur-[40px] opacity-20 animate-pulse-slow"></div>
              <div className="relative p-8 bg-brand-green/10 rounded-3xl border border-brand-green/30 shadow-2xl shadow-brand-green/10">
                <ShieldCheck className="w-20 h-20 text-brand-green" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Guarantee</h2>
              <p className="text-slate-300 text-xl leading-relaxed mb-8">
                 <span className="text-white font-bold">Qualified Appointments in 90 Days</span> or we continue working at <span className="text-brand-green font-bold">no cost</span> until the target is reached.
              </p>

              <div className="text-left bg-black/20 p-8 rounded-3xl border border-white/5 inline-block w-full">
                <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><CheckCircle2 size={14}/> This guarantee is possible because:</p>
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-slate-300">
                   <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2.5"></div>
                      <span>Outreach volume is controlled</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2.5"></div>
                      <span>Qualification before calendar access</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2.5"></div>
                      <span>System is reviewed weekly</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2.5"></div>
                      <span>No lead dilution. No excuses.</span>
                   </li>
                </ul>
             </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Logic Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-20 reveal-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Conversion Logic</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Conservative planning assumptions observed across multiple client cohorts.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Visual Funnel */}
           <div className="space-y-2 relative max-w-md mx-auto w-full">
              {/* Top Funnel */}
              <div className="glass-panel p-6 rounded-2xl border-t-4 border-t-brand-cyan/50 text-center relative z-10 w-full mx-auto shadow-lg hover:translate-y-[-2px] transition-transform">
                  <h3 className="text-4xl font-bold text-white mb-1">1,800</h3>
                  <p className="text-brand-cyan font-bold uppercase text-xs tracking-wider mb-2">Prospects Vetted (90 Days)</p>
                  <p className="text-slate-400 text-sm">~20 Leads/Day via Forms & WhatsApp</p>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center py-1">
                 <ArrowDown className="text-slate-600 animate-bounce" size={20} />
              </div>

              {/* Middle Funnel */}
              <div className="glass-panel p-6 rounded-2xl border-t-4 border-t-brand-cyan/30 text-center relative z-10 w-[90%] mx-auto shadow-lg hover:translate-y-[-2px] transition-transform">
                  <h3 className="text-4xl font-bold text-white mb-1">360</h3>
                  <p className="text-brand-cyan font-bold uppercase text-xs tracking-wider mb-2">Conversations</p>
                  <p className="text-slate-400 text-sm">20% Response Rate</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-1">
                 <ArrowDown className="text-slate-600 animate-bounce" size={20} />
              </div>

              {/* Bottom Funnel */}
              <div className="glass-panel p-6 rounded-2xl border-t-4 border-t-brand-green text-center relative z-10 w-[80%] mx-auto bg-brand-green/5 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:translate-y-[-2px] transition-transform">
                  <h3 className="text-4xl font-bold text-white mb-1">54</h3>
                  <p className="text-brand-green font-bold uppercase text-xs tracking-wider mb-2">Calls Booked</p>
                  <p className="text-slate-400 text-sm">15% Booking Rate</p>
              </div>
           </div>

           {/* How It Works Text */}
           <div className="space-y-8">
              <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                     <Filter className="text-brand-cyan" /> How This System Works
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                      Meta & WhatsApp campaigns are designed for <span className="text-white font-medium">high-intent actions only</span> — not just traffic. The system is built around:
                  </p>
                  <ul className="space-y-4">
                      {[
                          'Pre-qualification inside the form',
                          'Instant WhatsApp follow-up',
                          'Scripted human conversation flow',
                          'Manual vetting before calendar access'
                      ].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5">
                              <div className="w-2 h-2 rounded-full bg-brand-cyan flex-shrink-0"></div>
                              <span className="font-medium">{item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-brand-cyan/10 to-transparent rounded-2xl border border-brand-cyan/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                     <Target size={100} />
                  </div>
                  <h4 className="text-brand-cyan font-bold text-sm uppercase tracking-wider mb-3 relative z-10">So instead of chasing volume...</h4>
                  <p className="text-xl text-white font-bold leading-relaxed relative z-10">
                      You get a predictable flow of sales-ready conversations.
                  </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-brand-green">
                  <h4 className="text-brand-green font-bold text-sm uppercase tracking-wider mb-2">In Simple Terms</h4>
                  <p className="text-slate-300 text-lg">
                      20 real leads a day → 50+ qualified calls in 90 days → consistent deal flow without burning ad budget.
                  </p>
              </div>

              <p className="text-xs text-slate-500 italic border-t border-white/5 pt-4">
                  * These are not best-case scenarios. They are conservative planning assumptions used to engineer predictable outcomes.
              </p>
           </div>
        </div>
      </section>

       {/* Power Quote */}
       <section className="max-w-4xl mx-auto py-20 px-4 reveal-on-scroll">
        <div className="relative text-center group">
          <Quote className="absolute top-0 left-0 w-16 h-16 text-white/5 -translate-y-1/2 translate-x-4 group-hover:text-brand-cyan/10 transition-colors duration-500" />
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            "Your time stays limited, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-200">your Digital presence doesn’t."</span>
          </h2>
          <Quote className="absolute bottom-0 right-0 w-16 h-16 text-white/5 translate-y-1/2 -translate-x-4 rotate-180 group-hover:text-brand-green/10 transition-colors duration-500" />
        </div>
      </section>

      {/* Who This Is For */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-4">
        <div className="space-y-10 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Who This Is For</h2>
          <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-brand-cyan/50 pl-6">
             We work with Indian businesses ready to handle volume. This system is designed for qualified growing businesses, not beginners.
          </p>
          
          <div className="space-y-6">
            <h3 className="text-xl text-brand-cyan font-bold tracking-wide uppercase text-sm">Target Partners</h3>
            <ul className="space-y-4">
              {[
                'More customers',
                'Predictable growth',
                'Real ROI from marketing'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-6 p-5 glass-panel rounded-2xl hover:border-brand-cyan/30 transition-all group">
                  <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <span className="text-white font-bold text-xl">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
             <div className="bg-brand-panel rounded-[2.5rem] p-10 border border-white/5 relative overflow-hidden shadow-2xl">
                {/* Decorative background circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[60px] pointer-events-none"></div>
                
                <div className="relative z-10 text-center space-y-10">
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                       <Radio className="text-brand-green animate-pulse" size={20} />
                       <div className="text-brand-green text-xs font-bold tracking-widest uppercase">Live Partnership Status</div>
                    </div>
                    <div className="text-5xl font-black text-white mb-2 tracking-tight">OPEN</div>
                    <div className="text-slate-400 font-medium text-lg">New Partner Intake Active</div>
                  </div>
                  
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-slate-400 font-medium flex items-center gap-2"><Target size={16}/> Capacity Check</span>
                      <span className="text-brand-cyan text-xs font-bold px-3 py-1 bg-brand-cyan/10 rounded-full border border-brand-cyan/20">OPTIMAL</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-slate-400 font-medium flex items-center gap-2"><BarChart2 size={16}/> Revenue Req.</span>
                      <span className="text-white text-xs font-bold px-3 py-1 bg-white/10 rounded-full">₹10L+/mo</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl border border-brand-green/30 bg-brand-green/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                      <span className="text-white font-bold">Priority Access</span>
                      <div className="flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                         <span className="text-brand-green text-xs font-bold px-3 py-1 bg-brand-green/10 rounded-full border border-brand-green/20">AVAILABLE</span>
                      </div>
                    </div>
                  </div>

                  <button 
                     onClick={() => onNavigate(Page.BOOK_CALL)}
                     className="w-full py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
                  >
                    Start Qualification
                  </button>
                  
                  <p className="text-xs text-slate-500">
                    *We only work with 3 new partners per month to ensure quality.
                  </p>
                </div>
             </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto text-center py-24 px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight">
          Stop Relying on Luck. <br />
          <span className="text-transparent bg-clip-text bg-cyber-gradient">Start Engineering Growth.</span>
        </h2>
        <button 
           onClick={() => onNavigate(Page.BOOK_CALL)}
           className="px-14 py-7 bg-cyber-gradient text-black font-bold text-xl rounded-full hover:scale-105 transition-all shadow-[0_0_50px_rgba(6,182,212,0.4)]"
        >
          Check If You Qualify
        </button>
      </section>
    </div>
  );
};
