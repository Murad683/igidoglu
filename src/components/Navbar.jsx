import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkClasses = ({ isActive }) =>
  `px-3 py-1 rounded-full text-sm font-medium transition ${
    isActive
      ? "bg-accent text-slate-950"
      : "text-slate-200 hover:bg-slate-800 hover:text-white"
  }`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    // Prevent background scroll when mobile menu is open
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="İgidoglu Travel logo"
            className="h-10 w-10 rounded-full border border-slate-700 bg-slate-900 object-cover"
          />
          <span className="text-lg font-semibold tracking-wide">
            İgidoglu <span className="text-accent">Travel</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 sm:flex">
            <NavLink to="/" className={navLinkClasses}>Ana səhifə</NavLink>
            <NavLink to="/ziyaratlar" className={navLinkClasses}>Ziyarət turları</NavLink>
            <NavLink to="/turlar" className={navLinkClasses}>Səyahət turları</NavLink>
            <NavLink to="/qalereya" className={navLinkClasses}>Qalereya</NavLink>
            <NavLink to="/elaqe" className={navLinkClasses}>Əlaqə</NavLink>
          </div>

          {/* Desktop language switcher */}
          <div className="hidden items-center gap-1 rounded-full border border-slate-700 px-2 py-1 text-xs sm:flex">
            <button className="rounded-full bg-accent px-2 py-0.5 font-semibold text-slate-950">AZ</button>
            <button className="rounded-full px-2 py-0.5 text-slate-300">RU</button>
            <button className="rounded-full px-2 py-0.5 text-slate-300">EN</button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 hover:bg-slate-800 sm:hidden"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-2">
              <NavLink to="/" onClick={closeMobile} className={({ isActive }) => `w-full rounded-md px-3 py-2 text-sm ${isActive ? "bg-slate-800 text-white" : "text-slate-200 hover:bg-slate-800 hover:text-white"}`}>Ana səhifə</NavLink>
              <NavLink to="/ziyaratlar" onClick={closeMobile} className={({ isActive }) => `w-full rounded-md px-3 py-2 text-sm ${isActive ? "bg-slate-800 text-white" : "text-slate-200 hover:bg-slate-800 hover:text-white"}`}>Ziyarət turları</NavLink>
              <NavLink to="/turlar" onClick={closeMobile} className={({ isActive }) => `w-full rounded-md px-3 py-2 text-sm ${isActive ? "bg-slate-800 text-white" : "text-slate-200 hover:bg-slate-800 hover:text-white"}`}>Səyahət turları</NavLink>
              <NavLink to="/qalereya" onClick={closeMobile} className={({ isActive }) => `w-full rounded-md px-3 py-2 text-sm ${isActive ? "bg-slate-800 text-white" : "text-slate-200 hover:bg-slate-800 hover:text-white"}`}>Qalereya</NavLink>
              <NavLink to="/elaqe" onClick={closeMobile} className={({ isActive }) => `w-full rounded-md px-3 py-2 text-sm ${isActive ? "bg-slate-800 text-white" : "text-slate-200 hover:bg-slate-800 hover:text-white"}`}>Əlaqə</NavLink>
            </div>
            <div className="mt-3 flex items-center gap-1 rounded-full border border-slate-700 px-2 py-1 text-xs">
              <button className="rounded-full bg-accent px-2 py-0.5 font-semibold text-slate-950">AZ</button>
              <button className="rounded-full px-2 py-0.5 text-slate-300">RU</button>
              <button className="rounded-full px-2 py-0.5 text-slate-300">EN</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
