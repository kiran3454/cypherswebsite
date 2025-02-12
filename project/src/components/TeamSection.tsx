import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const teamMembers = [
  {
    name: 'Yukta I P',
    role: 'Student Coordinator',
    image: '/images/yuktha.jpg',
    contact: 'alex.j@techfest.com'
  },
  {
    name: 'Kiran Kulal',
    role: 'Student Coordinator',
    image: '/images/kiran1.jpg',
    contact: '9844240521'
  },
  {
    name: 'Vikhya Gowda',
    role: 'Student Coordinator',
    image: '/images/vikhya.jpg',
    contact: 'michael.c@techfest.com'
  },
  {
    name: 'Chandan',
    role: 'Student Coordinator',
    image: '/images/chandan1.jpg',
    contact: 'emily.d@techfest.com'
  },
  {
    name: 'Ramya',
    role: 'Student Coordinator',
    image: '/images/Ramya2.jpg',
    contact: 'david.k@techfest.com'
  },
  {
    name: 'K Shree Ranjan',
    role: 'Student Coordinator',
    image: '/images/ranjan1.jpg',
    contact: 'lisa.w@techfest.com'
  },
  {
    name: 'Preethesh P Nayak',
    role: 'Student Coordinator',
    image: '/images/preethesh3.jpg',
    contact: 'james.w@techfest.com'
  },
  {
    name: 'Dilan',
    role: 'Student Coordinator',
    image: '/images/dilan2.jpg',
    contact: 'maria.g@techfest.com'
  },
  {
    name: 'Yashwith',
    role: 'Student Coordinator',
    image: '/images/yashwith1.jpg',
    contact: 'robert.t@techfest.com'
  },
  {
    name: 'Heera B N',
    role: 'Student Coordinator',
    image: '/images/heera.jpg',
    contact: 'sophie.b@techfest.com'
  },
  {
    name: 'K M Srujana',
    role: 'Student Coordinator',
    image: '/images/srujana.jpg',
    contact: 'daniel.l@techfest.com'
  },
  {
    name: 'Varshini D',
    role: 'Student Coordinator',
    image: '/images/varshini1.jpg',
    contact: 'rachel.m@techfest.com'
  },
  {
    name: 'Thrisha',
    role: 'Student Coordinator',
    image: '/images/thrisha1.jpg',
    contact: 'thomas.a@techfest.com'
  },
  {
    name: 'sushmitha',
    role: 'Student Coordinator',
    image: '/images/sushmitha1.jpg',
    contact: 'sarah.j@techfest.com'
  },
  {
    name: 'K M soujanya',
    role: 'Event Manager',
    image: '/images/soujanya.jpg',
    contact: 'david.c@techfest.com'
  }
];

const TeamMemberCard = ({ member, index }) => {
  const cardRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  const [imageError, setImageError] = React.useState(false);

  const handleImageError = (e) => {
    console.log(`Image failed to load for ${member.name}:`, member.image);
    setImageError(true);
    // Use a professional placeholder image from Unsplash
    e.currentTarget.src = `https://source.unsplash.com/random/400x400/?portrait&sig=${member.name}`;
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity }}
      className="flex flex-col items-center p-4"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-lg transform transition-all duration-300 group-hover:shadow-purple-500/50">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-300"
        >
          <div className="text-white text-center p-4">
            <p className="font-medium">{member.contact}</p>
          </div>
        </motion.div>
      </motion.div>
      <h3 className="text-xl font-semibold mt-2 text-white">{member.name}</h3>
      <p className="text-purple-200">{member.role}</p>
    </motion.div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1e1b4b] to-[#2c1654] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;