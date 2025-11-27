import Link from 'next/link'

export default function CaseStudyPreview() {
  return (
    <section 
      className="py-40 bg-primary-dark text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/24 security cover 1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-primary-dark opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ihr Partner für Sicherheit
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Wir bieten maßgeschneiderte Sicherheitslösungen für Unternehmen, Veranstaltungen und Privatpersonen. Mit modernster Technologie, qualifiziertem Personal und bewährten Sicherheitskonzepten schützen wir Ihre Werte und sorgen für Ihr Wohlbefinden.
            </p>
            <Link
              href="/angebot"
              className="bg-accent-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors inline-block"
            >
              Jetzt Angebot anfordern
            </Link>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="text-accent-orange text-2xl">✓</div>
              <div>
                <h4 className="font-semibold mb-1">24/7 Verfügbarkeit</h4>
                <p className="text-gray-400">Rund um die Uhr für Sie da - Notfallbereitschaft und schnelle Reaktionszeiten</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-accent-orange text-2xl">✓</div>
              <div>
                <h4 className="font-semibold mb-1">Zertifiziertes Personal</h4>
                <p className="text-gray-400">Qualifizierte Sicherheitsfachkräfte nach §34a GewO mit regelmäßiger Weiterbildung</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-accent-orange text-2xl">✓</div>
              <div>
                <h4 className="font-semibold mb-1">Moderne Technologie</h4>
                <p className="text-gray-400">Innovative Sicherheitssysteme und DSGVO-konforme Lösungen für maximale Effizienz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


