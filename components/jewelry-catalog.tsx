"use client";
import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const JewelryCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: "Colar Veneziano Folheado",
      image: "/joias/brinco.jpg",
      category: "Colares"
    },
    {
      id: 2,
      name: "Brinco Gota Cristal",
      image: "/joias/brinco2.jpg",
      category: "Brincos"
    },
    {
      id: 3,
      name: "Anel Solitário",
      image: "/joias/coracao.jpg",
      category: "Anéis"
    }
  ];

  const categories = useMemo(() => 
    Array.from(new Set(products.map(p => p.category))),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <div className="flex-1 py-6 xl:py-10">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center justify-between p-4 backdrop-blur-sm bg-white/60 dark:bg-neutral-950/60 rounded-xl">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 focus:outline-none"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark rounded-lg"
          >
            <Filter size={18} />
            <span>Filtrar</span>
          </button>
        </div>

        {showFilters && (
          <div className="p-4 bg-white dark:bg-neutral-900 rounded-xl">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === '' 
                    ? 'bg-primary text-white' 
                    : 'bg-neutral-100 dark:bg-neutral-800'
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category 
                      ? 'bg-primary text-white' 
                      : 'bg-neutral-100 dark:bg-neutral-800'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform">
            <Link href={`/produto/${product.id}`}>
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-xs text-neutral-500 mb-1">{product.category}</div>
                <h3 className="font-medium">{product.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-8 text-neutral-500">
          Nenhum produto encontrado
        </div>
      )}
    </div>
  );
};

export default JewelryCatalog;