import React from "react";
import { tours } from "../data/tours.js";
import TourCard from "../components/TourCard.jsx";

export default function Tours() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-8 space-y-3">
          <h1 className="text-2xl font-semibold text-slate-50">Səyahət turları</h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Daxili və xarici istirahət turları üçün demo paketlər. İgidoglu Travel
            real sistemdə tarixləri, qiymətləri və proqramları buradan idarə edə bilər.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}

