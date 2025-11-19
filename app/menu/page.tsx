import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import MenuCard from '@/components/MenuCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Menu - Attha's Restaurant",
  description: "Explore our exquisite menu featuring fine dining dishes crafted with the finest ingredients",
};

export default function MenuPage() {
  const menuCategories = [
    {
      category: 'Appetizers',
      dishes: [
        {
          name: 'French Onion Soup',
          description: 'Classic soup with caramelized onions, Gruyère cheese, and toasted bread',
          price: '$14',
          category: 'Appetizers',
        },
        {
          name: 'Seared Scallops',
          description: 'Pan-seared scallops with cauliflower purée and microgreens',
          price: '$18',
          category: 'Appetizers',
        },
        {
          name: 'Burrata Caprese',
          description: 'Fresh burrata, heirloom tomatoes, basil, and aged balsamic',
          price: '$16',
          category: 'Appetizers',
        },
      ],
    },
    {
      category: 'Main Courses',
      dishes: [
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
          name: 'Beef Wellington',
          description: 'Prime beef tenderloin wrapped in puff pastry with mushroom duxelles',
          price: '$52',
          category: 'Main Course',
        },
        {
          name: 'Duck Confit',
          description: 'Crispy duck leg with orange glaze, roasted root vegetables',
          price: '$44',
          category: 'Main Course',
        },
        {
          name: 'Lobster Thermidor',
          description: 'Whole lobster in creamy brandy sauce with parmesan crust',
          price: '$58',
          category: 'Seafood',
          isSpecial: true,
        },
      ],
    },
    {
      category: 'Vegetarian',
      dishes: [
        {
          name: 'Truffle Risotto',
          description: 'Creamy Arborio rice with black truffle, parmesan, and mushroom medley',
          price: '$38',
          category: 'Vegetarian',
        },
        {
          name: 'Eggplant Parmigiana',
          description: 'Layered eggplant with marinara, mozzarella, and fresh basil',
          price: '$34',
          category: 'Vegetarian',
        },
        {
          name: 'Wild Mushroom Ravioli',
          description: 'Handmade ravioli with porcini cream sauce and truffle oil',
          price: '$36',
          category: 'Vegetarian',
        },
      ],
    },
    {
      category: 'Desserts',
      dishes: [
        {
          name: 'Crème Brûlée',
          description: 'Classic vanilla custard with caramelized sugar crust',
          price: '$12',
          category: 'Desserts',
        },
        {
          name: 'Chocolate Lava Cake',
          description: 'Warm chocolate cake with molten center, vanilla ice cream',
          price: '$14',
          category: 'Desserts',
        },
        {
          name: 'Tiramisu',
          description: 'Traditional Italian dessert with espresso-soaked ladyfingers',
          price: '$13',
          category: 'Desserts',
        },
        {
          name: 'Berry Tart',
          description: 'Buttery pastry shell with vanilla cream and fresh seasonal berries',
          price: '$13',
          category: 'Desserts',
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <Section bgColor="primary" className="text-white text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our <span className="text-gold">Menu</span>
          </h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our exquisite selection of dishes, each crafted with passion and the finest ingredients
          </p>
        </Section>

        {/* Menu Categories */}
        {menuCategories.map((section, index) => (
          <Section 
            key={section.category} 
            bgColor={index % 2 === 0 ? 'white' : 'warmgray'}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">
                {section.category}
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {section.dishes.map((dish, dishIndex) => (
                <MenuCard key={dishIndex} {...dish} />
              ))}
            </div>
          </Section>
        ))}

        {/* Call to Action */}
        <Section bgColor="primary" className="text-white text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Dine with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Reserve your table now and experience the finest in culinary excellence
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
