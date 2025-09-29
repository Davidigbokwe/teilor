import { motion } from 'framer-motion';
import { Button } from '../UI/Button';

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-tealor-blue text-sm font-medium mb-6"
            >
              Streamline Your Tailoring Business
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Manage Clients & Measurements <span className="text-tealor-blue">Effortlessly</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Teilor helps professional tailors organize client information, track measurements, and grow their business with intuitive digital tools designed specifically for the tailoring industry.
            </p>
            
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.a
                href="#appstore"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm md:text-base md:px-6 md:py-3"
                style={{ minWidth: '110px', maxWidth: '180px', justifyContent: 'center' }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </motion.a>
              <motion.a
                href="#playstore"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm md:text-base md:px-6 md:py-3"
                style={{ minWidth: '110px', maxWidth: '180px', justifyContent: 'center' }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12C20.75 12.47 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
                </svg>
                Play Store
              </motion.a>
            </motion.div>
          </motion.div>
          
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};

const DashboardMockup = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="lg:w-1/2 flex justify-center"
  >
    <div className="relative">
      <img src="/Onboarding.png" alt="Onboarding" className="w-80 h-96 object-contain rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6" />
    </div>
  </motion.div>
);

const ClientItem = ({ name, type }: { name: string; type: string }) => (
  <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer">
    <div>
      <div className="font-medium text-gray-900">{name}</div>
      <div className="text-xs text-gray-500">{type}</div>
    </div>
    <div className="w-8 h-8 bg-tealor-blue/10 rounded-full flex items-center justify-center">
      <span className="text-tealor-blue text-sm">→</span>
    </div>
  </div>
);

const FloatingElement = ({ 
  animation, 
  delay = 0, 
  className, 
  icon
}: { 
  animation: any; 
  delay?: number; 
  className: string; 
  icon: string; 
}) => (
  <motion.div 
    animate={animation}
    transition={{ duration: 3, repeat: Infinity, delay }}
    className={`${className} rounded-2xl flex items-center justify-center`}
  >
    <span className="text-2xl">{icon}</span>
  </motion.div>
);