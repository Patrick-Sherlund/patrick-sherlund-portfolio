import { ArrowLeft, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function TopNav() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#e7f4ff]/95 backdrop-blur-sm border-b border-[rgba(17,17,17,0.1)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-2 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-[#111111] hover:text-[#4b5563] transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm">Back to Projects</span>
        </Link>
        
        <button className="p-2 hover:bg-[rgba(17,17,17,0.05)] rounded-lg transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
      
      {/* Scroll progress bar */}
      <div className="h-[2px] bg-[rgba(17,17,17,0.1)]">
        <div 
          className="h-full bg-[#111111] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}