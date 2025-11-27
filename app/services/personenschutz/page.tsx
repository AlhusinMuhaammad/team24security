import Link from 'next/link'

export default function PersonenschutzPage() {
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
              Personenschutz
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Diskret und professionell: Schutz für Personen
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Individueller Personenschutz für Führungskräfte, Prominente und Personen in 
              besonderen Situationen. Geschulte Personenschützer nach höchsten Standards.
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
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Risikoanalyse</h3>
                <p className="text-gray-700 leading-relaxed">
                  Detaillierte Analyse der Bedrohungslage, Routenplanung und Entwicklung 
                  eines individuellen Schutzplans. Abstimmung mit Behörden bei Bedarf.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Diskrete Begleitung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Professionelle Begleitung durch geschulte Personenschützer. Diskret im 
                  Hintergrund, aber jederzeit einsatzbereit. Anpassung an Ihre Routine.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Kontinuierliche Anpassung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ständige Überprüfung und Anpassung der Sicherheitsmaßnahmen. 
                  Reaktion auf sich ändernde Umstände und neue Bedrohungslagen.
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
              '24/7 Personenschutz',
              'Diskrete Begleitung',
              'Risikoanalyse & Route-Planung',
              'Zugangskontrolle',
              'Notfallbereitschaft',
              'Koordination mit Behörden',
              'Reisebegleitung',
              'Individuelle Lösungen',
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
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Führungskräfte</h3>
              <p className="text-gray-700 mb-4">
                Schutz für Geschäftsführer, Vorstände und Führungskräfte in besonderen 
                Situationen oder bei erhöhtem Risiko. Diskret und professionell.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Begleitung bei Geschäftsreisen, öffentlichen Auftritten
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Prominente</h3>
              <p className="text-gray-700 mb-4">
                Personenschutz für Personen des öffentlichen Lebens. Diskret im Hintergrund, 
                aber jederzeit einsatzbereit.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Begleitung bei Events, öffentlichen Auftritten, Reisen
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Zeugen</h3>
              <p className="text-gray-700 mb-4">
                Schutz für Zeugen in Gerichtsverfahren oder besonderen Situationen. 
                Koordination mit Justizbehörden.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Begleitung zu Gerichtsterminen, Schutz am Wohnort
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Privatpersonen</h3>
              <p className="text-gray-700 mb-4">
                Individueller Personenschutz für Privatpersonen bei Bedrohungslagen 
                oder besonderen Anlässen.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Schutz bei Scheidungsverfahren, Erbstreitigkeiten
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
                <h3 className="text-xl font-semibold mb-3">Spezialisierte Ausbildung</h3>
                <p className="text-gray-300">
                  Alle Personenschützer haben eine spezielle Ausbildung in Personenschutz, 
                  Selbstverteidigung und Deeskalation. Regelmäßige Weiterbildungen.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Diskretion garantiert</h3>
                <p className="text-gray-300">
                  Höchste Diskretion und Vertraulichkeit. Personenschutz im Hintergrund, 
                  ohne Aufmerksamkeit zu erregen.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Flexible Einsatzzeiten</h3>
                <p className="text-gray-300">
                  Von kurzfristigen Einsätzen bis hin zu langfristigen Begleitungen. 
                  Anpassung an Ihre individuellen Bedürfnisse.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Behördenkoordination</h3>
                <p className="text-gray-300">
                  Enge Zusammenarbeit mit Polizei und Sicherheitsbehörden. 
                  Professionelle Koordination bei Bedarf.
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
              Professioneller Personenschutz
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Kontaktieren Sie uns für eine vertrauliche Erstberatung zu Ihrem Personenschutz.
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
