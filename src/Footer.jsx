import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiLinkedin />, url: "https://linkedin.com/in/aime-blaise-iradukunda-b0a657376", label: "LinkedIn" },
    { icon: <FiInstagram />, url: "https://www.instagram.com/blaiseva1/", label: "Instagram" },
    { icon: <FiTwitter />, url: "https://x.com/blaiseva1", label: "Twitter" },
    { icon: <FiFacebook />, url: "https://facebook.com", label: "Facebook" }
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-[#5ac3dd] mb-4">
              blaise<span className="text-white">VA</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional virtual assistance services to help entrepreneurs and businesses stay organized, focused, and productive.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#5ac3dd] transition-colors p-2 rounded-full hover:bg-gray-800"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-[#5ac3dd] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMail className="text-[#5ac3dd] mt-1" />
                <a href="mailto:blaiseiradukunda001@gmail.com" className="text-gray-400 hover:text-[#5ac3dd] transition-colors">
                  blaiseiradukunda001@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-[#5ac3dd] mt-1" />
                <a href="tel:+250786065249" className="text-gray-400 hover:text-[#5ac3dd] transition-colors">
                  +250 786 065 249
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#5ac3dd] mt-1" />
                <span className="text-gray-400">
                  KG 541 St, Gikondo<br />
                  Kigali, Rwanda
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Blaise Virtual Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;