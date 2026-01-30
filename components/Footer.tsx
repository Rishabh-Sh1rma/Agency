import React from 'react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-white/5 bg-black/40 pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Footer background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative z-10">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight flex items-center gap-2">
            Rishabh Sharma <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
          </h3>
          <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
            Performance Marketing Specialist delivering data-driven lead generation systems for growing Indian businesses. 
            No fluff. Just results.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan transition-all border border-white/5 group">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform"/>
            </a>
            <a href="mailto:contact@example.com" className="p-3 rounded-xl bg-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan transition-all border border-white/5 group">
              <Mail size={20} className="group-hover:scale-110 transition-transform"/>
            </a>
          </div>
        </div>

        <div className="md:text-right">
          <h4 className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-6">Navigation</h4>
          <ul className="space-y-4">
            <li>
              <button onClick={() => onNavigate(Page.START_HERE)} className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block">Start Here</button>
            </li>
            <li>
              <button onClick={() => onNavigate(Page.PROCESS)} className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block">Our Process</button>
            </li>
            <li>
              <button onClick={() => onNavigate(Page.CASE_STUDIES)} className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-300 inline-block">Case Studies</button>
            </li>
            <li>
               <button onClick={() => onNavigate(Page.BOOK_CALL)} className="text-white font-medium hover:text-brand-cyan transition-colors inline-flex items-center gap-2 group">
                 Book a Call <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 relative z-10">
        <p>&copy; 2026 Rishabh Sharma. All rights reserved.</p>
        <p className="mt-2 md:mt-0 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Systems Operational
        </p>
      </div>
    </footer>
  );
};