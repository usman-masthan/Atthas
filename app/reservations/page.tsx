'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { Calendar, Clock, Users, Phone, Mail } from 'lucide-react';

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation submitted:', formData);
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            Make a <span className="text-gold">Reservation</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience
          </p>
        </Section>

        {/* Reservation Form */}
        <Section bgColor="white">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                  Reservation Details
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                        Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="occasion" className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Occasion (Optional)
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    >
                      <option value="">Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="proposal">Proposal</option>
                      <option value="other">Other Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                      placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-all duration-300"
                  >
                    Submit Reservation
                  </button>
                </form>
              </div>

              {/* Info Sidebar */}
              <div className="space-y-6">
                <div className="bg-warmgray p-6 rounded-lg">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                    Reservation Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Advance Booking</p>
                        <p className="text-gray-600">We recommend booking at least 2 days in advance</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Dining Duration</p>
                        <p className="text-gray-600">Tables are reserved for 2 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-800">Large Parties</p>
                        <p className="text-gray-600">For parties of 8+, please call us directly</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-serif font-bold text-gold mb-4">
                    Contact Us
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                      <a href="tel:+1234567890" className="hover:text-gold transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                      <a href="mailto:reservations@atthas.com" className="hover:text-gold transition-colors">
                        reservations@atthas.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-olive/10 p-6 rounded-lg border-2 border-olive">
                  <h3 className="text-xl font-serif font-bold text-olive mb-3">
                    Cancellation Policy
                  </h3>
                  <p className="text-gray-700">
                    Please notify us at least 24 hours in advance if you need to cancel or 
                    modify your reservation. Same-day cancellations may incur a fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
