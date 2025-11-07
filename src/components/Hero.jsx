import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ShoppingBag, Store, Star, Play, Gift } from 'lucide-react';

const MotionButton = ({ primary = false, children }) => (
  <motion.button
    whileHover={{ scale: 1.03, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className={`group relative overflow-hidden rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors ${
      primary
        ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-black shadow-[0_0_40px_rgba(234,179,8,0.35)]'
        : 'backdrop-blur-xl bg-white/10 text-white border border-white/20 hover:bg-white/15'
    }`}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-white/0 via-white/30 to-white/0" />
  </motion.button>
);

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(234,179,8,0.12),transparent),radial-gradient(800px_500px_at_10%_10%,rgba(99,102,241,0.18),transparent)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft gradient overlays for cinematic glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-700 border border-white/10 shadow-inner shadow-black/30 flex items-center justify-center">
              <Star className="h-5 w-5 text-amber-300" />
            </div>
            <div className="">
              <p className="text-lg sm:text-xl font-semibold tracking-tight text-white">The Premium Brand Marketplace</p>
              <p className="text-xs text-white/60 -mt-1">Luxury. Rewards. Trust.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Floating credit balance indicator */}
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl px-4 py-2 text-white shadow-[0_0_25px_rgba(255,255,255,0.08)]">
              <Gift className="h-4 w-4 text-amber-300" />
              <span className="text-sm">Credits: </span>
              <span className="text-sm font-semibold text-amber-200">$248.50</span>
            </div>
            <MotionButton primary>
              <ShoppingBag className="h-4 w-4" />
              <span>Start Shopping</span>
            </MotionButton>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
          >
            The Premium Brand Marketplace
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl"
          >
            Buy, sell, and discover premium brands with our innovative store credit system. Earn rewards, get exclusive offers, and connect with verified sellers worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <MotionButton primary>
              <ShoppingBag className="h-5 w-5" />
              <span>Start Shopping</span>
            </MotionButton>
            <MotionButton>
              <Store className="h-5 w-5" />
              <span>Sell Your Products</span>
            </MotionButton>
          </motion.div>

          {/* Rewards highlight strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
            className="mt-8 sm:mt-10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 sm:p-5 text-white shadow-[0_0_60px_rgba(255,255,255,0.08)]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-9 w-9 shrink-0 rounded-xl bg-gradient-to-tr from-amber-400/30 to-yellow-300/30 border border-white/20 flex items-center justify-center">
                  <Star className="h-5 w-5 text-amber-200" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-medium">Earn Store Credits on Every Purchase</p>
                  <p className="text-sm sm:text-base text-white/70">Spend $50 or more and get 10% back in store credits. Use them instantly or withdraw as cash after a year!</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MotionButton>
                  <span>Learn More About Credits</span>
                </MotionButton>
                <MotionButton primary>
                  <Play className="h-4 w-4" />
                  <span>Watch Video & Earn Credits</span>
                </MotionButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
