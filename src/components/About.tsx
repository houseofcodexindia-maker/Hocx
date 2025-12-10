import React from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'MSME Registered',
      description: 'Officially registered company ensuring reliability and professionalism',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and designers passionate about quality',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your success is our priority, we tailor solutions to your needs',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Growth Partner',
      description: 'Long-term support to help your business scale and succeed',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            About HOCX
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            House Of CodeX (HOCX) is a registered MSME company dedicated to providing high-quality IT and software solutions. 
            We specialize in modern web development, e-commerce platforms, UI/UX design, and comprehensive 
            IT services for startups and established businesses.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-12 border border-gray-100"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What We Do
          </h3>
          <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              At HOCX, we transform your digital ideas into reality. Whether you're a startup looking to establish 
              your online presence or an established business seeking to upgrade your digital infrastructure, 
              we provide end-to-end solutions tailored to your specific needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Our team combines technical expertise with creative design thinking to deliver projects that not only 
              look great but also perform exceptionally. We stay updated with the latest technologies and industry 
              best practices to ensure you receive modern, scalable, and future-proof solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              From initial consultation to post-launch support, we're committed to being your trusted technology 
              partner. We believe in building long-term relationships and providing ongoing support to help your 
              business grow and adapt in the ever-evolving digital landscape.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${feature.gradient} text-white w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                >
                  <feature.icon size={24} className="sm:w-7 sm:h-7" />
                </motion.div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-white transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}