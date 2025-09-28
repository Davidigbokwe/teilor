import { motion } from 'framer-motion';
import { FEATURES } from '@/constants/data';

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Everything You Need to Manage Your Tailoring Business"
          description="Teilor provides specialized tools designed specifically for professional tailors to streamline client management and measurement tracking."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
  </motion.div>
);

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
  >
    <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform`}>
      {feature.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
  </motion.div>
);