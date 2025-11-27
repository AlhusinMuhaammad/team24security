import Link from 'next/link'

export default function HeroSplit() {
  return (
    <section className="min-h-[600px] flex items-center bg-gradient-to-r from-primary-dark to-primary-steel text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sicherheit, die{' '}
              <span className="text-accent-orange">vertrauenswürdig</span> ist
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Professioneller Sicherheitsdienst für Unternehmen, Events und Privatpersonen. 
              Mit modernster Technologie und erfahrenem Personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/angebot"
                className="bg-accent-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors text-center"
              >
                Jetzt Angebot anfordern
              </Link>
              <Link
                href="/kontakt"
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-dark transition-colors text-center"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary-steel">
              <div className="absolute inset-0 bg-[url('https://via.placeholder.com/800x600/0B2340/FFFFFF?text=Security+Team')] bg-cover bg-center opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


