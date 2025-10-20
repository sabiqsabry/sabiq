import { Button } from '@/components/ui/button';
import { Coffee } from 'lucide-react';

const BuyMeCoffee = () => {
  return (
    <section className="py-16 px-6 bg-[#F5F1E3] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050505] dark:text-white tracking-tight">
            Support My Work
          </h2>
          
          <p className="text-lg text-[#050505]/70 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
            If you'd like to support my projects or appreciate my work, you can buy me a coffee! ☕
          </p>

          <div className="pt-4">
            <Button 
              asChild
              className="bg-[#1B9AAA] hover:bg-[#1B9AAA]/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <a 
                href="https://www.buymeacoffee.com/sabiqsabry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <Coffee className="w-6 h-6" />
                Buy Me a Coffee
              </a>
            </Button>
          </div>

          <p className="text-sm text-[#050505]/50 dark:text-white/50 pt-4">
            Your support helps me continue creating awesome projects and sharing knowledge with the community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuyMeCoffee;