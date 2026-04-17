import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import Skills from "./components/Skills";

import SelectedWorks from "./components/SelectedWorks";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import LetsWorkTogether from "./components/LetsWorkTogether";
import Preloader from "./components/Preloader";
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-white selection:bg-violet-100 selection:text-violet-900">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <StatsSection />
                <About />
                <ServicesSection />
                <Skills />
              
                <SelectedWorks />
                <FAQ />
                <LetsWorkTogether />
              </main>
            } />
            <Route path="/about" element={<main><About /><LetsWorkTogether /></main>} />
            <Route path="/skills" element={<main><Skills /><LetsWorkTogether /></main>} />
            <Route path="/services" element={<main><Services /><LetsWorkTogether /></main>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </>
  );
}
