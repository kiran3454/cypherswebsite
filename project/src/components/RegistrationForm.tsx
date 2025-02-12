import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const teams = [
  'Dominators',
  'TechWise',
  'Codenest',
  'Elite Eagles',
  'Tech Rockers'
];

const events = [
  'Coding',
  'Photography',
  'Debet',
  'Surprize event',
  'Dance',
  'Gaming',
  'Presentation'
];

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    participant1: '',
    participant2: '',
    selectedEvent: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      // Reset form after submission
      setFormData({
        teamName: '',
        participant1: '',
        participant2: '',
        selectedEvent: ''
      });
    }, 3000);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#1e1b4b] to-[#2c1654] relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={formVariants}
          className="glass-effect rounded-xl p-8"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-8 gradient-text"
          >
            Register for TechFest 2024
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-purple-200 mb-2">
                Select Team Name
              </label>
              <select
                value={formData.teamName}
                onChange={(e) => setFormData(prev => ({ ...prev, teamName: e.target.value }))}
                className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                required
              >
                <option value="">Select a team</option>
                {teams.map(team => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Participant 1 Name
                </label>
                <input
                  type="text"
                  value={formData.participant1}
                  onChange={(e) => setFormData(prev => ({ ...prev, participant1: e.target.value }))}
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">
                  Participant 2 Name
                </label>
                <input
                  type="text"
                  value={formData.participant2}
                  onChange={(e) => setFormData(prev => ({ ...prev, participant2: e.target.value }))}
                  className="w-full px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-purple-200 mb-4">
                Select Event
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {events.map((event) => (
                  <motion.label
                    key={event}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      formData.selectedEvent === event 
                        ? 'bg-purple-600/30 border-purple-500' 
                        : 'bg-purple-900/20 border-purple-500/20'
                    } border cursor-pointer hover:bg-purple-900/30 transition-colors`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="event"
                      value={event}
                      checked={formData.selectedEvent === event}
                      onChange={(e) => setFormData(prev => ({ ...prev, selectedEvent: e.target.value }))}
                      className="text-purple-600 focus:ring-purple-500 bg-purple-900/30 border-purple-500/30"
                      required
                    />
                    <span className="text-purple-200">{event}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium flex items-center justify-center space-x-2"
              >
                <span>Register Now</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={successVariants}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl shadow-xl flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Check className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-white">Successfully Registered!</h3>
              <p className="text-purple-100">Thank you for registering for TechFest 2024</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when success message is shown */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default RegistrationForm;