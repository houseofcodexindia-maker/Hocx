import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Pricing() {
  const plans = [
    {
      name: 'Basic Website',
      price: '₹5,999',
      description: 'Perfect for small businesses and startups',
      icon: Zap,
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Mobile optimized',
        'Basic SEO setup',
        'Contact form',
        'Social media integration',
        '1 month support',
        '7-10 days delivery',
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Standard Website',
      price: '₹12,999',
      description: 'Ideal for growing businesses',
      icon: Star,
      features: [
        'Up to 10 pages',
        'Advanced responsive design',
        'CMS integration',
        'Advanced SEO optimization',
        'Multiple contact forms',
        'Blog functionality',
        'Social media integration',
        'Analytics setup',
        '3 months support',
        '14-21 days delivery',
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Premium Website',
      price: '₹24,999',
      description: 'For businesses that demand excellence',
      icon: Crown,
      features: [
        'Unlimited pages',
        'Custom design & animations',
        'Advanced CMS',
        'Premium SEO package',
        'E-commerce ready',
        'Custom integrations',
        'Performance optimization',
        'Security hardening',
        'Priority support',
        '6 months support',
        '21-30 days delivery',
      ],
      popular: false,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const addOns = [
    { name: 'Domain Registration', price: '₹999/year', icon: '🌐' },
    { name: 'Web Hosting (Basic)', price: '₹2,999/year', icon: '☁️' },
    { name: 'Web Hosting (Premium)', price: '₹5,999/year', icon: '⚡' },
    { name: 'SSL Certificate', price: '₹1,499/year', icon: '🔒' },
    { name: 'E-Commerce Functionality', price: 'From ₹8,999', icon: '🛒' },
    { name: 'Admin Panel', price: '₹8,999', icon: '⚙️' },
    { name: 'Monthly Maintenance', price: '₹2,999/month', icon: '🔧' },
    { name: 'SEO Services', price: '₹4,999/month', icon: '📈' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl"></div>
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
              PRICING PLANS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Choose the perfect package for your business needs. All prices are inclusive of development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl transform md:scale-105 border-4 border-white'
                  : 'bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-2xl'
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 shadow-lg"
                >
                  <Star size={14} fill="currentColor" className="sm:w-4 sm:h-4" />
                  Most Popular
                  <Star size={14} fill="currentColor" className="sm:w-4 sm:h-4" />
                </motion.div>
              )}
              
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-3 sm:mb-4 ${
                    plan.popular ? 'bg-white/20' : `bg-gradient-to-br ${plan.gradient}`
                  }`}
                >
                  <plan.icon size={28} className={plan.popular ? 'text-white' : 'text-white sm:w-8 sm:h-8'} />
                </motion.div>
                
                <h3 className={`text-xl sm:text-2xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="relative">
                  <div className={`text-4xl sm:text-5xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'bg-gradient-to-r ' + plan.gradient + ' bg-clip-text text-transparent'
                  }`}>
                    {plan.price}
                  </div>
                  <p className={`text-xs sm:text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    One-time payment
                  </p>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, fIndex) => (
                  <motion.li
                    key={fIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: fIndex * 0.05 }}
                    className="flex items-start gap-2 sm:gap-3"
                  >
                    <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-white/20' : 'bg-green-100'
                    }`}>
                      <Check 
                        size={14} 
                        className={`${plan.popular ? 'text-white' : 'text-green-600'} sm:w-4 sm:h-4`}
                      />
                    </div>
                    <span className={`text-xs sm:text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className={`w-full py-3 sm:py-4 px-6 rounded-xl font-semibold transition-all shadow-lg text-sm sm:text-base ${
                  plan.popular
                    ? 'bg-white text-purple-600 hover:bg-gray-50'
                    : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-xl`
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Additional Services & Add-Ons
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">Enhance your website with these premium add-ons</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto mb-6 sm:mb-8">
            {addOns.map((addOn, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-between border border-gray-100"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">{addOn.icon}</span>
                  <span className="text-gray-900 font-semibold text-sm sm:text-base">{addOn.name}</span>
                </div>
                <span className="text-blue-600 font-bold text-sm sm:text-lg whitespace-nowrap ml-2">{addOn.price}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 sm:px-10 sm:py-4 rounded-xl hover:shadow-2xl transition-all font-semibold text-base sm:text-lg"
            >
              Request Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}