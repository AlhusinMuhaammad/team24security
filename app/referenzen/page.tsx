import CaseStudyTile from '@/components/CaseStudyTile'

export default function ReferenzenPage() {
  const caseStudies = [
    {
      title: 'Industrieunternehmen Süddeutschland',
      problem: 'Wiederholte Sicherheitsvorfälle und Diebstähle auf dem Werksgelände führten zu erheblichen Verlusten und Sicherheitsbedenken.',
      solution: 'Implementierung eines umfassenden Sicherheitskonzepts mit 24/7 Werkschutz, moderner Videoüberwachung und regelmäßigen Patrouillen.',
      result: 'Dramatische Reduzierung der Sicherheitsvorfälle und Wiederherstellung des Sicherheitsgefühls bei Mitarbeitern und Management.',
      kpis: [
        { label: 'Reduzierung Vorfälle', value: '85%' },
        { label: 'Response Time', value: '< 3 Min' },
      ],
      client: 'Industrieunternehmen Süddeutschland',
    },
    {
      title: 'Großveranstaltung München',
      problem: 'Sicherheitskonzept für eine Großveranstaltung mit über 50.000 Besuchern benötigte professionelle Planung und Durchführung.',
      solution: 'Koordination von 120 Sicherheitsfachkräften, Zugangskontrolle, Crowd Management und enge Zusammenarbeit mit Behörden.',
      result: 'Reibungslose Durchführung der Veranstaltung ohne größere Vorfälle. Positive Rückmeldungen von Veranstalter und Besuchern.',
      kpis: [
        { label: 'Besucher', value: '50.000+' },
        { label: 'Einsatzkräfte', value: '120' },
      ],
      client: 'Veranstaltungsgesellschaft München',
    },
    {
      title: 'Einzelhandelskette',
      problem: '24/7 Objektschutz für 120 Filialen einer Einzelhandelskette mit unterschiedlichen Sicherheitsanforderungen.',
      solution: 'Zentralisiertes Sicherheitskonzept mit lokalen Sicherheitsfachkräften, einheitlichen Prozessen und digitalem Reporting.',
      result: 'Kosteneffiziente Sicherheitslösung mit hoher Qualität und vollständiger Transparenz für alle Standorte.',
      kpis: [
        { label: 'Geschützte Standorte', value: '120' },
        { label: 'Verfügbarkeit', value: '99.8%' },
      ],
      client: 'Einzelhandelskette',
    },
    {
      title: 'Bürokomplex Frankfurt',
      problem: 'Mehrstöckiger Bürokomplex benötigte professionellen Empfangsdienst und Objektschutz für mehrere Mieter.',
      solution: 'Empfangsdienst mit Sicherheitskomponente, Zugangskontrolle und 24/7 Objektschutz für das gesamte Gebäude.',
      result: 'Erhöhte Zufriedenheit der Mieter, professioneller Empfang und verbesserte Sicherheit im gesamten Gebäude.',
      kpis: [
        { label: 'Zufriedenheit Mieter', value: '98%' },
        { label: 'Besucher pro Tag', value: '500+' },
      ],
      client: 'Immobilienverwaltung Frankfurt',
    },
    {
      title: 'Geldtransport-Lösung',
      problem: 'Regelmäßige Geldtransporte zwischen Filialen einer Bankenkette benötigten sichere und zuverlässige Abwicklung.',
      solution: 'Gepanzerte Transportfahrzeuge, geschultes Personal und GPS-Tracking für alle Transporte mit flexibler Terminplanung.',
      result: '100% sichere Transports ohne Vorfälle. Verbesserte Effizienz durch optimierte Routenplanung.',
      kpis: [
        { label: 'Transports pro Monat', value: '500+' },
        { label: 'Sicherheit', value: '100%' },
      ],
      client: 'Regionalbank',
    },
    {
      title: 'Produktionsstätte Chemieindustrie',
      problem: 'Hochsicherheitsanlage in der Chemieindustrie benötigte spezialisierten Werkschutz mit besonderen Anforderungen.',
      solution: 'Speziell geschultes Personal für Chemieindustrie, Brandschutz-Überwachung und Notfallmanagement-Koordination.',
      result: 'Höchste Sicherheitsstandards erfüllt. Positive Audits und Zertifizierungen bestanden.',
      kpis: [
        { label: 'Audit-Ergebnis', value: 'Exzellent' },
        { label: 'Notfall-Response', value: '< 2 Min' },
      ],
      client: 'Chemieunternehmen',
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-dark to-primary-steel text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Referenzen & Case Studies
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Erfolgreiche Projekte aus verschiedenen Branchen. Sehen Sie, wie wir 
            Unternehmen dabei helfen, ihre Sicherheitsanforderungen zu erfüllen.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyTile key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Werden Sie unser nächster Erfolg
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Lassen Sie uns gemeinsam eine maßgeschneiderte Sicherheitslösung für Ihr Unternehmen entwickeln.
          </p>
          <a
            href="/angebot"
            className="bg-accent-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors inline-block"
          >
            Jetzt Angebot anfordern
          </a>
        </div>
      </section>
    </div>
  )
}


