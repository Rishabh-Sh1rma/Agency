import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { Process } from './views/Process';
import { CaseStudies } from './views/CaseStudies';
import { Booking } from './views/Booking';
import { Page } from './types';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.START_HERE);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    // Re-observe when page changes
    return () => observer.disconnect();
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.START_HERE:
        return <Home onNavigate={navigateTo} />;
      case Page.PROCESS:
        return <Process onNavigate={navigateTo} />;
      case Page.CASE_STUDIES:
        return <CaseStudies onNavigate={navigateTo} />;
      case Page.BOOK_CALL:
        return <Booking />;
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-cyan/30 selection:text-white flex flex-col overflow-hidden relative">
      
      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 bg-deep-space z-0"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-20 z-0 animate-pulse-slow"></div>
      
      {/* Animated Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] animate-float z-0 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] animate-float-delayed z-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar currentPage={currentPage} onNavigate={navigateTo} />
        
        <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div>
            {renderPage()}
          </div>
        </main>

        <Footer onNavigate={navigateTo} />
      </div>

      {/* Floating CTA for Mobile */}
      {currentPage !== Page.BOOK_CALL && (
        <div className="md:hidden fixed bottom-6 left-0 right-0 px-4 z-50">
           <button 
             onClick={() => navigateTo(Page.BOOK_CALL)}
             className="w-full glass-panel bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan font-bold py-4 rounded-xl shadow-lg backdrop-blur-xl border flex items-center justify-center gap-2"
           >
             Book Free Strategy Call
           </button>
        </div>
      )}

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-8 p-3 bg-brand-cyan/10 hover:bg-brand-cyan/20 backdrop-blur rounded-full border border-brand-cyan/20 text-brand-cyan transition-all z-50 hover:scale-110 shadow-lg shadow-brand-cyan/20"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}