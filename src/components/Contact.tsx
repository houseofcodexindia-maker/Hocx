import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            business_type: formData.businessType,
            project_details: formData.projectDetails,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        projectDetails: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = '917909308210'; // Replace with actual number
    const message = encodeURIComponent('Hi, I would like to discuss a project with HOCX.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
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
              LET'S TALK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Ready to start your project? Contact us today for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Send Us a Message
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl text-green-700 font-semibold text-sm sm:text-base"
                >
                  ✨ Thank you! We'll get back to you within 24 hours.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="John Doe"
                    name="name"
                  />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="houseofcodexindia@gmail.com"
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="+91 79093 08210"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                  >
                    <option value="">Select your business type</option>
                    <option value="startup">Startup</option>
                    <option value="small-business">Small Business</option>
                    <option value="medium-business">Medium Business</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="individual">Individual/Freelancer</option>
                    <option value="non-profit">Non-Profit</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    required
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project, requirements, timeline, and budget..."
                  />
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:py-4 rounded-xl hover:shadow-2xl transition-all font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Send size={18} className="sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={handleWhatsApp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 sm:py-4 rounded-xl hover:shadow-2xl transition-all font-semibold inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                    WhatsApp Us
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-5 sm:p-6 border border-gray-100"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'houseofcodexindia@gmail.com', href: 'mailto:houseofcodexindia@gmail.com', gradient: 'from-blue-500 to-cyan-500' },
                  { icon: Phone, label: 'Phone', value: '+91 79093 08210', href: 'tel:+917909308210', gradient: 'from-green-500 to-emerald-500' },
                  { icon: MapPin, label: 'Location', value: 'Ganj Basoda, India', href: null, gradient: 'from-purple-500 to-pink-500' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className={`bg-gradient-to-br ${item.gradient} text-white p-2.5 sm:p-3 rounded-xl shadow-lg`}>
                      <item.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-600 whitespace-pre-line text-sm sm:text-base">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-5 sm:p-6 text-white"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Clock size={24} className="sm:w-7 sm:h-7" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { day: 'Monday - Friday', time: '10 AM - 7 PM' },
                  { day: 'Saturday', time: '10 AM - 5 PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/20 last:border-0 text-sm sm:text-base">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-blue-100">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                <p className="text-xs sm:text-sm text-blue-100">
                  ⚡ We typically respond within 24 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}