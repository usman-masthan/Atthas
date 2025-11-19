import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">
              Attha's
            </h3>
            <p className="text-gray-300 mb-4">
              Experience culinary excellence in a refined atmosphere. Where every dish tells a story of tradition and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-gray-300 hover:text-gold transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Culinary Boulevard<br />
                  Gourmet District, GD 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-gold transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@atthas.com" className="text-gray-300 hover:text-gold transition-colors">
                  info@atthas.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p className="font-semibold">Monday - Thursday</p>
                  <p>5:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 ml-8">
                <div className="text-gray-300">
                  <p className="font-semibold">Friday - Saturday</p>
                  <p>5:00 PM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 ml-8">
                <div className="text-gray-300">
                  <p className="font-semibold">Sunday</p>
                  <p>4:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Attha's Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
