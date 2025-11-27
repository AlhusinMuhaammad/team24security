import Link from 'next/link'

export default function EmpfangsPfortendienstPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-primary-dark to-primary-steel text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 gap-1 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-white"></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent-orange px-4 py-2 rounded mb-6 text-sm font-semibold">
              Empfangs- & Pfortendienst
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professioneller Empfang mit Sicherheitskomponente
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Empfangsdienst für Unternehmen, Bürogebäude und Events. Freundlich, kompetent 
              und sicherheitsbewusst. Kombination aus Service und Sicherheit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Unser Vorgehen
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  👋
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Besucherbetreuung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professionelle Begrüßung und Betreuung Ihrer Besucher. Kompetente Auskunft, 
                  Terminverwaltung und Wegeleitung. Mehrsprachiger Service möglich.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  🔐
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Zugangskontrolle</h3>
                <p className="text-gray-700 leading-relaxed">
                  Kontrolle und Verwaltung von Zugängen. Ausweisprüfung, Besucherausweise, 
                  Zutrittsberechtigungen. Integration in Ihre Sicherheitssysteme.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  📞
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Telefonannahme</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professionelle Telefonannahme und Weiterleitung. Terminvereinbarungen, 
                  Auskünfte, Notfallkoordination. Schulung auf Ihre Unternehmensprozesse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Leistungsumfang
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Besucherbetreuung & Wegeleitung',
              'Zugangskontrolle & Ausweisprüfung',
              'Telefonannahme & Weiterleitung',
              'Post- und Paketannahme',
              'Terminverwaltung',
              'Auskunftserteilung',
              'Sicherheitsüberwachung',
              'Mehrsprachiger Service',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg border-l-4 border-accent-orange">
                <span className="text-accent-orange text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Einsatzbereiche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Bürogebäude</h3>
              <p className="text-gray-700 mb-4">
                Empfangsdienst für Bürokomplexe mit mehreren Mietern. Zugangskontrolle, 
                Besucherbetreuung, Paketannahme. Koordination mit Hausverwaltung.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: 10-stöckiges Bürogebäude in Frankfurt mit 300+ Mitarbeitern
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Unternehmenszentralen</h3>
              <p className="text-gray-700 mb-4">
                Repräsentativer Empfang für Hauptsitze von Unternehmen. VIP-Betreuung, 
                internationale Besucher, hohe Servicequalität.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Konzernzentrale in München mit internationalen Besuchern
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Produktionsstätten</h3>
              <p className="text-gray-700 mb-4">
                Pfortendienst für Industrieanlagen. Zugangskontrolle für Mitarbeiter und 
                Besucher, Sicherheitsüberwachung, Koordination mit Werkschutz.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Produktionsstätte in Stuttgart mit 500+ Mitarbeitern
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Events & Messen</h3>
              <p className="text-gray-700 mb-4">
                Empfangsdienst für Veranstaltungen und Messen. Besucherbetreuung, 
                Ticketprüfung, VIP-Bereiche. Temporäre Einsätze möglich.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Fachmesse in Hannover mit 50.000+ Besuchern
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Warum Team24Security?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Geschulte Fachkräfte</h3>
                <p className="text-gray-300">
                  Alle Empfangskräfte sind geschult in Kommunikation, Sicherheit und 
                  Ihren Unternehmensprozessen. Kontinuierliche Weiterbildung.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Sicherheit & Service</h3>
                <p className="text-gray-300">
                  Kombination aus freundlichem Service und sicherheitsbewusster Kontrolle. 
                  Professioneller Empfang ohne Kompromisse bei der Sicherheit.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Mehrsprachigkeit</h3>
                <p className="text-gray-300">
                  Empfangskräfte mit Fremdsprachenkenntnissen. Englisch, Französisch, 
                  Spanisch und weitere Sprachen verfügbar.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Flexible Einsatzzeiten</h3>
                <p className="text-gray-300">
                  Von Teilzeit-Empfang bis hin zu 24/7-Besetzung. Anpassung an Ihre 
                  Geschäftszeiten und Anforderungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary-dark">
              Professioneller Empfang
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Lassen Sie uns gemeinsam die optimale Empfangslösung für Ihr Unternehmen entwickeln.
            </p>
            <Link
              href="/angebot"
              className="inline-block bg-accent-orange text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Jetzt unverbindliches Angebot einholen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


