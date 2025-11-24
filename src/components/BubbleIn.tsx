import { useEffect, useRef, useState } from 'react';
import './BubbleIn.css';

interface BubbleInProps {
  children: React.ReactNode;
  className?: string;
}

const BubbleIn = ({ children, className = '' }: BubbleInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it enters viewport
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className={`bubble-in-container ${isVisible ? 'bubble-in-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default BubbleIn;
