import React from "react";

export default function TourCard({ tour }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-sm">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 text-sm">
        <div>
          <h3 className="text-base font-semibold text-slate-50">{tour.title}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">{tour.dateRange}</p>
        </div>
        <p className="text-xs text-slate-300">{tour.description}</p>
        <ul className="mt-1 space-y-1 text-xs text-slate-200">
          {tour.highlights.map((h, idx) => (
            <li key={idx}>• {h}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between pt-3 text-xs">
          <span className="font-semibold text-accent">{tour.price}</span>
          <span className="rounded-full border border-slate-700 px-2 py-1">Yerlər məhduddur</span>
        </div>
      </div>
    </article>
  );
}

