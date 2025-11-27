import Link from 'next/link'

interface CaseStudyTileProps {
  title: string
  problem: string
  solution: string
  result: string
  kpis: { label: string; value: string }[]
  client: string
  href?: string
}

export default function CaseStudyTile({
  title,
  problem,
  solution,
  result,
  kpis,
  client,
  href = '#',
}: CaseStudyTileProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
      <div className="h-48 bg-gradient-to-br from-primary-dark to-primary-steel relative">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/600x400/0B2340/FFFFFF?text=Case+Study')] bg-cover bg-center opacity-30"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{client}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-semibold text-primary-dark mb-2">Problem</h4>
          <p className="text-gray-600 text-sm">{problem}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-primary-dark mb-2">Lösung</h4>
          <p className="text-gray-600 text-sm">{solution}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-primary-dark mb-2">Ergebnis</h4>
          <p className="text-gray-600 text-sm">{result}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t">
          {kpis.map((kpi, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-accent-orange">{kpi.value}</div>
              <div className="text-sm text-gray-600">{kpi.label}</div>
            </div>
          ))}
        </div>
        
        {href !== '#' && (
          <Link
            href={href}
            className="text-accent-orange font-semibold hover:underline inline-block"
          >
            Details ansehen →
          </Link>
        )}
      </div>
    </div>
  )
}


