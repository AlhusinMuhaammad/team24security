import StaffVerificationCard from '@/components/StaffVerificationCard'

export default function UeberUnsPage() {
  const teamMembers = [
    {
      name: 'Michael Schmidt',
      role: 'Geschäftsführer',
      id: 'PS-2024-001',
      photo: 'https://via.placeholder.com/400x400/1C1F26/FFFFFF?text=MS',
      trainings: ['§34a Bewachungsgewerbe', 'Brandschutz', 'Deeskalation', 'Führungskraft'],
    },
    {
      name: 'Sarah Weber',
      role: 'Operations Manager',
      id: 'PS-2024-002',
      photo: 'https://via.placeholder.com/400x400/1C1F26/FFFFFF?text=SW',
      trainings: ['§34a Bewachungsgewerbe', 'Projektmanagement', 'Sicherheitstechnik'],
    },
    {
      name: 'Thomas Müller',
      role: 'Sicherheitsfachkraft',
      id: 'PS-2024-003',
      photo: 'https://via.placeholder.com/400x400/1C1F26/FFFFFF?text=TM',
      trainings: ['§34a Bewachungsgewerbe', 'Erste Hilfe', 'Deeskalation', 'Zugangskontrolle'],
    },
    {
      name: 'Anna Fischer',
      role: 'Sicherheitsfachkraft',
      id: 'PS-2024-004',
      photo: 'https://via.placeholder.com/400x400/1C1F26/FFFFFF?text=AF',
      trainings: ['§34a Bewachungsgewerbe', 'Personenschutz', 'Erste Hilfe', 'Selbstverteidigung'],
    },
    {
      name: 'David Klein',
      role: 'Techniker',
      id: 'PS-2024-005',
      photo: 'https://via.placeholder.com/400x400/1C1F26/FFFFFF?text=DK',
      trainings: ['Elektrotechnik', 'Alarmanlagen', 'Videoüberwachung', 'IT-Sicherheit'],
    },
    {
      name: 'Lisa Hoffmann',
      role: 'Sicherheitsfachkraft',
      id: 'PS-2024-006',
      photo: 'https://via.placeholder.com/400x400/1C1F26/FFFFFF?text=LH',
      trainings: ['§34a Bewachungsgewerbe', 'Empfangsdienst', 'Kommunikation', 'Erste Hilfe'],
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-dark to-primary-steel text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Über uns
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Professioneller Sicherheitsdienst mit langjähriger Erfahrung und modernster Technologie.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-primary-dark text-center">
              Unsere Mission
            </h2>
            <p className="text-xl text-gray-700 mb-8 text-center">
              Wir schützen, was Ihnen wichtig ist. Mit höchster Professionalität, 
              modernster Technologie und einem Team, das Sie vertrauen können.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Unsere Geschichte
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Team24Security wurde mit der Vision gegründet, Sicherheitsdienstleistungen 
                auf ein neues Level zu heben. Wir kombinieren die Erfahrung unserer 
                Sicherheitsfachkräfte mit modernster Technologie, um unseren Kunden 
                die bestmögliche Sicherheit zu bieten.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Seit unserer Gründung haben wir hunderte von Unternehmen dabei unterstützt, 
                ihre Sicherheitsanforderungen zu erfüllen. Von kleinen Büros bis hin zu 
                großen Industrieanlagen – wir haben für jeden die passende Lösung.
              </p>
              <p className="text-lg text-gray-700">
                Unser Erfolg basiert auf drei Säulen: Qualität, Zuverlässigkeit und Innovation. 
                Wir investieren kontinuierlich in die Weiterbildung unserer Mitarbeiter und 
                in neue Technologien, um immer einen Schritt voraus zu sein.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                ✓
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-dark">Zuverlässigkeit</h3>
              <p className="text-gray-600">
                Sie können sich auf uns verlassen. 24/7, 365 Tage im Jahr.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-dark">Professionalität</h3>
              <p className="text-gray-600">
                Höchste Standards in Ausbildung, Ausrüstung und Durchführung.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-orange rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                💡
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-dark">Innovation</h3>
              <p className="text-gray-600">
                Moderne Technologie für optimale Sicherheitslösungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Zertifizierungen & Qualifikationen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              '§34a Bewachungsgewerbe',
              'ISO 9001:2015',
              'DIN EN 16005',
              'DSGVO-konform',
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl mb-3">✓</div>
                <div className="font-semibold text-primary-dark">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-primary-dark text-center">
            Unser Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <StaffVerificationCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


