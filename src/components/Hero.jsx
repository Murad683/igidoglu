import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-primary/80 to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
        <div className="flex-1 space-y-6">
          <p className="inline rounded-full border border-accent/30 bg-slate-900/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Ziyarət və səyahət turları
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Ruhunuzu dincəldən
            <span className="text-accent"> ziyarətlər </span>
            və unudulmaz səyahətlər.
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            İgidoglu Travel ilə Ümrə, Kərbəla, daxili və xarici turlara rahat
            qeydiyyat, etibarlı təşkilat və peşəkar bələdçilərlə qoşulun.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/ziyaratlar" className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-slate-950 shadow hover:bg-accent/90">
              Ziyarət turlarına bax
            </Link>
            <Link to="/turlar" className="rounded-full border border-slate-600 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-accent/70">
              Səyahət turlarına bax
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-300 sm:text-sm">
            <div>
              <p className="font-semibold text-slate-100">Tam paket xidmət</p>
              <p>Viza, aviabilet, hotel, transfer — hamısı birlikdə.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Kiçik qruplar</p>
              <p>Rahat və nəzarətli ziyarət və səfərlər.</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4 shadow-lg">
              <p className="text-xs font-medium text-accent">Ümrə 2025</p>
              <p className="mt-2 text-sm font-semibold text-slate-50">3 gün Mədinə, 4 gün Məkkə</p>
              <p className="mt-1 text-xs text-slate-300">Rahat hotel, qrup ziyarət proqramı, lokal bələdçi.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-4">
              <p className="text-xs font-medium text-accent">Kərbəla ziyarəti</p>
              <p className="mt-2 text-sm font-semibold text-slate-50">5 gün Nəcəf, 2 gün Kərbəla</p>
              <p className="mt-1 text-xs text-slate-300">Müqəddəs məkanlara ziyarət, dua proqramları, rahat transfer.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-4 sm:col-span-2">
              <p className="text-xs font-medium text-accent">Daxili və xarici səyahətlər</p>
              <p className="mt-2 text-sm font-semibold text-slate-50">İstanbul, Trabzon, Şuşa, Qəbələ və daha çoxu.</p>
              <p className="mt-1 text-xs text-slate-300">Ailəniz və dostlarınızla unudulmaz istirahət turları.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

