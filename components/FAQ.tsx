import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How is this different from a typical ad agency?",
      answer: "Most agencies sell ad management and reports. We sell qualified sales conversations. The entire system is built around filtering, intent, and conversion — not impressions or vanity metrics."
    },
    {
      question: "What exactly is a “qualified call”?",
      answer: "A qualified call is a real business decision-maker who matches your ideal customer profile and has expressed clear interest in your product or service."
    },
    {
      question: "Do you guarantee revenue or clients?",
      answer: "No. We guarantee qualified sales calls. Revenue depends on your offer, pricing, and sales process. We focus on delivering the highest-quality demand possible."
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients start seeing inbound leads and booked calls within 7–14 days, with full system performance stabilizing within 30 days."
    },
    {
      question: "What kind of businesses do you work with?",
      answer: "India-based businesses with a clear offer, a sales process, and the ability to handle inbound demand — typically B2B, SaaS, services, education, or high-ticket local businesses."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-24 px-4 reveal-on-scroll">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold tracking-widest uppercase">
          <HelpCircle size={14} /> Common Questions
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Still Hesitating? Let’s Clear Things Up.</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-cyan/40 bg-white/5' : 'hover:border-white/20'}`}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left group"
            >
              <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-brand-cyan' : 'text-white group-hover:text-brand-cyan/80'}`}>
                {faq.question}
              </span>
              <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-brand-cyan text-black rotate-180' : 'bg-white/5 text-slate-400 group-hover:bg-white/10'}`}>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg border-t border-white/5 pt-4">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};