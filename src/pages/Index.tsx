import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import WorkExperience from '@/components/WorkExperience';
import About from '@/components/About';
import BuyMeCoffee from '@/components/BuyMeCoffee';
import Contact from '@/components/Contact';

export default function Index() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-4');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <WorkExperience />
        <About />
        <BuyMeCoffee />
        <Contact />
      </main>
    </div>
  );
}