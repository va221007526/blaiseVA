import { useState } from 'react';
import { FiCheck, FiMail, FiCalendar, FiDatabase, FiLayers, FiPieChart, FiClock, FiUsers, FiTrendingUp } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


const Service = () => {
  const [activeTab, setActiveTab] = useState('virtual-assistant');

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

  const services = {
    'virtual-assistant': {
      title: "Virtual Assistant",
      description: "Comprehensive administrative support to streamline your workflow and boost productivity.",
      icon: <FiUsers className="text-[#5ac3dd] text-2xl" />,
      features: [
        "Email management & inbox organization",
        "Document preparation & formatting",
        "Travel arrangements & itinerary planning",
        "Online research & data gathering",
        "CRM management & client follow-ups",
        "Personal task coordination"
      ],
      benefits: [
        "Regain 10+ hours per week",
        "Never miss important communications",
        "Professional correspondence handling",
        "Systematic organization of your digital life"
      ]
    },
    'admin-support': {
      title: "Admin Support",
      description: "Professional back-office support to keep your business operations running smoothly.",
      icon: <FiLayers className="text-[#5ac3dd] text-2xl" />,
      features: [
        "Document creation & management",
        "Data organization & file management",
        "Appointment scheduling & coordination",
        "Expense reporting & tracking",
        "Database management & cleanup",
        "Process documentation"
      ],
      benefits: [
        "Reduce operational bottlenecks",
        "Maintain impeccable records",
        "Free up time for core business activities",
        "Standardize administrative processes"
      ]
    },
    'data-entry': {
      title: "Data Entry",
      description: "Accurate and efficient data handling to maintain your information ecosystem.",
      icon: <FiDatabase className="text-[#5ac3dd] text-2xl" />,
      features: [
        "Spreadsheet creation & maintenance",
        "Data cleaning & validation",
        "CRM data entry & updates",
        "Survey data processing",
        "Product catalog management",
        "Report generation"
      ],
      benefits: [
        "99.9% accuracy guarantee",
        "Structured, searchable databases",
        "Regular data health checks",
        "Custom reporting formats"
      ]
    },
    'email-calendar': {
      title: "Email & Calendar Management",
      description: "Take control of your communications and schedule with strategic management.",
      icon: <FiCalendar className="text-[#5ac3dd] text-2xl" />,
      features: [
        "Inbox organization & prioritization",
        "Email filtering & labeling systems",
        "Meeting scheduling & coordination",
        "Calendar optimization",
        "Reminder systems setup",
        "Automated response templates"
      ],
      benefits: [
        "Achieve inbox zero regularly",
        "Reduce scheduling conflicts by 80%",
        "Never miss important dates",
        "Professional communication standards"
      ]
    },
    'powerpoint': {
      title: "PowerPoint Presentations",
      description: "Visually compelling presentations that communicate your message effectively.",
      icon: <FiPieChart className="text-[#5ac3dd] text-2xl" />,
      features: [
        "Professional slide deck creation",
        "Data visualization & infographics",
        "Brand-aligned templates",
        "Speaker notes preparation",
        "Animation & transition effects",
        "Print-ready handout preparation"
      ],
      benefits: [
        "Elevate your professional image",
        "Communicate complex ideas simply",
        "Save 5+ hours per presentation",
        "Consistent branding across materials"
      ]
    }
  };

  const testimonials = [
    {
      quote: "Blaise completely transformed my chaotic inbox into a well-oiled system. I get to important emails 3x faster now!",
      name: "Sarah K., Entrepreneur",
      service: "Email Management"
    },
    {
      quote: "The presentations Blaise creates get compliments every time. Our investors said it was the clearest pitch deck they'd seen.",
      name: "David T., Startup Founder",
      service: "PowerPoint Design"
    },
    {
      quote: "I've worked with 3 VAs before finding Blaise. The attention to detail and proactive thinking is unmatched.",
      name: "Marie L., Consultant",
      service: "Virtual Assistance"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#5ac3dd]/10 to-white py-28 md:py-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-[#5ac3dd]">Specialized Services</span> for<br />
              Your <span className="underline decoration-[#5ac3dd]/30">Productivity Needs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional support that adapts to your workflow, so you can focus on what truly matters in your business.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services" 
              className="inline-block bg-[#5ac3dd] hover:bg-[#48a8c1] text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all duration-300"
            >
              Explore My Services
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section id="services" className="py-16 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {Object.keys(services).map((serviceKey) => (
              <motion.button
                key={serviceKey}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                onClick={() => setActiveTab(serviceKey)}
                className={`px-5 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === serviceKey
                    ? 'bg-[#5ac3dd] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {services[serviceKey].icon}
                {services[serviceKey].title}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Active Service Display */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          >
            <div className="lg:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#5ac3dd]/10 p-3 rounded-full">
                    {services[activeTab].icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{services[activeTab].title}</h2>
                </div>
                
                <p className="text-gray-600 text-lg mb-8">{services[activeTab].description}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FiCheck className="text-[#5ac3dd]" />
                    What's Included
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FiCheck className="text-[#5ac3dd] mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FiTrendingUp className="text-[#5ac3dd]" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {services[activeTab].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="bg-[#5ac3dd]/10 p-1 rounded-full">
                          <FiCheck className="text-[#5ac3dd] text-sm" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="sticky top-28"
              >
                <div className="bg-gradient-to-br from-[#5ac3dd] to-[#48a8c1] rounded-xl shadow-xl overflow-hidden">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Ready to delegate?</h3>
                    <p className="mb-6 opacity-90">Let's discuss how I can support your specific needs.</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <FiClock className="text-white opacity-90" />
                        <span>Typically responds within 2 hours</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FiCheck className="text-white opacity-90" />
                        <span>Custom solutions available</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <FiCheck className="text-white opacity-90" />
                        <span>Flexible engagement models</span>
                      </div>
                    </div>
                    
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="/contact"
                      className="inline-block bg-white text-[#5ac3dd] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 w-full text-center"
                    >
                      Get Started
                    </motion.a>
                  </div>
                  
                  <div className="bg-white/10 p-6">
                    <h4 className="font-medium text-white mb-4">What clients say about this service:</h4>
                    <div className="space-y-4">
                      {testimonials
                        .filter(t => t.service === services[activeTab].title || 
                                    (services[activeTab].title === "Virtual Assistant" && t.service === "Virtual Assistance"))
                        .map((testimonial, index) => (
                          <div key={index} className="bg-white/10 p-4 rounded-lg border border-white/20">
                            <p className="italic mb-2">"{testimonial.quote}"</p>
                            <p className="text-white/90 font-medium">— {testimonial.name}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-[#5ac3dd]">Working</span> Process
            </h2>
            <p className="text-xl text-gray-600">
              Clear steps to ensure seamless collaboration and outstanding results
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We discuss your needs and define project scope",
                icon: <FiMail className="text-[#5ac3dd] text-xl" />
              },
              {
                step: "02",
                title: "Onboarding",
                description: "Access sharing & tool setup for seamless work",
                icon: <FiCheck className="text-[#5ac3dd] text-xl" />
              },
              {
                step: "03",
                title: "Execution",
                description: "Regular updates with opportunities for feedback",
                icon: <FiClock className="text-[#5ac3dd] text-xl" />
              },
              {
                step: "04",
                title: "Delivery",
                description: "Final review and process optimization",
                icon: <FiTrendingUp className="text-[#5ac3dd] text-xl" />
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center transition-all duration-300 hover:border-[#5ac3dd]/50 hover:shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-[#5ac3dd]/10 text-[#5ac3dd] flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <div className="bg-white p-3 rounded-full inline-flex mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#5ac3dd] to-[#48a8c1]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to <span className="underline decoration-white/30">Multiply Your Productivity</span>?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you reclaim time and reduce operational stress.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact" 
                className="bg-white text-[#5ac3dd] hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Get Started Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Service;