import React from 'react';

interface TypographyProps {
  variant: 'display-1' | 'display-2' | 'h1' | 'h2' | 'h3' | 'body';
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
  const baseClasses = 'text-text-light dark:text-text-dark';
  
  const variantClasses = {
    'display-1': 'text-display-1 font-bold leading-tight',
    'display-2': 'text-display-2 font-bold leading-tight',
    'h1': 'text-h1 font-semibold leading-tight',
    'h2': 'text-h2 font-semibold leading-tight',
    'h3': 'text-h3 font-medium leading-snug',
    'body': 'text-body leading-relaxed',
  };

  const Element = variant.startsWith('h') ? variant : 'p';

  return (
    <Element className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Element>
  );
};

export default Typography;
