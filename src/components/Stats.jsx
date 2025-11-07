import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Users, Package, ShieldCheck } from 'lucide-react';

function Counter({ to, label, icon: Icon }) {
  const controls = useAnimation();
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200; // ms
    const start = performance.now();
    const from = 0;
    const animate = (t) => {
      const progress = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(from + (to - from) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [isInView, to, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 10 }} animate={controls} className="flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 text-center text-white">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-white/10 to-white/0 border border-white/10">
        <Icon className="h-6 w-6 text-amber-200" />
      </div>
      <div className="text-3xl sm:text-4xl font-semibold tracking-tight">
        {value.toLocaleString()}+
      </div>
      <div className="mt-1 text-sm sm:text-base text-white/70">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-transparent to-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Counter to={50000} label="Active Users" icon={Users} />
          <Counter to={1000000} label="Products Sold" icon={Package} />
          <Counter to={99} label="Satisfaction" icon={ShieldCheck} />
        </div>
      </div>
    </section>
  );
}
