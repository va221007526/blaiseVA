import { useState, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiClock } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import hero from './assets/poo.jpg';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',  // Changed to match EmailJS template
    user_email: '', // Changed to match EmailJS template
    user_phone: '', // Changed to match EmailJS template
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.user_name || !formData.user_email || !formData.service || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await emailjs.sendForm(
        'service_18ms9tx',
        'template_w23in9p',
        form.current,
        'C-ub0KH5Z0tBm3fOa'
      );

      setSubmitted(true);
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        service: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    'Email Management',
    'Calendar Scheduling',
    'Data Entry',
    'Admin Tasks',
    'PowerPoint Design',
    'Other'
  ];

  const workingHours = [
    { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', icon: <FiClock className="text-[#5ac3dd]" /> },
    { days: 'Saturday', hours: '10:00 AM - 3:00 PM', icon: <FiClock className="text-[#5ac3dd]" /> },
    { days: 'Sunday', hours: 'Closed', icon: <FiClock className="text-red-300" />, isClosed: true }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={hero} 
          alt="Professional workspace background"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#5ac3dd]/90 to-[#48a8c1]/90 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 py-20 md:py-28 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Let's <span className="text-white underline decoration-[#5ac3dd] decoration-4 underline-offset-8">Connect</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Have questions about our virtual assistant services? We're here to help you focus on what matters most.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
            {/* Contact Form Card */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 border border-white/30 backdrop-blur-sm bg-white/95 hover:shadow-xl transition-shadow duration-300">
                {submitted ? (
                  <div className="text-center py-10 animate-fade-in">
                    <div className="inline-flex items-center justify-center bg-[#5ac3dd]/10 p-4 rounded-full mb-4">
                      <FiCheckCircle className="text-[#5ac3dd] text-4xl" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      We've received your inquiry and will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-[#5ac3dd] hover:bg-[#48a8c1] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5ac3dd] focus:ring-opacity-50"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="animate-fade-in-up">
                    {error && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-red-700">{error}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label htmlFor="user_name" className="block text-gray-700 font-medium">
                          Full Name <span className="text-[#5ac3dd]">*</span>
                        </label>
                        <input
                          type="text"
                          id="user_name"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ac3dd] focus:border-[#5ac3dd] outline-none transition-all duration-200"
                          placeholder="Your name please"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="user_email" className="block text-gray-700 font-medium">
                          Email Address <span className="text-[#5ac3dd]">*</span>
                        </label>
                        <input
                          type="email"
                          id="user_email"
                          name="user_email"
                          value={formData.user_email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ac3dd] focus:border-[#5ac3dd] outline-none transition-all duration-200"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label htmlFor="user_phone" className="block text-gray-700 font-medium">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="user_phone"
                          name="user_phone"
                          value={formData.user_phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ac3dd] focus:border-[#5ac3dd] outline-none transition-all duration-200"
                          placeholder="eg: +250 786 065 249"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-gray-700 font-medium">
                          Service Needed <span className="text-[#5ac3dd]">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ac3dd] focus:border-[#5ac3dd] outline-none transition-all duration-200 appearance-none bg-white bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1YWMzZGQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im03IDEwIDUgNSA1LTUiLz48L3N2Zz4=')] bg-no-repeat bg-[center_right_1rem]"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-8 space-y-2">
                      <label htmlFor="message" className="block text-gray-700 font-medium">
                        Your Message <span className="text-[#5ac3dd]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5ac3dd] focus:border-[#5ac3dd] outline-none transition-all duration-200"
                        placeholder="Tell us about your needs..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`group bg-[#5ac3dd] hover:bg-[#48a8c1] text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 justify-center w-full shadow-lg hover:shadow-[#5ac3dd]/40 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[#5ac3dd] focus:ring-opacity-50 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Message <FiSend className="mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="lg:w-1/2 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="space-y-8 h-full flex flex-col">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Contact Details</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">
                      Reach out through any channel that works best for you. We're available to discuss how we can support your business needs.
                    </p>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200">
                      <div className="bg-white/20 p-3 rounded-full text-white flex-shrink-0">
                        <FiMail size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Email Us</h4>
                        <a 
                          href="mailto:blaiseiradukunda001@gmail.com" 
                          className="text-white/90 hover:text-white transition-colors duration-200"
                        >
                          blaiseiradukunda001@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200">
                      <div className="bg-white/20 p-3 rounded-full text-white flex-shrink-0">
                        <FiPhone size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Call Us</h4>
                        <a 
                          href="tel:+250786065249" 
                          className="text-white/90 hover:text-white transition-colors duration-200"
                        >
                          +250 786 065 249
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200">
                      <div className="bg-white/20 p-3 rounded-full text-white flex-shrink-0">
                        <FiMapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Our Office</h4>
                        <p className="text-white/90">
                          KG 541 St, Gikondo<br />
                          Kigali, Rwanda
                        </p>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="bg-white/10 rounded-xl p-6 border border-white/20 mt-auto">
                      <div className="flex items-center gap-3 mb-4">
                        <FiClock className="text-[#5ac3dd] text-xl" />
                        <h4 className="font-bold text-white">Working Hours</h4>
                      </div>
                      <div className="space-y-3">
                        {workingHours.map((item, index) => (
                          <div 
                            key={index} 
                            className={`flex justify-between items-center py-2 ${index < workingHours.length - 1 ? 'border-b border-white/10' : ''}`}
                          >
                            <div className="flex items-center gap-2">
                              {item.icon}
                              <span className={item.isClosed ? 'text-red-300' : 'text-white/90'}>
                                {item.days}
                              </span>
                            </div>
                            <span className={`font-medium ${item.isClosed ? 'text-red-300' : 'text-white/90'}`}>
                              {item.hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;