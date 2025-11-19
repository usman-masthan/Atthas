'use client';

import { motion } from 'framer-motion';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  category?: string;
  isSpecial?: boolean;
}

const MenuCard = ({ name, description, price, category, isSpecial = false }: MenuCardProps) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-warmgray"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-xl font-serif font-bold text-primary">{name}</h3>
            {isSpecial && (
              <span className="text-xs bg-maroon text-white px-2 py-1 rounded-full font-semibold">
                Special
              </span>
            )}
          </div>
          {category && (
            <span className="inline-block text-xs text-olive font-semibold uppercase tracking-wide mb-2">
              {category}
            </span>
          )}
        </div>
        <span className="text-2xl font-bold text-gold ml-4">{price}</span>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default MenuCard;
