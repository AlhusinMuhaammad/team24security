'use client'

import { useState } from 'react'
import HeroSplit from '@/components/HeroSplit'
import ProblemSelector from '@/components/ProblemSelector'
import TrustStrip from '@/components/TrustStrip'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyPreview from '@/components/CaseStudyPreview'

export default function Home() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null)

  const services = [
    {
      title: 'Objektschutz',
      description: 'Rund um die Uhr Schutz für Ihre Immobilien',
      icon: '🏢',
      href: '/services/objektschutz',
    },
    {
      title: 'Werkschutz',
      description: 'Professioneller Werkschutz für Industrieanlagen',
      icon: '🏭',
      href: '/services/werkschutz',
    },
    {
      title: 'Geldtransport',
      description: 'Sichere Geldtransporte mit gepanzerten Fahrzeugen',
      icon: '💰',
      href: '/services/geldtransport',
    },
    {
      title: 'Ordnungsdienst',
      description: 'Professioneller Ordnungsdienst für öffentliche Räume',
      icon: '👮',
      href: '/services/ordnungsdienst',
    },
    {
      title: 'Personenschutz',
      description: 'Diskret und professionell: Schutz für Personen',
      icon: '👤',
      href: '/services/personenschutz',
    },
    {
      title: 'Detektei & Observation',
      description: 'Professionelle Ermittlungen und Observationen',
      icon: '🔍',
      href: '/services/detektei-observation',
    },
    {
      title: 'Empfangs- & Pfortendienst',
      description: 'Professioneller Empfang mit Sicherheitskomponente',
      icon: '🚪',
      href: '/services/empfangs-pfortendienst',
    },
    {
      title: 'Alarmanlagen',
      description: 'Installation & Wartung von Alarmanlagen',
      icon: '🚨',
      href: '/services/alarmanlagen',
    },
    {
      title: 'Videoüberwachung',
      description: 'Installation & Monitoring von Videoüberwachung',
      icon: '📹',
      href: '/services/videoüberwachung',
    },
  ]

  return (
    <div className="min-h-screen">
      <TrustStrip />
      <HeroSplit />
      <ProblemSelector 
        selectedProblem={selectedProblem}
        onSelect={setSelectedProblem}
      />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
            Unsere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyPreview />
    </div>
  )
}
