import React from 'react';
import { Page } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Start Here', value: Page.START_HERE },
    { label: 'Our Process', value: Page.PROCESS },
    { label: 'Case Studies', value: Page.CASE_STUDIES },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      <nav className="glass-panel rounded-full px-2 py-2 flex items-center justify-between shadow-2xl shadow-black/50 max-w-4xl w-full md:w-auto relative">
        
        {/* Mobile Logo/Brand */}
        <div className="pl-4 md:hidden font-bold text-white tracking-tight flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
          RS
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.value}>
              <button
                onClick={() => handleNav(item.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === item.value
                    ? 'bg-white/10 text-white shadow-inner border border-white/5'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block ml-2 pl-2 border-l border-white/10">
          <button
            onClick={() => handleNav(Page.BOOK_CALL)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
              currentPage === Page.BOOK_CALL
                 ? 'bg-cyber-gradient text-black shadow-lg shadow-brand-cyan/25'
                 : 'bg-transparent border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/10'
            }`}
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-4 bg-brand-dark border border-white/10 rounded-2xl p-4 flex flex-col gap-2 md:hidden animate-reveal shadow-2xl z-50">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`w-full text-left px-4 py-3 rounded-xl ${
                  currentPage === item.value ? 'bg-white/10 text-white' : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
               onClick={() => handleNav(Page.BOOK_CALL)}
               className="w-full text-center mt-2 bg-cyber-gradient text-black font-bold py-3 rounded-xl shadow-lg shadow-brand-cyan/20"
            >
              Book Strategy Call
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};