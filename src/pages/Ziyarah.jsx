import React from "react";
import { ziyarahs } from "../data/ziyarahs.js";
import ZiyarahCard from "../components/ZiyarahCard.jsx";

export default function Ziyarah() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="mb-8 space-y-3">
          <h1 className="text-2xl font-semibold text-slate-50">Ziyarət turları</h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Ümrə, Kərbəla və digər müqəddəs məkanlara ziyarət turları. Tarixlər və proqramlar
            demo məqsədi ilə göstərilir, real layihədə agentlik tərəfindən yenilənəcək.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {ziyarahs.map((item) => (
            <ZiyarahCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

