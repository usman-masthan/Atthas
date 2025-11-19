import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import type { Metadata } from 'next';
import { Award, Users, Heart, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Us - Attha's Restaurant",
  description: "Learn about Attha's history, our commitment to culinary excellence, and the passion behind every dish",
};

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue perfection in every dish, every service, every moment',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with our guests and local suppliers',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for food and hospitality drives everything we do',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and supporting local farmers',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section bgColor="primary" className="text-white text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            About <span className="text-gold">Attha's</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A legacy of culinary excellence spanning nearly three decades
          </p>
        </Section>

        {/* Story Section */}
        <Section bgColor="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gradient-to-br from-olive/30 to-gold/30 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-olive/20 font-serif text-8xl font-bold">
                1995
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                Our <span className="text-gold">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 1995, Attha's began with a simple vision: to create an extraordinary 
                dining experience that celebrates the art of fine cuisine. What started as a small 
                family restaurant has grown into a beloved culinary destination, yet we've never 
                lost sight of our roots.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our founder, Chef Attha, brought together time-honored recipes passed down through 
                generations with innovative culinary techniques learned from training in renowned 
                kitchens across the world. This unique blend of tradition and innovation remains at 
                the heart of everything we do.
              </p>
              <p className="text-lg text-gray-600">
                Today, under the guidance of our talented culinary team, we continue to push 
                boundaries while honoring the classics, ensuring every guest experiences the passion 
                and dedication that defines Attha's.
              </p>
            </div>
          </div>
        </Section>

        {/* Philosophy Section */}
        <Section bgColor="warmgray">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                Our <span className="text-gold">Philosophy</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At Attha's, we believe that exceptional dining is about more than just food—it's 
                about creating moments that last a lifetime. Every ingredient is carefully selected, 
                every dish thoughtfully prepared, and every detail meticulously considered.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We work closely with local farmers and artisans who share our commitment to quality 
                and sustainability. This not only ensures the freshest ingredients but also supports 
                our community and reduces our environmental impact.
              </p>
              <p className="text-lg text-gray-600">
                Our philosophy extends beyond the plate. We strive to create an atmosphere of warmth 
                and elegance where every guest feels valued and every occasion feels special.
              </p>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-maroon/20 to-olive/20 rounded-lg overflow-hidden order-1 lg:order-2">
              <div className="absolute inset-0 flex items-center justify-center text-maroon/20 font-serif text-6xl font-bold">
                Excellence
              </div>
            </div>
          </div>
        </Section>

        {/* Values Section */}
        <Section bgColor="primary" className="text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our <span className="text-gold">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Team Section */}
        <Section bgColor="white">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Meet Our <span className="text-gold">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind your dining experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Chef Michael Rodriguez', role: 'Executive Chef', specialty: 'Modern French Cuisine' },
              { name: 'Sarah Chen', role: 'Pastry Chef', specialty: 'Artisan Desserts' },
              { name: 'James Thompson', role: 'Head Sommelier', specialty: 'Wine Pairing Expert' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-olive/30 to-gold/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-olive/40 font-serif text-5xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-gold font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.specialty}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section bgColor="warmgray" className="text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Experience Attha's
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience
          </p>
          <a
            href="/reservations"
            className="inline-block bg-gold text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-all duration-300"
          >
            Make a Reservation
          </a>
        </Section>
      </main>
      <Footer />
    </>
  );
}
