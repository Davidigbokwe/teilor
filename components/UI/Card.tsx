// components/UI/Card.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card = ({ children, className = '', hover = true, padding = 'md' }: CardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      className={`
        bg-white rounded-xl shadow-sm border border-gray-200
        transition-all duration-300 hover:shadow-md
        ${paddingClasses[padding]} ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient?: string;
  delay?: number;
}

export const FeatureCard = ({ icon, title, description, gradient = 'from-blue-500 to-cyan-500', delay = 0 }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <Card className="text-center group h-full">
      <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  </motion.div>
);

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
}

export const StatsCard = ({ title, value, change, isPositive, icon }: StatsCardProps) => (
  <Card>
    <div className="flex justify-between items-start mb-4">
      <div className={`w-12 h-12 bg-gradient-to-r ${
        isPositive ? 'from-green-500 to-emerald-500' : 'from-red-500 to-pink-500'
      } rounded-xl flex items-center justify-center text-white text-lg`}>
        {icon}
      </div>
      <span className={`text-sm px-2 py-1 rounded-full ${
        isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}>
        {change}
      </span>
    </div>
    <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </Card>
);