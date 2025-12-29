import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Pages
import Home from '@/pages/Home';
import WhoWeAre from '@/pages/WhoWeAre';
import DataEngineering from '@/pages/DataEngineering';
import ITSolutions from '@/pages/ITSolutions';
import DataScienceAI from '@/pages/DataScienceAI';
import CloudSolutions from '@/pages/CloudSolutions';
import OurProducts from '@/pages/OurProducts';
import JoinUs from '@/pages/JoinUs';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <>
      <Helmet>
        <title>MHK Tech Inc - Enterprise Digital Solutions</title>
        <meta name="description" content="Premier enterprise technology solutions provider specializing in AI, data engineering, and automation. Professional innovation for global business." />
      </Helmet>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-500/30 selection:text-emerald-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/data-engineering" element={<DataEngineering />} />
            <Route path="/it-solutions" element={<ITSolutions />} />
            <Route path="/data-science-ai" element={<DataScienceAI />} />
            <Route path="/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/our-products" element={<OurProducts />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;