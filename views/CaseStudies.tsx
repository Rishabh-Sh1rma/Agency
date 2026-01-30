import React, { useState } from 'react';
import { Page, CaseStudy } from '../types';
import { ArrowRight, Trophy, DollarSign, X, Check, BarChart, ArrowUpRight, Zap } from 'lucide-react';
import { FAQ } from '../components/FAQ';

interface CaseStudiesProps {
  onNavigate: (page: Page) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onNavigate }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const cases: CaseStudy[] = [
    {
      id: 'nexacloud',
      client: 'NexaCloud Solutions',
      industry: 'B2B SaaS',
      tagline: 'Predictable monthly growth with 6.1X ROAS',
      metrics: [
        { label: 'Revenue Generated', value: '₹8.5 Lakhs', highlight: true },
        { label: 'Ad Spend', value: '₹1.5 Lakhs' },
        { label: 'ROAS', value: '6.1X' },
      ],
      // Detailed Data
      fullTitle: 'NexaCloud Solutions: B2B SaaS Workflow Automation',
      location: 'India',
      duration: '60 Days',
      challenge: [
        'Inconsistent pipeline and poor lead quality',
        'Sales team wasting time on low-intent, price-sensitive prospects',
        'Lack of clear ICP filtering and proper funnel structure',
        'High Cost Per Lead with unpredictable growth'
      ],
      strategy: 'Implemented a full Predictable Lead Generation System focusing on high-intent decision makers.',
      strategyPoints: [
        { title: 'ICP & Offer Positioning', description: 'Refined ideal customer profile (company size, job titles) and restructured messaging around ROI outcomes and use-case clarity.' },
        { title: 'Funnel & Tracking Setup', description: 'Built dedicated landing pages with conversion-focused copy and advanced event tracking for qualification.' },
        { title: 'Demand Engine', description: 'Deployed paid demand channels using high-intent search campaigns, decision-maker targeting, and retargeting for warm prospects.' },
        { title: 'Optimization Loop', description: 'Weekly keyword pruning, creative testing, audience refinement, and budget reallocation based on performance data.' }
      ],
      resultsSummary: 'Transformed an inconsistent pipeline into predictable monthly revenue of ₹8.5 Lakhs+ with significantly higher deal quality.',
      detailedStats: [
        { label: 'Ad Spend', value: '₹1,50,000' },
        { label: 'Revenue', value: '₹8,50,000' },
        { label: 'ROAS', value: '6.1X' },
        { label: 'CPL Reduction', value: '55%' },
        { label: 'Timeline', value: '60 Days' },
        { label: 'Outcome', value: 'Predictable Growth' }
      ],
      keyAchievements: [
         '₹8.5 Lakhs revenue generated from ₹1.5 Lakhs spend',
         '55% reduction in Cost Per Lead',
         'Higher demo show-up rates',
         'Sales team closing better-fit deals'
      ],
      googleAdsData: { spend: '₹1.5 Lakhs', calls: 'High Quality Demos', convRate: 'High', revenue: '₹8.5 Lakhs', roas: '6.1X' }
    },
    {
      id: 'shreeji',
      client: 'AWE Jewels',
      industry: 'Premium E-commerce',
      tagline: 'Exceptional returns through comprehensive full-funnel strategy',
      metrics: [
        { label: 'Total Revenue', value: '₹35 Lakhs', highlight: true },
        { label: 'Ad Spend', value: '₹4 Lakhs' },
        { label: 'CPA Reduction', value: '45%' },
        { label: 'Avg ROAS', value: '8X' },
      ],
      // Detailed Data
      fullTitle: 'ShreeJi Gemstones Campaign Results',
      location: 'India',
      duration: '8 Months',
      challenge: [
        'High-value product category requiring sophisticated targeting and trust-building',
        'Complex e-commerce funnel with multiple decision points',
        'Need to reduce Cost Per Acquisition while maintaining quality leads',
        'Competition in premium gemstone market requiring differentiation'
      ],
      strategy: 'Implemented a comprehensive performance marketing strategy focused on full-funnel optimization for high-ticket e-commerce.',
      strategyPoints: [
        { title: 'Complete E-commerce Funnel', description: 'Designed and executed end-to-end funnel from awareness to conversion, optimized for gemstone buying journey' },
        { title: 'Advanced Keyword Strategy', description: 'Developed tiered keyword approach targeting different buying stages - research, comparison, and purchase intent' },
        { title: 'Comprehensive A/B Testing', description: 'Systematic testing of ad creatives, landing pages, product descriptions, and checkout flows to maximize conversions' },
        { title: 'ROAS-Focused Management', description: 'Daily optimization of bids, budgets, and targeting based on ROAS performance at product category level' },
        { title: 'Strategic Ad Copy', description: 'Created trust-building copy emphasizing certifications, authenticity, and unique value propositions' },
        { title: 'Success Strategies', description: 'Implemented retargeting, email remarketing, and cart abandonment campaigns to maximize conversion opportunities' }
      ],
      resultsSummary: 'The comprehensive strategy transformed ShreeJi Gemstones into a highly profitable e-commerce operation with consistent 8X ROAS.',
      detailedStats: [
        { label: 'Total Ad Spend', value: '₹4,00,000' },
        { label: 'Total Revenue', value: '₹35,00,000' },
        { label: 'Average ROAS', value: '8X' },
        { label: 'CPA Reduction', value: '45%' },
        { label: 'Ad Efficiency Increase', value: '60%' },
        { label: 'Campaign Duration', value: '8 Months' }
      ],
      keyAchievements: [
        '60% increase in ad spend efficiency',
        '45% reduction in Cost Per Acquisition',
        'Successful restructuring of campaigns for optimal performance',
        'Maintained 40% lead-to-booking conversion rate'
      ],
      techImprovements: [
        'Revamped Meta Ads strategy from generic leads to Call-Only campaigns',
        'Implemented dynamic product ads and retargeting',
        'Optimized landing pages and checkout flow',
        'Created scalable, repeatable campaign structure'
      ]
    },
    {
      id: 'satwik',
      client: 'Satwik Services Pvt Ltd.',
      industry: 'Scaling Business',
      tagline: 'Scaling revenue to 10X ROAS through precision Google & Meta Ads',
      metrics: [
        { label: 'Phone Calls (Google)', value: '217' },
        { label: 'Qualified Calls (Meta)', value: '193' },
        { label: 'Blended ROAS', value: '7.9X', highlight: true },
      ],
      // Detailed Data
      fullTitle: 'Satwik Services: Premium Water Tank Cleaning Services',
      location: 'Jaipur, Rajasthan',
      duration: '90 Days (September - December 2025)',
      challenge: [
        'Wasted ad spend on irrelevant clicks (e.g., "water tank price," "plastic tank suppliers")',
        'Low-quality leads from Meta campaigns causing sales team burnout',
        'Unpredictable Cost Per Acquisition (CPA) and stagnant revenue growth',
        'High-intent, low-volume market requiring precision targeting'
      ],
      strategy: 'I pivoted the account from a "spray and pray" approach to a data-driven, intent-focused strategy.',
      strategyPoints: [
        { title: 'Platform Split Strategy', description: 'Google Ads as "Sniper" for high-intent capture, Meta Ads as "Net" for broad awareness and volume generation' },
        { title: 'Clean Slate Protocol', description: 'Rebuilt account with single-intent ad groups (SKAG methodology) ensuring 100% keyword-ad copy relevance' },
        { title: 'Keyword Strategy', description: 'Implemented strict "Phrase Match + Negative Keyword Firewall" - analyzed search terms daily to block irrelevant queries, reducing wasted spend by ~60%' },
        { title: 'Ad Copy Management', description: 'Created urgency-driven copy highlighting "7-Step Process" and "UV Sanitize" USP, increasing CTR and Quality Score' },
        { title: 'A/B Testing', description: 'Tested "Call Only" vs "Responsive Search Ads" - Call Only proved superior for mobile users, driving direct inquiries' },
        { title: 'Ticket Size Optimization', description: 'Advised bundling services (UV treatment + mechanized cleaning) to increase average ticket to ₹3,500' }
      ],
      resultsSummary: 'The new strategy delivered explosive growth, turning the ad account into a predictable revenue engine.',
      detailedStats: [
        { label: 'Total Ad Spend', value: '₹40,500' },
        { label: 'High-Quality Phone Calls', value: '217' },
        { label: 'Call-to-Book Conv. Rate', value: '40%' },
        { label: 'Total Revenue', value: '₹4,00,000' },
        { label: 'Google Ads ROAS', value: '7.4X' },
        { label: 'Overall Campaign ROAS', value: '10X' }
      ],
      keyAchievements: [
         '400+ qualified inquiries in 90 days',
         '60% reduction in wasted ad spend',
         '50% conversion rate over phone calls',
         'Predictable, scalable revenue stream established'
      ],
      googleAdsData: { spend: '₹40,500', calls: '217', convRate: '40%', revenue: '₹3,00,000', roas: '7.4X' }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto pb-10 px-4">
      <div className="text-center mb-20 reveal-on-scroll">
        <h2 className="text-brand-cyan font-bold tracking-[0.2em] uppercase text-sm mb-4">Success Stories</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Real Revenue. Verifiable Results.</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          We don't sell "awareness" or "likes". We sell booked calls and revenue. Here is the proof.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((study, idx) => (
          <div 
            key={study.id} 
            onClick={() => setSelectedCase(study)}
            className="glass-panel rounded-2xl overflow-hidden flex flex-col hover:border-brand-cyan/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500 group cursor-pointer reveal-on-scroll relative transform hover:-translate-y-2"
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            {/* Card Header */}
            <div className="p-8 pb-4 flex-grow relative z-10">
               {/* Client Name */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                {study.client}
              </h3>
               {/* Industry Tag */}
               <div className="inline-block px-3 py-1 bg-white/5 rounded-md text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider border border-white/10 group-hover:border-brand-cyan/30 group-hover:text-brand-cyan/80 transition-colors">
                {study.industry}
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-8 border-l-2 border-white/10 pl-4 italic group-hover:border-brand-cyan transition-colors">
                "{study.tagline}"
              </p>
            </div>
            
            {/* Metrics Grid (Dark Background) */}
            <div className="bg-brand-dark/60 p-6 border-t border-white/10 relative z-10">
              <div className="grid grid-cols-1 gap-4">
                {study.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex justify-between items-end">
                    <span className="text-slate-500 text-xs uppercase tracking-wide font-medium mb-1">{metric.label}</span>
                    <span className={`font-black text-2xl leading-none ${metric.highlight ? 'text-transparent bg-clip-text bg-cyber-gradient' : 'text-white'}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-slate-500">
                 <span className="flex items-center gap-1"><Trophy size={12} className="text-brand-green" /> Verified Data</span>
                 <span className="group-hover:translate-x-1 transition-transform text-white font-medium flex items-center gap-1 group-hover:text-brand-cyan">Read Full Case Study <ArrowRight size={12}/></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stat */}
      <div className="mt-24 glass-panel p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-12 border border-brand-cyan/20 bg-gradient-to-r from-brand-dark to-brand-panel reveal-on-scroll shadow-2xl">
        <div className="flex items-center gap-8">
           <div className="p-6 bg-cyber-gradient rounded-3xl shadow-lg shadow-brand-cyan/20 animate-float">
             <DollarSign className="w-10 h-10 text-black" />
           </div>
           <div>
             <h4 className="text-white font-bold text-2xl mb-1">Ready to replicate these results?</h4>
             <p className="text-slate-400">We are currently onboarding for next month.</p>
           </div>
        </div>
        <button 
          onClick={() => onNavigate(Page.BOOK_CALL)}
          className="whitespace-nowrap px-10 py-5 bg-white text-black font-bold text-lg rounded-2xl hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
        >
          Book Your Strategy Call <ArrowRight size={20} />
        </button>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* DETAILED MODAL POPUP */}
      {selectedCase && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-reveal"
            onClick={() => setSelectedCase(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel bg-brand-dark border-brand-cyan/20 rounded-2xl shadow-[0_0_100px_rgba(6,182,212,0.2)] animate-reveal flex flex-col transform transition-all duration-300">
             
             {/* Sticky Header */}
             <div className="sticky top-0 left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex justify-between items-start z-50">
               <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedCase.fullTitle || selectedCase.client}</h2>
                  <div className="flex gap-4 text-sm text-slate-400 mt-2">
                     {selectedCase.location && <span className="flex items-center gap-1">📍 {selectedCase.location}</span>}
                     {selectedCase.duration && <span className="flex items-center gap-1">⏱️ {selectedCase.duration}</span>}
                  </div>
               </div>
               <button 
                 onClick={() => setSelectedCase(null)}
                 className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
               >
                 <X size={24} />
               </button>
             </div>

             {/* Scrollable Body */}
             <div className="p-6 md:p-10 space-y-12">
               
               {/* Detailed Stats Grid */}
               {selectedCase.detailedStats && (
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedCase.detailedStats.map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/5 text-center hover:bg-white/10 transition-colors">
                         <div className="text-transparent bg-clip-text bg-cyber-gradient font-black text-2xl md:text-3xl mb-1">{stat.value}</div>
                         <div className="text-slate-400 text-xs uppercase tracking-wider font-bold">{stat.label}</div>
                      </div>
                    ))}
                 </div>
               )}

               <div className="grid md:grid-cols-2 gap-12">
                 {/* Left Column: Challenge & Strategy */}
                 <div className="space-y-10">
                    {selectedCase.challenge && (
                      <section>
                         <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                           <div className="p-2 bg-red-500/20 rounded-lg"><X size={18} className="text-red-500"/></div> The Challenge
                         </h3>
                         <ul className="space-y-4">
                           {selectedCase.challenge.map((c, i) => (
                             <li key={i} className="flex items-start gap-4 text-slate-300 bg-white/5 p-4 rounded-xl border border-white/5">
                               <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                               <span className="leading-relaxed">{c}</span>
                             </li>
                           ))}
                         </ul>
                      </section>
                    )}

                    {selectedCase.strategyPoints && (
                      <section>
                         <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                           <div className="p-2 bg-brand-cyan/20 rounded-lg"><Zap size={18} className="text-brand-cyan"/></div> The Strategy
                         </h3>
                         <p className="text-slate-300 mb-6 leading-relaxed">{selectedCase.strategy}</p>
                         <div className="space-y-4">
                           {selectedCase.strategyPoints.map((pt, i) => (
                             <div key={i} className="bg-brand-cyan/5 p-5 rounded-xl border border-brand-cyan/10 hover:border-brand-cyan/30 transition-colors">
                               <h4 className="text-brand-cyan font-bold text-sm mb-2">{pt.title}</h4>
                               <p className="text-slate-400 text-sm leading-relaxed">{pt.description}</p>
                             </div>
                           ))}
                         </div>
                      </section>
                    )}
                 </div>

                 {/* Right Column: Results & Achievements */}
                 <div className="space-y-10">
                    {selectedCase.resultsSummary && (
                       <section>
                         <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                           <div className="p-2 bg-brand-green/20 rounded-lg"><Trophy size={18} className="text-brand-green"/></div> The Results
                         </h3>
                         <div className="text-lg text-white font-medium italic border-l-4 border-brand-green pl-6 bg-gradient-to-r from-brand-green/10 to-transparent p-6 rounded-r-xl">
                            "{selectedCase.resultsSummary}"
                         </div>
                       </section>
                    )}

                    {selectedCase.googleAdsData && (
                      <div className="bg-brand-panel border border-brand-cyan/20 rounded-2xl p-6 shadow-xl">
                         <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2 flex items-center justify-between">
                            Google Ads Specifics
                            <BarChart size={14} className="text-brand-cyan"/>
                         </h4>
                         <div className="space-y-4">
                            <div className="flex justify-between items-center">
                               <span className="text-slate-400 text-sm">Spend</span>
                               <span className="text-white font-mono bg-white/5 px-2 py-1 rounded">{selectedCase.googleAdsData.spend}</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-slate-400 text-sm">Calls</span>
                               <span className="text-white font-mono bg-white/5 px-2 py-1 rounded">{selectedCase.googleAdsData.calls}</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-slate-400 text-sm">Conversion Rate</span>
                               <span className="text-brand-cyan font-mono font-bold">{selectedCase.googleAdsData.convRate}</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-slate-400 text-sm">Revenue</span>
                               <span className="text-white font-mono bg-white/5 px-2 py-1 rounded">{selectedCase.googleAdsData.revenue}</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-slate-400 text-sm">ROAS</span>
                               <span className="text-brand-green font-mono font-black text-lg">{selectedCase.googleAdsData.roas}</span>
                            </div>
                         </div>
                      </div>
                    )}

                    {selectedCase.keyAchievements && (
                       <section>
                          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Achievements</h3>
                          <ul className="space-y-3">
                            {selectedCase.keyAchievements.map((k, i) => (
                              <li key={i} className="flex items-center gap-3 text-white">
                                <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                                  <Check size={12} className="text-brand-green" />
                                </div>
                                {k}
                              </li>
                            ))}
                          </ul>
                       </section>
                    )}
                 </div>
               </div>

             </div>
             
             {/* Sticky Footer CTA */}
             <div className="sticky bottom-0 bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 p-6 flex justify-end">
                <button 
                  onClick={() => { setSelectedCase(null); onNavigate(Page.BOOK_CALL); }}
                  className="bg-cyber-gradient text-black font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 shadow-lg shadow-brand-cyan/20 flex items-center gap-2"
                >
                  I want results like this <ArrowUpRight size={20} />
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};