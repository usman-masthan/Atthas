import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import MenuCard from '@/components/MenuCard';
import { ChefHat, Award, Users, Clock } from 'lucide-react';

export default function Home() {
  const featuredDishes = [
    {
      name: 'Herb-Crusted Lamb Rack',
      description: 'Tender lamb rack with rosemary crust, garlic mashed potatoes, and seasonal vegetables',
      price: '$48',
      category: 'Main Course',
      isSpecial: true,
    },
    {
      name: 'Pan-Seared Sea Bass',
      description: 'Fresh Atlantic sea bass with lemon butter sauce, asparagus, and wild rice',
      price: '$42',
      category: 'Seafood',
    },
    {
      name: 'Truffle Risotto',
      description: 'Creamy Arborio rice with black truffle, parmesan, and mushroom medley',
      price: '$38',
      category: 'Vegetarian',
    },
  ];

  const features = [
    {
      icon: ChefHat,
      title: 'Master Chefs',
      description: 'Award-winning culinary experts with decades of experience',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest ingredients sourced from local farms',
    },
    {
      icon: Users,
      title: 'Private Events',
      description: 'Exclusive dining experiences for special occasions',
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'Exceptional service delivered with perfect timing',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Featured Dishes */}
        <Section bgColor="warmgray">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Featured Dishes
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our chef's carefully curated selection of signature dishes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredDishes.map((dish, index) => (
              <MenuCard key={index} {...dish} />
            ))}
          </div>
        </Section>

        {/* About Preview */}
        <Section bgColor="white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                A Culinary Journey
                <br />
                <span className="text-gold">Since 1995</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Attha's, we believe dining is more than just a meal—it's an experience. 
                For nearly three decades, we've been crafting unforgettable moments through 
                exceptional cuisine, warm hospitality, and an ambiance that celebrates the 
                art of fine dining.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence is reflected in every dish we serve, using only 
                the freshest ingredients and time-honored techniques passed down through 
                generations of master chefs.
              </p>
              <a
                href="/about"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                Our Story
              </a>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-olive/20 to-gold/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-olive/30 font-serif text-6xl">
                Attha's
              </div>
            </div>
          </div>
        </Section>

        {/* Features */}
        <Section bgColor="primary" className="text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose <span className="text-gold">Attha's</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Call to Action */}
        <Section bgColor="warmgray">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Reserve Your Table Today
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience the finest in culinary excellence. Book your reservation now and 
              let us create an unforgettable dining experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservations"
                className="bg-gold text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/90 transition-all duration-300"
              >
                Make a Reservation
              </a>
              <a
                href="tel:+1234567890"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

