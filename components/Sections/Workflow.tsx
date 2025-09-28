import { motion } from 'framer-motion';

import { WORKFLOW_STEPS } from '@/constants/data';

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

export const Workflow = () => {
  return (
    <section id="workflow" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader 
          title="Simple Four-Step Workflow"
          description="From adding new clients to managing measurements, Teilor makes every step intuitive and efficient."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {WORKFLOW_STEPS.map((step, index) => (
              <WorkflowStep key={step.step} step={step} index={index} />
            ))}
          </div>
          
          <div className="flex justify-center">
            <AppScreensMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkflowStep = ({ step, index }: { step: any; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex items-start space-x-4"
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-tealor-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
        {step.step}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  </motion.div>
);

const AppScreensMockup = () => (
  <motion.div 
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="w-80">
      {/* Phone Mockup */}
      <div className="bg-gray-800 rounded-3xl p-4 shadow-2xl">
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Screen Content */}
          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold text-gray-900">Add Client</div>
              <div className="w-6 h-6 bg-gray-100 rounded-full"></div>
            </div>
            
            {/* Form */}
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Name *</label>
                <div className="h-10 bg-gray-100 rounded-lg mt-1"></div>
              </div>
              
              <div>
                <label className="text-sm text-gray-600">Phone *</label>
                <div className="h-10 bg-gray-100 rounded-lg mt-1"></div>
              </div>
              
              <div>
                <label className="text-sm text-gray-600">Address</label>
                <div className="h-10 bg-gray-100 rounded-lg mt-1"></div>
              </div>
            </div>
            
            {/* Next Button */}
            <div className="h-12 bg-tealor-blue rounded-lg mt-4 flex items-center justify-center">
              <span className="text-white font-medium">Next →</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
      >
        <span className="text-2xl">👗</span>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-4 -left-4 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center"
      >
        <span className="text-2xl">📏</span>
      </motion.div>
    </div>
  </motion.div>
);