// components/UI/Mockup.tsx
import { motion } from 'framer-motion';

interface MockupProps {
  type?: 'phone' | 'tablet' | 'desktop';
  children: React.ReactNode;
  className?: string;
}

export const Mockup = ({ type = 'phone', children, className = '' }: MockupProps) => {
  const mockupClasses = {
    phone: 'w-80 bg-gray-800 rounded-[2rem] p-4 shadow-2xl',
    tablet: 'w-96 bg-gray-800 rounded-3xl p-6 shadow-2xl',
    desktop: 'w-full bg-gray-800 rounded-xl p-4 shadow-2xl'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`${mockupClasses[type]} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const PhoneMockup = () => (
  <Mockup type="phone">
    <div className="bg-white rounded-[1.5rem] overflow-hidden h-96">
      {/* Phone Screen Content */}
      <div className="p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-tealor-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-gray-800">Teilor</span>
          </div>
          <div className="text-gray-400">9:41</div>
        </div>

        {/* Stats Card */}
        <div className="bg-gradient-to-r from-tealor-blue to-blue-600 rounded-xl p-4 text-white mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90">Total Clients</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="text-sm bg-white/20 rounded-lg px-2 py-1">
              May 2024
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-gray-100 rounded-lg p-3 mb-4 flex items-center">
          <span className="text-gray-500 mr-2">🔍</span>
          <input 
            type="text" 
            placeholder="Search clients..." 
            className="bg-transparent w-full focus:outline-none text-sm"
          />
        </div>

        {/* Client List */}
        <div className="space-y-3 flex-1 overflow-y-auto">
          {[
            { name: 'Sarah Johnson', type: 'Dress', status: 'Active' },
            { name: 'Michael Chen', type: 'Suit', status: 'Pending' },
            { name: 'Emma Wilson', type: 'Gown', status: 'Active' },
            { name: 'James Brown', type: 'Shirt', status: 'Completed' }
          ].map((client, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-3 flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div>
                <div className="font-medium text-gray-900">{client.name}</div>
                <div className="text-xs text-gray-500">{client.type}</div>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${
                client.status === 'Active' ? 'bg-green-100 text-green-700' :
                client.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {client.status}
              </div>
            </div>
          ))}
        </div>

        {/* FAB */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 right-6 w-14 h-14 bg-tealor-blue rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-white text-xl font-bold">+</span>
        </motion.div>
      </div>
    </div>
  </Mockup>
);

export const AddClientMockup = () => (
  <Mockup type="phone">
    <div className="bg-white rounded-[1.5rem] overflow-hidden h-96">
      <div className="p-4 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-gray-600">←</span>
          </div>
          <h2 className="text-lg font-bold text-gray-900">Add New Client</h2>
        </div>

        {/* Form */}
        <div className="space-y-4 flex-1">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name *</label>
            <div className="h-12 bg-gray-100 rounded-lg px-4 flex items-center">
              <span className="text-gray-900">Sarah Johnson</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Phone Number *</label>
            <div className="h-12 bg-gray-100 rounded-lg px-4 flex items-center">
              <span className="text-gray-900">+1 (555) 123-4567</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Address</label>
            <div className="h-12 bg-gray-100 rounded-lg px-4 flex items-center">
              <span className="text-gray-900">123 Main St, City</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Gender</label>
              <div className="h-12 bg-gray-100 rounded-lg px-4 flex items-center justify-between">
                <span className="text-gray-900">Women</span>
                <span className="text-gray-500">▼</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Clothing Type</label>
              <div className="h-12 bg-gray-100 rounded-lg px-4 flex items-center justify-between">
                <span className="text-gray-900">Dress</span>
                <span className="text-gray-500">▼</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-12 bg-tealor-blue rounded-lg flex items-center justify-center text-white font-medium mt-4"
        >
          Next →
        </motion.button>
      </div>
    </div>
  </Mockup>
);