import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiMenu, 
  FiX,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiFacebook
} from 'react-icons/fi';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Social media links data
  const socialLinks = [
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/aime-blaise-iradukunda-b0a657376", label: "LinkedIn" },
    { icon: <FiInstagram />, url: "https://www.instagram.com/blaiseva1/", label: "Instagram" },
    { icon: <FiTwitter />, url: "https://x.com/blaiseva1", label: "Twitter" },
    { icon: <FiFacebook />, url: "https://facebook.com", label: "Facebook" }
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-[#5ac3dd] hover:text-[#48a8c1] transition-colors"
            aria-label="Blaise Home"
          >
            blaise<span className="text-[#5ac3dd] text-2xl font-bold">VA</span>
          </Link>
          
          {/* Desktop Navigation with Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-1 py-2 font-medium transition-colors ${location.pathname === item.path ? 'text-[#5ac3dd]' : 'text-gray-600 hover:text-[#5ac3dd]'}`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5ac3dd] rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="border-l border-gray-200 pl-6 ml-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#5ac3dd] transition-colors p-1.5 rounded-full hover:bg-[#5ac3dd]/10"
                  aria-label={`Visit our ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#5ac3dd] focus:outline-none focus:ring-2 focus:ring-[#5ac3dd] focus:ring-opacity-50 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-3 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === item.path ? 'bg-[#5ac3dd]/10 text-[#5ac3dd]' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-6 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#5ac3dd] transition-colors p-2 rounded-full hover:bg-[#5ac3dd]/10"
                  aria-label={`Visit our ${social.label}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;