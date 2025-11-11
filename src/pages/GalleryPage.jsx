import React from "react";
import Gallery from "../components/Gallery.jsx";

export default function GalleryPage() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-4">
          <h1 className="text-2xl font-semibold text-slate-50">Qalereya</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Son ziyarət və səyahətlərdən nümunə fotolar. Real layihədə bu bölməyə
            İgidoglu Travel-in təşkil etdiyi səfərlərdən şəkillər əlavə edilə bilər.
          </p>
        </div>
      </section>
      <Gallery />
    </>
  );
}

