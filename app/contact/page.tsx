'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section bgColor="primary" className="text-white text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Contact <span className="text-gold">Us</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </Section>

        {/* Contact Info & Form */}
        <Section bgColor="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have a question about our menu, want to make a reservation, or 
                are interested in hosting a private event, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-1">Location</h3>
                    <p className="text-gray-600">
                      123 Culinary Boulevard<br />
                      Gourmet District, GD 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-gold transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-1">Email</h3>
                    <a href="mailto:info@atthas.com" className="text-gray-600 hover:text-gold transition-colors">
                      info@atthas.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p><span className="font-semibold">Mon - Thu:</span> 5:00 PM - 10:00 PM</p>
                      <p><span className="font-semibold">Fri - Sat:</span> 5:00 PM - 11:00 PM</p>
                      <p><span className="font-semibold">Sunday:</span> 4:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="event">Private Event</option>
                    <option value="feedback">Feedback</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Section>

        {/* Map Section */}
        <Section bgColor="warmgray">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Find Us
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="w-full h-96 bg-gradient-to-br from-olive/20 to-gold/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-olive/40 mx-auto mb-4" />
              <p className="text-2xl font-serif text-olive/60">Interactive Map Placeholder</p>
              <p className="text-gray-600 mt-2">123 Culinary Boulevard, Gourmet District</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
