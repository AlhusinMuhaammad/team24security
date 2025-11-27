import Link from 'next/link'

export default function DetekteiObservationPage() {
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
              Detektei & Observation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professionelle Ermittlungen und Observationen
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Diskret, gründlich und rechtssicher. Von Wirtschaftsermittlungen bis zu Observationen. 
              Professionelle Detektei-Dienstleistungen nach höchsten Standards.
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
                  📋
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Auftragsklärung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Detaillierte Besprechung Ihrer Anforderungen, rechtliche Prüfung der 
                  Ermittlungsmaßnahmen. Entwicklung eines individuellen Ermittlungskonzepts.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  🔍
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Diskrete Ermittlung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professionelle Durchführung der Ermittlungen unter Einhaltung aller 
                  rechtlichen Bestimmungen. Diskret und gründlich.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  📄
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Dokumentation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vollständige Dokumentation der Ergebnisse in gerichtsverwertbarer Form. 
                  Berichte, Fotos, Beweismaterial für Ihre Zwecke.
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
              'Wirtschaftsermittlungen',
              'Observationen',
              'Personenermittlungen',
              'Vermögensermittlungen',
              'Betrugsermittlungen',
              'Rechtssichere Dokumentation',
              'Diskrete Durchführung',
              'Gerichtsverwertbare Beweise',
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
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Wirtschaftskriminalität</h3>
              <p className="text-gray-700 mb-4">
                Ermittlungen bei Betrug, Untreue oder anderen Wirtschaftsdelikten. 
                Recherche, Beweissicherung, gerichtsverwertbare Dokumentation.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Untreue-Ermittlungen bei einem Unternehmen in Frankfurt
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Personenermittlungen</h3>
              <p className="text-gray-700 mb-4">
                Auffindung von Personen, Überprüfung von Angaben, Recherche zu Personen. 
                Diskret und rechtssicher.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Auffindung von Zeugen für Gerichtsverfahren
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Vermögensermittlungen</h3>
              <p className="text-gray-700 mb-4">
                Recherche zu Vermögensverhältnissen, Besitzverhältnissen, Finanzströmen. 
                Unterstützung bei Vollstreckungen.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Vermögensermittlungen bei Scheidungsverfahren
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Observationen</h3>
              <p className="text-gray-700 mb-4">
                Diskretes Beobachten von Personen, Orten oder Situationen. Rechtssichere 
                Dokumentation, gerichtsverwertbare Beweise.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Observation bei Verdacht auf Versicherungsbetrug
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
                <h3 className="text-xl font-semibold mb-3">Rechtssicherheit</h3>
                <p className="text-gray-300">
                  Alle Ermittlungen werden vollständig rechtssicher durchgeführt. Einhaltung 
                  aller Datenschutzbestimmungen, gerichtsverwertbare Dokumentation.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Diskretion</h3>
                <p className="text-gray-300">
                  Höchste Diskretion und Vertraulichkeit. Alle Ermittlungen werden diskret 
                  durchgeführt, keine Kompromisse bei der Diskretion.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Erfahrung</h3>
                <p className="text-gray-300">
                  Langjährige Erfahrung mit verschiedenen Ermittlungsarten. Von Wirtschaftsermittlungen 
                  bis hin zu Observationen – wir haben die Expertise.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Gerichtsverwertbarkeit</h3>
                <p className="text-gray-300">
                  Alle Beweise werden gerichtsverwertbar dokumentiert. Fotos, Berichte, 
                  Zeugenaussagen – alles für Ihre Zwecke aufbereitet.
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
              Professionelle Detektei-Dienstleistungen
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Kontaktieren Sie uns für eine vertrauliche Erstberatung zu Ihren Ermittlungsanforderungen.
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


