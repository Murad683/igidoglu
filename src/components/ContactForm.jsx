import React from "react";

export default function ContactForm() {
  return (
    <section className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-50">Səyahətinizi birlikdə planlayaq</h2>
            <p className="text-sm text-slate-300">
              Ziyarət və ya istirahət turu haqqında sualınız var? Formu doldurun,
              komandamız ən qısa zamanda sizinlə əlaqə saxlasın.
            </p>
            <div className="space-y-2 text-sm text-slate-200">
              <p>Ünvan: <span className="font-medium">Bakı, Azərbaycan</span></p>
              <p>
                AZERBAYCAN: <a href="https://wa.me/994504307575"
                title="WhatsApp: +994 50 430 75 75"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-accent">
                  +994 50 430 75 75
                  </a>
              </p>
              <p>
                TÜRKİYE: <a href="https://wa.me/905387011214"
                title="WhatsApp: +90 538 701 12 14"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-accent">
                  +90 538 701 12 14
                  </a>
              </p>
              <p className="text-xs text-slate-400">İş saatları: Hər gün 10:00 — 19:00</p>
            </div>
          </div>
          <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm shadow">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-200">Ad və soyad</label>
                <input type="text" placeholder="Adınız və soyadınız" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-accent/40 focus:border-accent focus:ring-1" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-200">Telefon nömrəsi</label>
                <input type="tel" placeholder="+994 XX XXX XX XX" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-accent/40 focus:border-accent focus:ring-1" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-200">Tur növü</label>
              <select className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-accent/40 focus:border-accent focus:ring-1">
                <option>Ümrə ziyarəti</option>
                <option>Kərbəla ziyarəti</option>
                <option>Daxili səyahət turu</option>
                <option>Xarici səyahət turu</option>
                <option>Digər</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-200">Mesajınız</label>
              <textarea rows={4} placeholder="İstədiyiniz tarixlər, tələblər və suallarınız..." className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-accent/40 focus:border-accent focus:ring-1" />
            </div>
            <button type="button" className="w-full rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 shadow hover:bg-accent/90">Sorğunu göndər</button>
            <p className="text-xs text-slate-400">Bu, demo formdur. Real sorğular üçün telefon və WhatsApp vasitəsilə əlaqə saxlaya bilərsiniz.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

