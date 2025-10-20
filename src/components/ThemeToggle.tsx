import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="sm"
      className="w-9 h-9 rounded-full transition-all duration-300 hover:bg-[#1B9AAA]/10"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-[#1B9AAA]" />
      ) : (
        <Moon className="h-4 w-4 text-[#1B9AAA]" />
      )}
    </Button>
  );
};

export default ThemeToggle;