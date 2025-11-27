# Team24Security Website

Eine moderne, professionelle Website für den Sicherheitsdienst Team24Security, entwickelt mit Next.js und TailwindCSS.

## Features

- ✅ Vollständig responsive Design für alle Bildschirmgrößen
- ✅ Moderne UI mit einzigartigem Design-Konzept ("Human + Tech Duality")
- ✅ Interaktive Homepage mit Problem-Selector
- ✅ 9 vollständige Service-Seiten mit deutschem Inhalt
- ✅ Multi-Step Angebotsformular
- ✅ Kundenportal-Vorschau (Mock UI)
- ✅ Rechtliche Seiten (Impressum, Datenschutz, Cookies)
- ✅ DSGVO-konforme Cookie-Banner
- ✅ Trust-Strip mit wichtigen Vertrauensindikatoren

## Technologie-Stack

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **TailwindCSS** - Styling
- **React** - UI Library

## Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build
npm start
```

## Projektstruktur

```
team24security/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root Layout
│   ├── globals.css        # Globale Styles
│   ├── services/          # Service-Seiten
│   ├── technologie/       # Technologie-Seite
│   ├── referenzen/        # Case Studies
│   ├── ueber-uns/         # Über uns
│   ├── angebot/           # Angebotsformular
│   ├── kundenportal/      # Kundenportal
│   ├── kontakt/           # Kontakt
│   ├── impressum/         # Impressum
│   ├── datenschutz/       # Datenschutz
│   └── cookies/           # Cookie-Richtlinie
├── components/            # Wiederverwendbare Komponenten
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSplit.tsx
│   ├── ProblemSelector.tsx
│   ├── TrustStrip.tsx
│   ├── ServiceCard.tsx
│   ├── DashboardPreview.tsx
│   ├── CaseStudyTile.tsx
│   ├── QuoteWizard.tsx
│   ├── StaffVerificationCard.tsx
│   └── CookieBanner.tsx
└── public/                # Statische Assets
```

## Design-System

### Farben
- **Primary Dark Blue**: `#0B2340`
- **Black**: `#0A0A0A`
- **Steel Grey**: `#1C1F26`
- **Accent Orange**: `#FF8C42`
- **White**: `#FFFFFF`

### Typografie
- **Headings**: Inter (Google Fonts)
- **Body**: Inter (Google Fonts)

## Seiten

### Hauptseiten
- `/` - Homepage mit interaktivem Problem-Selector
- `/services` - Übersicht aller Services
- `/technologie` - Operations & Technologie
- `/referenzen` - Case Studies
- `/ueber-uns` - Über uns mit Team
- `/angebot` - Multi-Step Angebotsformular
- `/kundenportal` - Kundenportal-Vorschau
- `/kontakt` - Kontaktseite

### Service-Seiten
- `/services/objektschutz`
- `/services/werkschutz`
- `/services/geldtransport`
- `/services/ordnungsdienst`
- `/services/personenschutz`
- `/services/detektei`
- `/services/empfangsdienst`
- `/services/alarmanlagen`
- `/services/videoüberwachung`

### Rechtliche Seiten
- `/impressum`
- `/datenschutz`
- `/cookies`

## Komponenten

### HeroSplit
Split-Hero-Bereich mit Text links und visueller Darstellung rechts.

### ProblemSelector
Interaktiver Problem-Selector mit 3 Optionen, der dynamisch den Inhalt darunter ändert.

### TrustStrip
Immer sichtbarer Trust-Strip mit wichtigen Vertrauensindikatoren.

### QuoteWizard
Multi-Step Formular für Angebotsanfragen mit 6 Schritten.

### DashboardPreview
Mock-Dashboard für die Technologie-Seite.

### CaseStudyTile
Komponente für Case Studies mit Problem, Lösung, Ergebnis und KPIs.

### StaffVerificationCard
Verifizierungskarte für Teammitglieder mit Ausbildungen und Zertifikaten.

## Responsive Design

Die Website ist vollständig responsive und optimiert für:
- Mobile Geräte (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## Browser-Unterstützung

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## Lizenz

Proprietär - Team24Security

## Kontakt

Für Fragen oder Support kontaktieren Sie bitte:
- E-Mail: info@team24security.de
- Telefon: +49 123 456 7890
