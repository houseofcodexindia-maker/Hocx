import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export function VideoSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              ABOUT US
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Learn More About HOCX
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A short introduction to who we are and how we help businesses grow through modern digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Video Container with 16:9 Aspect Ratio */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-100 hover:border-purple-200 transition-all duration-300">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {/* YouTube Embed Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 flex items-center justify-center">
                {/* Placeholder Content */}
                <div className="text-center px-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-2xl cursor-pointer mb-4 sm:mb-6"
                  >
                    <Play size={32} className="text-white fill-white ml-1 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                  </motion.div>
                  <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">
                    Video Introduction Coming Soon
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2">
                    YouTube Video Placeholder
                  </p>
                </div>
                
                {/* For actual YouTube video, replace the above div with:
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="HOCX Introduction Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                */}
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500 rounded-full blur-2xl opacity-20 -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-purple-500 rounded-full blur-2xl opacity-20 -z-10"></div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-gray-500 text-sm sm:text-base">
            Discover how HOCX can transform your digital presence and drive your business forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
