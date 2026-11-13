import React from 'react';
import {
  Laptop,
  Armchair,
  BookOpen,
  Shirt,
  Refrigerator,
  Dumbbell,
  ArrowUpRight
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: Laptop,
    description: 'Computers, phones, audio gear, cables & gaming accessories ready for a second owner.',
    itemCount: '340+ items',
    color: 'from-purple-500/10 to-indigo-500/10',
    iconColor: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: Armchair,
    description: 'Desks, ergonomic chairs, bookshelves, tables, and home accents in solid condition.',
    itemCount: '215+ items',
    color: 'from-amber-500/10 to-orange-500/10',
    iconColor: 'text-amber-700',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'books',
    name: 'Books',
    icon: BookOpen,
    description: 'Academic textbooks, competitive exam guides, classic fiction & reference literature.',
    itemCount: '580+ items',
    color: 'from-emerald-500/10 to-teal-500/10',
    iconColor: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'clothing',
    name: 'Clothing',
    icon: Shirt,
    description: 'Gently used apparel, winter coats, jackets, athletic wear, and vintage wardrobe staples.',
    itemCount: '490+ items',
    color: 'from-pink-500/10 to-rose-500/10',
    iconColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    id: 'home-appliances',
    name: 'Home Appliances',
    icon: Refrigerator,
    description: 'Microwaves, coffee makers, blenders, vacuum cleaners, and kitchen utilities.',
    itemCount: '175+ items',
    color: 'from-cyan-500/10 to-blue-500/10',
    iconColor: 'text-cyan-700',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'sports-equipment',
    name: 'Sports Equipment',
    icon: Dumbbell,
    description: 'Bicycles, dumbbells, yoga mats, camping gear, tennis rackets & fitness accessories.',
    itemCount: '190+ items',
    color: 'from-purple-500/10 to-brand-primary/10',
    iconColor: 'text-brand-primary',
    bgColor: 'bg-purple-50',
  },
];

export const Categories = () => {
  return (
    <section id="explore" className="py-16 sm:py-24 bg-white/60 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-secondary-subtle px-3 py-1 rounded-full">
            Browse by Category
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            Curated Categories for Every Need
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Discover thousands of reusable items shared by people in your area.
            Choose a category to find products for purchase, free donation, or direct barter.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative bg-white p-7 rounded-3xl border border-brand-border hover:border-brand-primary/40 shadow-card hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${cat.bgColor} flex items-center justify-center ${cat.iconColor} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold text-brand-muted bg-brand-background px-3 py-1 rounded-full border border-brand-border">
                      {cat.itemCount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-text group-hover:text-brand-primary transition-colors">
                    {cat.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-primary flex items-center gap-1 group-hover:underline">
                    View listings
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-background flex items-center justify-center text-brand-muted group-hover:bg-brand-primary group-hover:text-white transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Categories;
