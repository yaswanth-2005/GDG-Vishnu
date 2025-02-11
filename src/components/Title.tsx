// components/Title.tsx
import React from 'react';

interface TitleProps {
  size?: 'small' | 'medium' | 'large'; // Optional size prop
  color?: 'red' | 'blue' | 'green' | 'yellow' | 'gray'; // Optional color prop
  underline?: boolean; // Optional underline prop
  center?: boolean; // Optional center alignment prop
  className?: string; // Optional additional classes
  id?: string;
  children: React.ReactNode; // Text content as children
}

const sizeVariants = {
  small: 'text-2xl',
  medium: 'text-4xl',
  large: 'text-5xl',
};

const colorVariants = {
  red: 'text-red-600',
  blue: 'text-blue-600',
  green: 'text-green-600',
  yellow: 'text-yellow-600',
  gray: 'text-gray-800',
};

const Title: React.FC<TitleProps> = ({
  size = 'medium',
  color = 'gray',
  underline = false,
  center = false,
  className = '',
  id = '',
  children,
}) => {
  const textSize = sizeVariants[size];
  const textColor = colorVariants[color];
  const underlineStyle = underline ? 'underline decoration-4' : '';
  const textAlign = center ? 'text-center' : '';

  return (
    <h1 id={id} className={`${textSize} ${textColor} font-bold ${underlineStyle} ${textAlign} py-4 ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
