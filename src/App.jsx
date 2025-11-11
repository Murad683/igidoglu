import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Ziyarah from "./pages/Ziyarah.jsx";
import Tours from "./pages/Tours.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ziyaratlar" element={<Ziyarah />} />
          <Route path="/turlar" element={<Tours />} />
          <Route path="/qalereya" element={<GalleryPage />} />
          <Route path="/elaqe" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
