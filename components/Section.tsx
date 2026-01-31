import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'dark' | 'darker';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, background = 'dark' }) => {
  const bgClass = background === 'dark' ? 'bg-[#0B0F19]' : 'bg-[#05080F]';
  
  return (
    <section id={id} className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};