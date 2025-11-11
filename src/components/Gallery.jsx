import React from "react";

const images = [
  { src: "/images/umrah.jpg", alt: "Ümrə ziyarəti" },
  { src: "/images/karbala.jpg", alt: "Kərbəla ziyarəti" },
  { src: "/images/istanbul.jpg", alt: "İstanbul turu" },
  { src: "/images/baku.jpg", alt: "Bakı gecə mənzərəsi" },
  { src: "/images/mountain.jpg", alt: "Dağ mənzərəsi" },
  { src: "/images/sea.jpg", alt: "Dəniz kənarı istirahət" },
];

export default function Gallery() {
  return (
    <section className="border-y border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-50">Son ziyarət və səfərlərdən kadrlar</h2>
            <p className="mt-1 text-sm text-slate-300">Müştərilərimizin gözü ilə — müqəddəs məkanlar və unudulmaz səfərlər.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {images.map((img) => (
            <figure key={img.src} className="group relative overflow-hidden rounded-2xl border border-slate-800">
              <img src={img.src} alt={img.alt} className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent p-3 text-xs text-slate-100 opacity-0 transition group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

