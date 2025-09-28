import { motion } from 'framer-motion';

export const Dashboard = () => {
  const images = ['/app1.png', '/app2.png', '/app3.png', '/app4.png'];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the intuitive interface of our tailoring management app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`App screenshot ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};