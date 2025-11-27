import Link from 'next/link'

export default function AlarmanlagenPage() {
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
              Alarmanlagen
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Installation & Wartung von Alarmanlagen
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Moderne Alarmsysteme für maximale Sicherheit. Von der Planung über die Installation 
              bis zur regelmäßigen Wartung – alles aus einer Hand. Mit Fernüberwachung.
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
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Beratung & Planung</h3>
                <p className="text-gray-700 leading-relaxed">
                  Detaillierte Analyse Ihrer Anforderungen, Erstellung eines individuellen 
                  Sicherheitskonzepts. Auswahl der optimalen Alarmanlage für Ihr Objekt.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  🔧
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Professionelle Installation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Installation durch zertifizierte Techniker mit modernster Technologie. 
                  Integration in bestehende Systeme, Smart-Home-Anbindung möglich.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center text-white text-2xl mb-4">
                  🔄
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary-dark">Wartung & Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Regelmäßige Wartung, Updates und 24/7 Support. Maximale Systemverfügbarkeit 
                  durch professionelle Betreuung. Fernüberwachung möglich.
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
              'Individuelle Planung',
              'Professionelle Installation',
              'Bewegungsmelder',
              'Fenster- und Türkontakte',
              'Glasbruchmelder',
              'Notruf- und Panikfunktion',
              'Fernüberwachung',
              'Wartung & Service',
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
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Gewerbeobjekte</h3>
              <p className="text-gray-700 mb-4">
                Umfassende Alarmsysteme für Geschäfte, Büros und Gewerbeimmobilien. 
                Integration mit Videoüberwachung, Zugangskontrolle möglich.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Einzelhandelsgeschäft in Berlin mit Lagerbereich
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Industrieanlagen</h3>
              <p className="text-gray-700 mb-4">
                Spezialisierte Alarmsysteme für Produktionsstätten und Lagerhallen. 
                Integration mit Brandmeldeanlagen, Werkschutz.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Produktionshalle in Leverkusen mit Hochregallager
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Privathäuser</h3>
              <p className="text-gray-700 mb-4">
                Moderne Alarmsysteme für Ein- und Mehrfamilienhäuser. Smart-Home-Integration, 
                mobile Apps, Fernüberwachung.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Einfamilienhaus in München mit Smart-Home-Anbindung
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Leerstehende Immobilien</h3>
              <p className="text-gray-700 mb-4">
                Alarmsysteme für leerstehende Gebäude während Verkaufs- oder Renovierungsphasen. 
                Fernüberwachung, sofortige Alarmierung.
              </p>
              <div className="text-sm text-gray-600">
                Beispiel: Ehemaliges Bürogebäude in Hamburg während Verkauf
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
                <h3 className="text-xl font-semibold mb-3">Zertifizierte Techniker</h3>
                <p className="text-gray-300">
                  Alle Techniker sind zertifiziert und regelmäßig geschult. Installation 
                  nach höchsten Qualitätsstandards, Integration in bestehende Systeme.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Fernüberwachung</h3>
                <p className="text-gray-300">
                  Optional: Fernüberwachung durch unsere Sicherheitszentrale. Sofortige 
                  Reaktion bei Alarmmeldungen, Koordination mit Notfalldienst.
                </p>
              </div>
              <div className="bg-primary-steel p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Moderne Technologie</h3>
                <p className="text-gray-300">
                  Smart-Home-Integration, mobile Apps, Cloud-Anbindung. Moderne Alarmsysteme 
                  mit neuester Technologie für maximale Sicherheit.
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
              Professionelle Alarmanlagen
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Lassen Sie uns gemeinsam die optimale Alarmanlage für Ihr Objekt entwickeln.
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


