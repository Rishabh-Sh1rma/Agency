import React, { useState } from 'react';
import { FormData } from '../types';
import { CheckCircle, AlertCircle, Calendar, ArrowRight, Loader2 } from 'lucide-react';

export const Booking: React.FC = () => {
  const [step, setStep] = useState<'form' | 'loading' | 'calendar'>('form');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    revenue: '',
    spend: '',
    kickoff: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    setTimeout(() => {
      setStep('calendar');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto min-h-[600px] flex flex-col justify-center px-4">
      
      {step === 'form' && (
        <div className="glass-panel p-8 md:p-12 rounded-[2rem] border-brand-cyan/20 animate-reveal">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-4">Apply for a Strategy Session</h1>
            <p className="text-slate-400">
              Please fill out this form to see if you qualify for our growth partner program.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all placeholder:text-slate-700"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Company Name</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all placeholder:text-slate-700"
                placeholder="Acme Inc."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Monthly Revenue</label>
                <div className="relative">
                  <select
                    name="revenue"
                    required
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-brand-dark">Select Revenue</option>
                    <option value="5L-20L" className="bg-brand-dark">₹10L - ₹20L/mo</option>
                    <option value="20L-50L" className="bg-brand-dark">₹20L - ₹50L/mo</option>
                    <option value="50L+" className="bg-brand-dark">₹50L+/mo</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Marketing Spend</label>
                 <div className="relative">
                   <select
                    name="spend"
                    required
                    value={formData.spend}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-brand-dark">Current Spend</option>
                    <option value="<50k" className="bg-brand-dark">₹1L - ₹3L/mo</option>
                    <option value="50k-2L" className="bg-brand-dark">₹3L - ₹5L/mo</option>
                    <option value="5L+" className="bg-brand-dark">₹5L+/mo</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">When would you ideally like to kick things off?</label>
              <div className="relative">
                  <select
                    name="kickoff"
                    required
                    value={formData.kickoff}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-brand-dark">Select Timeline</option>
                    <option value="As soon as possible" className="bg-brand-dark">As soon as possible</option>
                    <option value="Next Week" className="bg-brand-dark">Next Week</option>
                    <option value="Next Month" className="bg-brand-dark">Next Month</option>
                    <option value="Next Quarter" className="bg-brand-dark">Next Quarter</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyber-gradient text-black font-bold py-5 rounded-xl transition-all transform active:scale-95 shadow-lg shadow-brand-cyan/20 flex items-center justify-center gap-2 text-lg hover:shadow-brand-cyan/40"
            >
              Continue <ArrowRight size={20} />
            </button>
            
            <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1">
              <AlertCircle size={12} /> Your information is kept strictly confidential.
            </p>
          </form>
        </div>
      )}

      {step === 'loading' && (
        <div className="text-center animate-reveal py-20">
          <div className="relative w-20 h-20 mx-auto mb-8">
             <div className="absolute inset-0 rounded-full border-4 border-brand-cyan/20"></div>
             <div className="absolute inset-0 rounded-full border-4 border-t-brand-cyan animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Analyzing your profile...</h2>
          <p className="text-slate-400">Checking availability for Rishabh Sharma</p>
        </div>
      )}

      {step === 'calendar' && (
        <div className="glass-panel rounded-[2rem] overflow-hidden border-brand-green/20 animate-reveal flex flex-col h-[700px] shadow-2xl">
          <div className="bg-brand-dark/80 p-6 border-b border-white/5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-slate-800 border border-white/10 overflow-hidden relative">
               <div className="w-full h-full flex items-center justify-center bg-brand-cyan text-black font-bold text-xl">RS</div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Rishabh Sharma</h3>
              <p className="text-slate-400 text-sm flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> 30 Min Strategy Session</p>
            </div>
            <div className="ml-auto px-4 py-2 bg-brand-green/10 text-brand-green text-xs rounded-full border border-brand-green/20 flex items-center gap-1 font-bold">
               <CheckCircle size={14} /> QUALIFIED
            </div>
          </div>
          
          <div className="flex-grow flex items-center justify-center bg-white relative">
             <div className="absolute inset-0 bg-slate-50 opacity-50 pointer-events-none"></div>
             {/* Simulated Calendly UI */}
             <div className="text-center p-8 relative z-10">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Calendar className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-2xl mb-2">Select a Date & Time</h3>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                  To complete your booking, please select a time slot from the available options.
                </p>
                <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-8">
                  {[10, 11, 14, 15, 16].map((time) => (
                    <button key={time} className="px-4 py-3 border border-slate-200 rounded-xl text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium">
                      {time}:00
                    </button>
                  ))}
                </div>
                <button className="text-sm text-slate-400 underline hover:text-slate-600">
                  Switch Timezone (IST)
                </button>
             </div>
          </div>
        </div>
      )}

    </div>
  );
};