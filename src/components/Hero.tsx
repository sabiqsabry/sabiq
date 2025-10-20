import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B9AAA]/10 via-[#F5F1E3] dark:via-[#121212] to-[#DDDBCB] dark:to-[#050505] opacity-60"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#1B9AAA]/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#DDDBCB]/20 dark:bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#F5F1E3]/30 dark:bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Main Headline - Larger and more prominent */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#050505] dark:text-white leading-tight tracking-tight mb-8">
            Hi, I'm Sabiq
          </h1>

          {/* Secondary Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#050505] dark:text-white leading-tight tracking-tight mb-6">
            I build products that feel effortless — from concept to code.
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#050505]/70 dark:text-white/70 max-w-4xl mx-auto leading-relaxed animate-in fade-in delay-300 duration-700">
            Crafting smooth, scalable, and meaningful digital experiences that blend logic with design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12 animate-in fade-in delay-500 duration-700">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-[#1B9AAA] hover:bg-[#1B9AAA]/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              asChild
              variant="outline"
              className="border-[#1B9AAA] text-[#1B9AAA] hover:bg-[#1B9AAA] hover:text-white dark:border-[#1B9AAA] dark:text-[#1B9AAA] px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <a 
                href="https://drive.google.com/file/d/16H0xs452taoXg9p7JWRZu1YhzAdoXf11/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Résumé
              </a>
            </Button>
          </div>
        </div>

        {/* Credibility Strip */}
        <div className="mt-20 animate-in fade-in delay-700 duration-700">
          <div className="flex flex-wrap justify-center gap-8 text-[#050505]/60 dark:text-white/60">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🥉</span>
              <span className="font-medium">3rd Place — SLIIT Datathon 2020</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🥈</span>
              <span className="font-medium">Runner-Up — IIT Hackathon 2019</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌏</span>
              <span className="font-medium">Experience across Australia, Sri Lanka & Malaysia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;