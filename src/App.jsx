import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Categories from './components/Categories';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white antialiased">
      <Hero />
      <Stats />
      <Features />
      <Categories />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
          <p className="text-sm">© {new Date().getFullYear()} The Premium Brand Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
