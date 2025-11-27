'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface ProblemSelectorProps {
  selectedProblem: string | null
  onSelect: (problem: string | null) => void
}

const problems = [
  {
    id: 'building',
    title: 'Ich möchte mein Gebäude schützen',
    description: 'Rund um die Uhr Objektschutz für Ihre Immobilie',
    image: 'https://via.placeholder.com/600x400/1C1F26/FFFFFF?text=Gebäudeschutz',
    cta: 'Objektschutz anfragen',
    href: '/services/objektschutz',
  },
  {
    id: 'personal',
    title: 'Ich suche Personenschutz / Geldtransport',
    description: 'Diskreter Schutz für Personen und sichere Geldtransporte',
    image: 'https://via.placeholder.com/600x400/1C1F26/FFFFFF?text=Personenschutz',
    cta: 'Personenschutz anfragen',
    href: '/services/personenschutz',
  },
]

export default function ProblemSelector({ selectedProblem, onSelect }: ProblemSelectorProps) {
  const [activeProblem, setActiveProblem] = useState<string | null>(selectedProblem || problems[0].id)

  useEffect(() => {
    if (selectedProblem) {
      setActiveProblem(selectedProblem)
    }
  }, [selectedProblem])

  const currentProblem = problems.find(p => p.id === activeProblem) || problems[0]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
          Wie können wir Ihnen helfen?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <button
              key={problem.id}
              onClick={() => {
                setActiveProblem(problem.id)
                onSelect(problem.id)
              }}
              className={`p-6 rounded-lg border-2 text-left transition-all ${
                activeProblem === problem.id
                  ? 'border-accent-orange bg-accent-orange bg-opacity-10 shadow-lg'
                  : 'border-gray-300 hover:border-primary-dark'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-dark to-primary-steel rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${currentProblem.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-4">{currentProblem.title}</h3>
              <p className="text-xl mb-6 text-gray-300">{currentProblem.description}</p>
              <p className="mb-8 text-gray-400">
                Wir bieten maßgeschneiderte Sicherheitslösungen für Ihre individuellen Anforderungen. 
                Unsere erfahrenen Sicherheitsfachkräfte und moderne Technologie gewährleisten 
                höchste Sicherheitsstandards.
              </p>
              <Link
                href={currentProblem.href}
                className="bg-accent-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors inline-block text-center"
              >
                {currentProblem.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

