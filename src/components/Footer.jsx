import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Sol: sayt linkləri (alt-alta) */}
          <nav className="flex flex-col items-start gap-2 text-sm text-slate-300">
            <Link to="/ziyaratlar" className="hover:text-slate-100">Ziyarət turları</Link>
            <Link to="/turlar" className="hover:text-slate-100">Səyahət turları</Link>
            <Link to="/qalereya" className="hover:text-slate-100">Qalereya</Link>
            <Link to="/elaqe" className="hover:text-slate-100">Əlaqə</Link>
          </nav>

          {/* Orta: kontaktlar */}
          <div className="text-sm text-slate-300 md:text-center">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">Turlar, Biletlər</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <span className="mr-2 text-slate-400">AZERBAYCAN</span>
                <a href="tel:+994504307575" className="hover:text-accent">+994 50 430 75 75</a>
              </li>
              <li>
                <span className="mr-2 text-slate-400">TÜRKİYE</span>
                <a href="tel:+905387011214" className="hover:text-accent">+90 538 701 12 14</a>
              </li>
            </ul>
          </div>

          {/* Sağ: copyright */}
          <div className="text-xs text-slate-400 md:text-right">
            <p>© {year} İgidoglu Travel. Bütün hüquqlar qorunur.</p>
            <p>
              <a
                href="https://wa.me/994505131380"
                title="WhatsApp: +994 50 513 13 80"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Created by REVIO.AZ
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
