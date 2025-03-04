
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-white/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-white" />
      ) : (
        <Moon size={18} className="text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;
