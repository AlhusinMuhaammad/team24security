import Link from 'next/link'

export default function VideoüberwachungPage() {
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
              Videoüberwachung
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Installation & Monitoring von Videoüberwachung
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Moderne Videoüberwachungssysteme für maximale Sicherheit. Von der Planung über 
              die Installation bis zum 24/7 Monitoring – alles aus einer Hand. DSGVO-konform.
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
                  📐
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Planung & Konzept</h3>
                <p className="text-gray-700 leading-relaxed">
                  Detaillierte Analyse Ihrer Anforderungen, DSGVO-konforme Planung, 
                  Erstellung eines individuellen Überwachungskonzepts mit Hinweisschildern.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  🔧
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Professionelle Installation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Installation durch zertifizierte Techniker. HD- und 4K-Kameras, 
                  Nachtsicht, Bewegungserkennung. Integration in bestehende Systeme.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  👁️
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">24/7 Monitoring</h3>
                <p className="text-gray-700 leading-relaxed">
                  Kontinuierliche Überwachung durch unsere Sicherheitszentrale. 
                  Sofortige Reaktion bei Auffälligkeiten, Alarmierung bei Bedarf.
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
              'HD- und 4K-Kameras',
              'Nachtsicht-Funktion',
              'Bewegungserkennung',
              'Cloud-Speicherung',
              'Mobile App-Zugriff',
              'DSGVO-konforme Umsetzung',
              'Hinweisschilder',
              '24/7 Monitoring & Wartung',
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-12 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">DSGVO-konforme Umsetzung</h3>
            <p className="text-blue-800 mb-4">
              Alle unsere Videoüberwachungssysteme werden vollständig DSGVO-konform installiert 
              und betrieben. Wir unterstützen Sie bei:
            </p>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Erstellung von Datenschutzerklärungen</li>
              <li>Anbringung von Hinweisschildern</li>
              <li>Rechtssichere Speicherung und Löschung</li>
              <li>Zugriffsrechte und Berechtigungskonzepte</li>
              <li>Regelmäßige Compliance-Prüfungen</li>
            </ul>
          </div>

          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Einsatzbereiche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Einzelhandel</h3>
              <p className="text-gray-700 mb-4">
                Videoüberwachung für Geschäfte zur Diebstahlprävention und Beweissicherung. 
                Integration mit Kassensystemen, Überwachung von Lagerbereichen.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Elektronikmarkt in München mit 2.000 m² Verkaufsfläche
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Parkplätze</h3>
              <p className="text-gray-700 mb-4">
                Überwachung von Parkplätzen und Parkhäusern. Vandalismus-Prävention, 
                Unterstützung bei Unfällen, Koordination mit Polizei.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Parkhaus in Hamburg mit 500 Stellplätzen
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Produktionsstätten</h3>
              <p className="text-gray-700 mb-4">
                Überwachung von Produktionsanlagen und Lagerbereichen. Sicherheit und 
                Qualitätskontrolle, Diebstahlprävention.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Produktionshalle in Stuttgart mit 10.000 m²
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Bürogebäude</h3>
              <p className="text-gray-700 mb-4">
                Videoüberwachung für Bürokomplexe. Eingangsbereiche, Parkplätze, 
                gemeinschaftliche Bereiche. DSGVO-konforme Umsetzung.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Bürokomplex in Frankfurt mit mehreren Mietern
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
                <h3 className="text-xl font-semibold mb-3">DSGVO-Compliance</h3>
                <p className="text-gray-300">
                  Vollständige DSGVO-konforme Umsetzung. Rechtssichere Installation, 
                  Dokumentation und Betrieb. Unterstützung bei Compliance-Prüfungen.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">24/7 Monitoring</h3>
                <p className="text-gray-300">
                  Kontinuierliche Überwachung durch unsere Sicherheitszentrale. 
                  Sofortige Reaktion bei Auffälligkeiten, Alarmierung bei Bedarf.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Moderne Technologie</h3>
                <p className="text-gray-300">
                  HD- und 4K-Kameras, KI-gestützte Bewegungserkennung, Cloud-Speicherung. 
                  Mobile Apps für Zugriff von überall.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Wartung & Support</h3>
                <p className="text-gray-300">
                  Regelmäßige Wartung, Updates und 24/7 Support. Maximale Systemverfügbarkeit 
                  durch professionelle Betreuung.
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
              Professionelle Videoüberwachung
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Lassen Sie uns gemeinsam die optimale Videoüberwachungslösung für Ihr Objekt entwickeln.
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


