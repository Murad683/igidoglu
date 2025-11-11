# İgidoglu Travel — Demo UI

Bu repo, İgidoglu Travel üçün Vite + React + Tailwind CSS əsasında hazırlanmış demo interfeysdir. Mobil uyğun (responsive) naviqasiya, ziyarət və səyahət tur kartları, qalereya, əlaqə formu və şirkət məlumatlarını ehtiva edir.

## Tələb olunanlar
- Node.js 18+ (və ya 20+ tövsiyə olunur)
- npm (və ya pnpm/yarn)

## Quraşdırma
```
npm install
```

## İnkişaf rejimi
```
npm run dev
```
Brauzerdə göstərilən host/port-a keçin (adətən `http://localhost:5173`).

## Build və önbaxış
```
npm run build
npm run preview
```

## Layihə quruluşu (qısa)
- `index.html` — giriş faylı (UTF‑8), kök konteyneri və skript yüklənməsi
- `src/main.jsx` — React tətbiqinin başlanğıcı və `BrowserRouter`
- `src/App.jsx` — marşrutlar: `/`, `/ziyaratlar`, `/turlar`, `/qalereya`, `/elaqe`
- `src/components/` — UI komponentləri
  - `Navbar.jsx` — hamburger menyulu mobil naviqasiya
  - `Hero.jsx`, `Gallery.jsx`, `TourCard.jsx`, `ZiyarahCard.jsx`
  - `ContactForm.jsx` — əlaqə məlumatları və demo forma
  - `Footer.jsx` — 3 sütunlu footer (sol linklər, mərkəz kontaktlar, sağ hüquqi mətn)
- `src/pages/` — səhifələr
- `src/data/` — demo məlumat mənbələri
- `public/images/` — şəkillər (logo, ziyarət/səyahət şəkilləri)

## Xüsusiyyətlər
- Mobil‑dost naviqasiya: hamburger menyu, bədən scroll kilidi açıq menyuda
- Tailwind CSS ilə sürətli stil və mövzu rəngləri (`primary`, `accent`)
- Azərbaycan dilində UI mətni (UTF‑8)
- Footer:
  - Sol: sayt keçidləri (Ziyarət turları, Səyahət turları, Qalereya, Əlaqə)
  - Mərkəz: “Turlar, Biletlər” — AZ və TR nömrələri, WhatsApp linkləri
  - Sağ: © {il} İgidoglu Travel, “Created by REVIO.AZ” (WhatsApp yönləndirməsi)

## Skriptlər
- `npm run dev` — inkişaf serveri
- `npm run build` — istehsal build
- `npm run preview` — build sonrası lokal önbaxış

## Qeydlər
- Bu layihə demo məqsədlidir; forma real göndəriş etmir.
- Şəkillər və mətnlər nümunədir; zərurət olduqda dəyişdirin.

```
Rənglər:
- Primary: #1A2340
- Accent:  #F7931E
```

## Müəlliflik/qeyd
Created by REVIO.AZ — WhatsApp: +994 50 513 13 80
