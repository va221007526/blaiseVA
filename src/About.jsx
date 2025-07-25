import { FiAward, FiUser, FiClock, FiCheckCircle, FiTrendingUp, FiBookOpen } from 'react-icons/fi';
import { FaHandshake, FaLightbulb, FaRegStar } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import hero from './assets/ogblaise.jpg';

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const journey = [
    {
      year: "2020",
      title: "The Leap of Faith",
      icon: <FaLightbulb className="text-[#5ac3dd]" />,
      description: "Took my first brave step into the digital world during lockdown. Spent countless nights learning from free resources, determined to turn my curiosity into a career.",
      quote: '"The expert in anything was once a beginner." — Helen Hayes'
    },
    {
      year: "2021-2023",
      title: "The Grind Years",
      icon: <FiBookOpen className="text-[#5ac3dd]" />,
      description: "Mastered tools like Notion and Zapier through trial and error. Built my first systems while balancing other jobs - proof that passion finds a way.",
      quote: '"Fall in love with the process, and the results will come." — Eric Thomas'
    },
    {
      year: "2024",
      title: "First Breakthrough",
      icon: <FaHandshake className="text-[#5ac3dd]" />,
      description: "Landed my first paying clients! Delivered 110% on every task, turning small opportunities into long-term partnerships.",
      quote: '"Opportunities don\'t happen. You create them." — Chris Grosser'
    },
    {
      year: "2025",
      title: "Rising Star",
      icon: <FaRegStar className="text-[#5ac3dd]" />,
      description: "Now helping multiple clients worldwide while mentoring others in Rwanda. Living proof that consistency beats talent when talent doesn't show up!",
      quote: '"Success is no accident. It is hard work, perseverance, learning..." — Pelé'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero with Kinetic Typography */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-br from-[#5ac3dd]/10 to-white py-28 md:py-36"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            From <span className="text-[#5ac3dd]">Self-Taught</span> to<br />
            <motion.span 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block"
            >
              In-Demand Professional
            </motion.span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            My story shows what's possible when you combine hunger to learn with relentless execution - no fancy degree or connections needed.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="#journey" 
              className="bg-[#5ac3dd] hover:bg-[#48a8c1] text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Witness My Transformation
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Visual Timeline */}
      <section id="journey" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-[#5ac3dd]">Against-All-Odds</span> Journey
            </h2>
            <p className="text-xl text-gray-600">
              How I turned "I don't know" into "I'll figure it out" - one Google search at a time
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#5ac3dd]/20 transform -translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-0">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-[#5ac3dd] text-white flex items-center justify-center text-lg font-bold z-10 mx-auto md:mx-0 mb-6 md:mb-0 shadow-lg transition-all duration-300"
                  >
                    {item.year}
                  </motion.div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} md:py-8`}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative h-full transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <p className="text-sm text-[#5ac3dd] italic">"{item.quote}"</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            <div className="lg:w-1/2">
              <motion.img 
                src={hero} 
                alt="Working with clients"
                className="w-full h-auto rounded-xl shadow-xl"
                loading="lazy"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              />
            </div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#5ac3dd]">Hard-Won</span> Superpowers
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-gray-600 mb-6 leading-relaxed">
                Skills forged through real-world challenges - not just theory:
              </motion.p>
              
              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { name: "Self-Teaching", level: "95%", icon: <FiUser /> },
                  { name: "Problem-Solving", level: "90%", icon: <FiTrendingUp /> },
                  { name: "Hustle Mode", level: "100%", icon: <FiClock /> },
                  { name: "Tool Mastery", level: "85%", icon: <FiCheckCircle /> }
                ].map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -3 }}
                    className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:border-[#5ac3dd]/30"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[#5ac3dd]/10 p-2 rounded-full">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="bg-[#5ac3dd] h-2 rounded-full" 
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-[#5ac3dd]/5 p-6 rounded-xl border border-[#5ac3dd]/20"
              >
                <div className="flex items-start gap-4">
                  <FiAward className="text-[#5ac3dd] text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">The Self-Made Edge</h4>
                    <p className="text-gray-600">
                      Having learned everything the hard way, I anticipate problems before they happen and create solutions that just work.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-[#5ac3dd]">Concrete</span> Results
            </h2>
            <p className="text-xl text-gray-600">
              What happens when hunger meets execution
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                metric: "0→100%",
                title: "Client Retention",
                description: "Every first-time client has stayed working with me"
              },
              {
                metric: "5★",
                title: "Average Rating",
                description: "From clients who value my proactive approach"
              },
              {
                metric: "24/7",
                title: "Availability",
                description: "Because I know what it's like to need help urgently"
              }
            ].map((result, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center transition-all duration-300 hover:shadow-md"
              >
                <p className="text-5xl font-bold text-[#5ac3dd] mb-4">{result.metric}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{result.title}</h3>
                <p className="text-gray-600">{result.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 md:py-24 bg-gradient-to-r from-[#5ac3dd] to-[#48a8c1] text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Need Someone Who <span className="underline decoration-white/30">Gets Things Done</span>?
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            I bring the hunger of someone building their dream - let's build yours together.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact" 
              className="bg-white text-[#5ac3dd] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Let's Work Together
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#journey" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300"
            >
              See My Story Again
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;