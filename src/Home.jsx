import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import hero from './assets/poo.jpg';
import { FiMail, FiPhone, FiClock } from 'react-icons/fi';
import About from './About';
import Service from './Services';
import Contact from './Contact';
const Home = () => {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-14 md:mb-0 md:pr-12 lg:pr-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
            Your <span className="text-[#5ac3dd]">Virtual Assistant</span><br className="hidden md:block"/>
            For Stress-Free Productivity
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            Professional email management, calendar scheduling, data entry,
            admin tasks, and PowerPoint presentation design — tailored to help entrepreneurs and teams stay organized, focused, and stress-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="group bg-[#5ac3dd] hover:bg-[#48a8c1] text-white px-8 py-4 rounded-lg font-medium transition-all flex items-center gap-2 justify-center text-lg shadow-lg hover:shadow-[#5ac3dd]/40 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[#5ac3dd] focus:ring-opacity-50"
              aria-label="Get started with our virtual assistant services"
            >
              Get Started <FiArrowRight className="mt-0.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Animated Circular Image */}
        <div className="md:w-1/2 relative">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
            {/* Animated border elements */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#5ac3dd] border-r-[#5ac3dd] animate-spin-slow z-0 opacity-70"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-[#5ac3dd] border-l-[#5ac3dd] animate-spin-slow-reverse z-0 opacity-70"></div>
            <div className="absolute inset-0 rounded-full border-4 border-[#5ac3dd] z-0"></div>
            
            <img 
              src={hero} 
              alt="Professional Virtual Assistant"
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-xl z-10 hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
              width={400}
              height={400}
            />
          </div>
          
          {/* Trust Badge */}
          <div className="bg-white shadow-md rounded-full py-3 px-6 absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20 border border-gray-100 flex items-center gap-2">
            <FiCheckCircle className="text-[#5ac3dd]" />
            <p className="font-medium text-gray-700 text-sm whitespace-nowrap">
              Trusted by <span className="text-[#5ac3dd] font-bold">50+</span> clients
            </p>
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes to your global CSS */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 10s linear infinite;
        }
      `}</style>

       
      


      {/* Support/Connect Section */}
<section className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Need <span className="text-[#5ac3dd]">Immediate Support</span>?
      </h2>
      <p className="text-xl text-gray-600">
        We're here to help you get started or answer any questions.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <div className="bg-[#5ac3dd]/10 p-3 rounded-full inline-flex mb-4">
          <FiMail className="text-[#5ac3dd] text-xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
        <p className="text-gray-600 mb-4">Get a response within 2 hours during business days</p>
        <a 
          href="mailto:blaiseiradukunda001@gmail.com" 
          className="text-[#5ac3dd] hover:text-[#48a8c1] font-medium transition-colors"
        >
          blaiseiradukunda001@gmail.com
        </a>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <div className="bg-[#5ac3dd]/10 p-3 rounded-full inline-flex mb-4">
          <FiPhone className="text-[#5ac3dd] text-xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
        <p className="text-gray-600 mb-4">Available Monday-Friday, 9AM-6PM Rwanda time</p>
        <a 
          href="tel:+250786065249" 
          className="text-[#5ac3dd] hover:text-[#48a8c1] font-medium transition-colors"
        >
          +250 786 065 249
        </a>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <div className="bg-[#5ac3dd]/10 p-3 rounded-full inline-flex mb-4">
          <FiClock className="text-[#5ac3dd] text-xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Chat</h3>
        <p className="text-gray-600 mb-4">Schedule a 15-minute discovery call at your convenience</p>
        <a 
          href="/contact" 
          className="inline-block bg-[#5ac3dd] hover:bg-[#48a8c1] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
        >
          Book a Call
        </a>
      </div>
    </div>
  </div>
</section>

      <About />
      <Service />
      <Contact/>




</section>
  );


};

export default Home;