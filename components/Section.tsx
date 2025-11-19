'use client';

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'white' | 'warmgray' | 'primary';
  id?: string;
}

const Section = ({ children, className = '', bgColor = 'white', id }: SectionProps) => {
  const bgColorClass = {
    white: 'bg-white',
    warmgray: 'bg-warmgray',
    primary: 'bg-primary',
  }[bgColor];

  return (
    <section id={id} className={`py-20 ${bgColorClass} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
