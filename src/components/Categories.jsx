import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Watches', img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Handbags', img: 'https://images.unsplash.com/photo-1611672585731-c7cd89374f01?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Sneakers', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Tech & Audio', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Jewelry', img: 'https://images.unsplash.com/photo-1515560570411-00a0026e6082?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Apparel', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop' },
];

function CategoryCard({ c }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.25)]"
    >
      <div className="relative h-48 sm:h-56">
        <img src={c.img} alt={c.name} className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-end p-4">
        <div className="rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 px-3 py-2">
          <p className="text-white font-medium">{c.name}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Shop by Category</h2>
            <p className="mt-2 text-white/70">Discover curated collections from verified sellers.</p>
          </div>
          <button className="hidden sm:inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-xl hover:bg-white/15">View All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((c, i) => (
            <CategoryCard key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
