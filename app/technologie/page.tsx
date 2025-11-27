import DashboardPreview from '@/components/DashboardPreview'

export default function TechnologiePage() {
  const equipment = [
    {
      icon: '📹',
      title: 'Videoüberwachung',
      description: 'HD- und 4K-Kameras mit Nachtsicht und Bewegungserkennung',
    },
    {
      icon: '🚨',
      title: 'Alarmsysteme',
      description: 'Moderne Alarmanlagen mit Fernüberwachung und Smart-Home-Integration',
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Echtzeit-Updates und Zugriff auf alle Sicherheitsdaten über mobile Apps',
    },
    {
      icon: '📍',
      title: 'GPS-Tracking',
      description: 'Live-Tracking von Patrouillen und Transporten für maximale Transparenz',
    },
    {
      icon: '🔐',
      title: 'Zugangskontrolle',
      description: 'Moderne Zugangskontrollsysteme mit biometrischer Erkennung',
    },
    {
      icon: '💻',
      title: 'Dashboard & Analytics',
      description: 'Umfassende Dashboards mit Echtzeit-Analysen und Berichten',
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-dark to-primary-steel text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Operations & Technologie
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Moderne Technologie für maximale Sicherheit. Wir kombinieren erfahrenes Personal 
            mit innovativen Technologien für optimale Ergebnisse.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
            Operations Dashboard
          </h2>
          <div className="max-w-6xl mx-auto">
            <DashboardPreview />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
            Unsere Technologie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary-dark">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">
              DSGVO-konforme Videoüberwachung
            </h3>
            <p className="text-blue-800 mb-4">
              Alle unsere Videoüberwachungssysteme werden vollständig DSGVO-konform betrieben. 
              Wir unterstützen Sie bei:
            </p>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Erstellung von Datenschutzerklärungen</li>
              <li>Anbringung von Hinweisschildern</li>
              <li>Rechtssichere Speicherung und Löschung</li>
              <li>Zugriffsrechte und Berechtigungskonzepte</li>
              <li>Regelmäßige Compliance-Prüfungen</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Technologie trifft Erfahrung
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Unsere Kombination aus modernster Technologie und erfahrenem Personal 
                gewährleistet höchste Sicherheitsstandards. Wir nutzen innovative 
                Lösungen, um Ihre Assets optimal zu schützen.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange">✓</span>
                  <span>Echtzeit-Monitoring und schnelle Reaktionszeiten</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange">✓</span>
                  <span>Vollständige Transparenz durch digitale Dokumentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange">✓</span>
                  <span>Skalierbare Lösungen für jede Unternehmensgröße</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-orange">✓</span>
                  <span>24/7 Support und Wartung</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-steel to-primary-dark">
                <div className="absolute inset-0 bg-[url('https://via.placeholder.com/800x600/1C1F26/FFFFFF?text=Technology')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 grid grid-cols-8 gap-1 opacity-10">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-white"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


