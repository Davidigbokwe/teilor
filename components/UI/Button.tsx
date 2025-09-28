// components/UI/Button.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  type = 'button'
}: ButtonProps) => {
  const baseClasses = "font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-4";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "bg-tealor-blue text-white hover:bg-blue-700 shadow-lg hover:shadow-xl focus:ring-blue-300",
    secondary: "bg-white text-tealor-blue border border-tealor-blue hover:bg-gray-50 focus:ring-blue-300",
    outline: "bg-transparent text-tealor-blue border border-tealor-blue hover:bg-tealor-blue hover:text-white focus:ring-blue-300"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};