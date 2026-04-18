import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: ReactNode;
}

export function Button({ variant = 'primary', onClick, children }: ButtonProps) {
  const baseClasses = "inline-flex items-center gap-2 px-6 py-3 rounded-xl uppercase text-sm tracking-wide transition-all duration-200";
  
  const variantClasses = {
    primary: "bg-[#111111] text-white hover:bg-[#2a2a2a] hover:shadow-soft hover:-translate-y-0.5",
    secondary: "border-2 border-[rgba(17,17,17,0.3)] text-[#111111] hover:border-[rgba(17,17,17,0.6)] hover:shadow-soft hover:-translate-y-0.5"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
