import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Objektschutz',
      description: 'Rund um die Uhr Schutz für Ihre Immobilien, Gebäude und Anlagen',
      icon: '🏢',
      href: '/services/objektschutz',
    },
    {
      title: 'Werkschutz',
      description: 'Professioneller Werkschutz für Industrieanlagen und Produktionsstätten',
      icon: '🏭',
      href: '/services/werkschutz',
    },
    {
      title: 'Geldtransport',
      description: 'Sichere Geldtransporte mit gepanzerten Fahrzeugen und geschultem Personal',
      icon: '💰',
      href: '/services/geldtransport',
    },
    {
      title: 'Ordnungsdienst',
      description: 'Professioneller Ordnungsdienst für öffentliche Räume und Veranstaltungen',
      icon: '👮',
      href: '/services/ordnungsdienst',
    },
    {
      title: 'Personenschutz',
      description: 'Diskret und professionell: Schutz für Personen in besonderen Situationen',
      icon: '👤',
      href: '/services/personenschutz',
    },
    {
      title: 'Detektei & Observation',
      description: 'Professionelle Ermittlungen und Observationen. Diskret, gründlich, rechtssicher',
      icon: '🔍',
      href: '/services/detektei-observation',
    },
    {
      title: 'Empfangs- & Pfortendienst',
      description: 'Professioneller Empfang mit Sicherheitskomponente. Service und Sicherheit kombiniert',
      icon: '🚪',
      href: '/services/empfangs-pfortendienst',
    },
    {
      title: 'Alarmanlagen',
      description: 'Installation & Wartung von Alarmanlagen. Mit Fernüberwachung und Smart-Home-Integration',
      icon: '🚨',
      href: '/services/alarmanlagen',
    },
    {
      title: 'Videoüberwachung',
      description: 'Installation & Monitoring von Videoüberwachung. DSGVO-konform, 24/7 Monitoring',
      icon: '📹',
      href: '/services/videoüberwachung',
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-dark to-primary-steel text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Umfassende Sicherheitsdienstleistungen für Unternehmen, Events und Privatpersonen. 
            Professionell, zuverlässig und technologisch auf dem neuesten Stand.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Maßgeschneiderte Sicherheitslösungen
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Jedes Unternehmen hat individuelle Sicherheitsanforderungen. Lassen Sie uns gemeinsam 
            die optimale Lösung für Sie entwickeln.
          </p>
          <Link
            href="/angebot"
            className="bg-accent-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors inline-block"
          >
            Jetzt unverbindliches Angebot einholen
          </Link>
        </div>
      </section>
    </div>
  )
}

