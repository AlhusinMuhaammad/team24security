import Link from 'next/link'

export default function ObjektschutzPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero mit Grid-Overlay */}
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
              Objektschutz
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Kontinuierlicher Schutz für Ihre Immobilien
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Rund um die Uhr Überwachung und Sicherung von Gebäuden, Anlagen und Grundstücken 
              durch qualifizierte Sicherheitsfachkräfte nach §34a GewO.
            </p>
          </div>
        </div>
      </section>

      {/* So arbeiten wir - Timeline-Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            So arbeiten wir
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-orange hidden md:block"></div>
              <div className="space-y-12">
                <div className="relative flex gap-8">
                  <div className="hidden md:block w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1 bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent-orange">
                    <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Gefährdungsanalyse</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Detaillierte Begehung und Analyse Ihrer Immobilie. Identifikation kritischer 
                      Bereiche, Zugangspunkte und Schwachstellen. Erstellung eines maßgeschneiderten 
                      Sicherheitskonzepts.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-8">
                  <div className="hidden md:block w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1 bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent-orange">
                    <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Einsatzplanung</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Entwicklung eines präzisen Einsatzplans mit definierten Patrouillenrouten, 
                      Kontrollzeiten und Reaktionsprotokollen. Abstimmung mit Ihren internen 
                      Sicherheitsprozessen.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-8">
                  <div className="hidden md:block w-16 h-16 bg-accent-orange rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1 bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent-orange">
                    <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Kontinuierliche Überwachung</h3>
                    <p className="text-gray-700 leading-relaxed">
                      24/7 Präsenz durch geschulte Sicherheitsfachkräfte. Regelmäßige Kontrollgänge, 
                      Zugangskontrolle und sofortige Reaktion auf Vorfälle. Digitale Dokumentation 
                      aller Aktivitäten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungsumfang - Badge-Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Leistungsumfang
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              '24/7 Objektüberwachung',
              'Regelmäßige Patrouillen',
              'Zugangskontrolle',
              'Alarmüberwachung',
              'Ereignisdokumentation',
              'Notfallbereitschaft',
              'Technische Überwachung',
              'Individuelle Konzepte',
            ].map((item, index) => (
              <div key={index} className="bg-primary-dark text-white p-6 rounded-lg relative overflow-hidden">
                <div className="absolute top-2 right-2 w-12 h-12 bg-accent-orange rounded-full opacity-20"></div>
                <div className="relative">
                  <div className="text-accent-orange text-2xl mb-2">✓</div>
                  <div className="font-semibold">{item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deutsche Beispiele */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Einsatzbereiche in Deutschland
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent-orange">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Bürokomplexe</h3>
              <p className="text-gray-700 mb-4">
                Schutz von Bürogebäuden in München, Frankfurt und Berlin. Zugangskontrolle für 
                mehrere Mieter, Überwachung von Parkplätzen und gemeinschaftlichen Bereichen.
              </p>
              <div className="text-sm text-gray-500">
                Beispiel: 8-stöckiger Bürokomplex in Frankfurt mit 200+ Mietern
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent-orange">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Lagerhallen</h3>
              <p className="text-gray-700 mb-4">
                Sicherung von Logistikzentren und Lagerhallen in der DACH-Region. Schutz vor 
                Diebstahl, Vandalismus und unbefugtem Zutritt.
              </p>
              <div className="text-sm text-gray-500">
                Beispiel: 15.000 m² Lagerhalle in Stuttgart mit Hochregallager
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent-orange">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Leerstehende Immobilien</h3>
              <p className="text-gray-700 mb-4">
                Bewachung von leerstehenden Gebäuden während Verkaufs- oder Renovierungsphasen. 
                Prävention von Vandalismus und unbefugtem Zutritt.
              </p>
              <div className="text-sm text-gray-500">
                Beispiel: Ehemaliges Industriegebäude in Hamburg, 5.000 m²
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum Team24Security */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Warum Team24Security?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary-steel p-6 rounded-lg">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Präzise Konzepte</h3>
                <p className="text-gray-300">
                  Jedes Sicherheitskonzept wird individuell auf Ihre Immobilie und Ihre 
                  spezifischen Anforderungen zugeschnitten. Keine Standardlösungen.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Schnelle Reaktionszeiten</h3>
                <p className="text-gray-300">
                  Durchschnittliche Reaktionszeit von unter 3 Minuten bei Alarmmeldungen. 
                  Optimierte Einsatzplanung für maximale Effizienz.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Transparente Dokumentation</h3>
                <p className="text-gray-300">
                  Vollständige digitale Dokumentation aller Aktivitäten. Regelmäßige 
                  Berichte und Echtzeit-Zugriff über unser Kundenportal.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-3">Zertifizierte Fachkräfte</h3>
                <p className="text-gray-300">
                  Alle Sicherheitsfachkräfte sind nach §34a GewO zertifiziert und 
                  regelmäßig geschult. Kontinuierliche Weiterbildung garantiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary-dark">
              Bereit für professionellen Objektschutz?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Lassen Sie uns gemeinsam die optimale Sicherheitslösung für Ihre Immobilie entwickeln.
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
