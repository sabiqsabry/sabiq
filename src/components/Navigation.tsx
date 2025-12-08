import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import DownloadResumeDialog from './DownloadResumeDialog';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-[#050505] dark:text-white tracking-tight">
            Sabiq Sabry
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-[#050505] dark:text-white hover:text-[#1B9AAA] transition-colors duration-200 font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-[#050505] dark:text-white hover:text-[#1B9AAA] transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-[#050505] dark:text-white hover:text-[#1B9AAA] transition-colors duration-200 font-medium"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[#050505] dark:text-white hover:text-[#1B9AAA] transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#050505] dark:text-white hover:text-[#1B9AAA] transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <DownloadResumeDialog
              triggerClassName="bg-[#1B9AAA] hover:bg-[#1B9AAA]/90 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;