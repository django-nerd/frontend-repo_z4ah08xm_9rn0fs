import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Truck, Wallet } from 'lucide-react';

const features = [
  {
    title: 'Store Credits',
    desc: 'Earn 10% credits on purchases over $50. Withdraw after a year or use instantly.',
    icon: CreditCard,
    glow: 'from-amber-400/30 to-yellow-300/30',
  },
  {
    title: 'Secure Trading',
    desc: 'Verified sellers & buyer protection with dispute resolution.',
    icon: ShieldCheck,
    glow: 'from-emerald-400/25 to-teal-300/25',
  },
  {
    title: 'Flexible Delivery',
    desc: 'Pickup, standard, or urgent delivery options worldwide.',
    icon: Truck,
    glow: 'from-sky-400/25 to-indigo-300/25',
  },
  {
    title: 'Multiple Payments',
    desc: 'Bank transfer, cash, or store credits — you choose.',
    icon: Wallet,
    glow: 'from-violet-400/25 to-fuchsia-300/25',
  },
];

function FeatureCard({ item, i }) {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl text-white shadow-[0_10px_50px_rgba(0,0,0,0.25)]"
    >
      <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-30 transition-opacity`} />
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 border border-white/10">
          <Icon className="h-6 w-6 text-amber-200" />
        </div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm text-white/70">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Built for Luxury, Designed for Trust</h2>
          <p className="mt-2 text-white/70">Glowing micro-interactions, rigorous security, and seamless shopping.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} item={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
