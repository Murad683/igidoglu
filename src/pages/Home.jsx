import React from "react";
import Hero from "../components/Hero.jsx";
import Gallery from "../components/Gallery.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { ziyarahs } from "../data/ziyarahs.js";
import { tours } from "../data/tours.js";
import ZiyarahCard from "../components/ZiyarahCard.jsx";
import TourCard from "../components/TourCard.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">Seçilmiş ziyarət turları</h2>
              <p className="mt-1 text-sm text-slate-300">Mövsümə uyğun Ümrə və Kərbəla ziyarət paketlərimiz.</p>
            </div>
            <Link to="/ziyaratlar" className="text-xs font-semibold text-accent hover:text-accent/80">
              Hamısına bax →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {ziyarahs.map((item) => (
              <ZiyarahCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">Populyar səyahət turları</h2>
              <p className="mt-1 text-sm text-slate-300">Daxili və xarici istirahət üçün uyğun paketlər.</p>
            </div>
            <Link to="/turlar" className="text-xs font-semibold text-accent hover:text-accent/80">
              Hamısına bax →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <ContactForm />
    </>
  );
}

