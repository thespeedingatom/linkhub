import React from 'react';

interface TypographyProps {
  variant: 'display-1' | 'display-2' | 'h1' | 'h2' | 'h3' | 'body';
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
  const baseClasses = 'font-sans text-gray-900 dark:text-gray-100';
  
  const variantClasses = {
    'display-1': 'text-display-1 font-bold',
    'display-2': 'text-display-2 font-bold',
    'h1': 'text-h1 font-semibold',
    'h2': 'text-h2 font-semibold',
    'h3': 'text-h3 font-medium',
    'body': 'text-body font-normal',
  };

  const Element = variant.startsWith('h') ? variant : 'p';
  return React.createElement(
    Element as keyof JSX.IntrinsicElements,
    { className: `${baseClasses} ${variantClasses[variant]} ${className}` },
    children
  );
};

export default Typography;
