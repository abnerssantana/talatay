import React from 'react';
import { Heart, Search, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const JewelryCatalog = () => {
  const products = [
    {
      id: 1,
      name: "Colar Veneziano Folheado",
      price: "R$ 89,90",
      image: "/api/placeholder/400/400",
      category: "Colares"
    },
    {
      id: 2,
      name: "Brinco Gota Cristal",
      price: "R$ 59,90",
      image: "/api/placeholder/400/400",
      category: "Brincos"
    }
    // Add more products as needed
  ];

  return (
    <div className="flex-1 py-6 xl:py-10">
      {/* Search and Filter Bar */}
      <div className="flex items-center justify-between mb-8 p-4 bg-white dark:bg-neutral-900 rounded-xl">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
          <input 
            type="text"
            placeholder="Buscar produtos..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark rounded-lg">
          <Filter size={18} />
          <span>Filtrar</span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform">
            <Link href={`/produto/${product.id}`}>
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-4">
                <div className="text-xs text-neutral-500 mb-1">{product.category}</div>
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="text-lg font-semibold text-primary">{product.price}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryCatalog;