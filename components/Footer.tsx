'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
  const [logoError, setLogoError] = useState(false)
  const serviceRegions: string[] = []

  const certifications = [
    { name: '§34a GewO', icon: '✓' },
    { name: 'ISO 9001', icon: '✓' },
    { name: 'DIN EN 16005', icon: '✓' },
    { name: 'DSGVO-konform', icon: '✓' },
  ]

  return (
    <footer className="bg-primary-black text-white">
      {/* Rapid Contact Panel */}
      <div className="bg-primary-steel border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">24/7 Notfall</div>
                <a href="tel:+491722363102" className="text-lg font-bold hover:text-accent-orange transition-colors">
                  01722363102
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">💬</span>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">WhatsApp</div>
                <a 
                  href="https://wa.me/491722363102" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:text-green-400 transition-colors"
                >
                  01722363102
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">✉️</span>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">E-Mail</div>
                <a href="mailto:info@team24security.de" className="text-lg font-bold hover:text-blue-400 transition-colors">
                  info@team24security.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mission Statement */}
          <div>
            <Link href="/" className="flex items-center gap-0 mb-4 hover:opacity-90 transition-opacity -ml-6 md:-ml-12">
              {!logoError ? (
                <>
                  <div className="relative h-16 w-auto md:h-32 md:w-auto flex-shrink-0">
                    <Image
                      src="/images/logo-main.png"
                      alt="Team24Security Logo"
                      width={560}
                      height={224}
                      className="object-contain h-full w-auto"
                      onError={() => setLogoError(true)}
                    />
                  </div>
                  <span className="hidden md:inline text-xl md:text-2xl font-bold text-white">
                    Team24<span className="text-accent-orange">Security</span>
                  </span>
                  <span className="md:hidden text-lg font-bold text-white">
                    Team24<span className="text-accent-orange">Security</span>
                  </span>
                </>
              ) : (
                <h3 className="text-2xl font-bold text-white">
                  Team24<span className="text-accent-orange">Security</span>
                </h3>
              )}
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Wir sind ein frisches Sicherheitsunternehmen, das sich darauf konzentriert, Unternehmen, 
              Veranstaltungen und Personen in Deutschland zu schützen. Mit qualifiziertem Personal, 
              modernster Technologie und präzisen Sicherheitskonzepten gewährleisten wir höchste Standards.
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-accent-orange">●</span>
                <span>Zertifiziert nach §34a Bewachungsgewerbe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-orange">●</span>
                <span>Vollversichert und haftpflichtversichert</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-orange">●</span>
                <span>24/7 Einsatzbereitschaft</span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-500 mt-4">
              <div>Musterstrase</div>
            </div>
          </div>

          {/* Service Regions Map Preview */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Einsatzgebiete</h4>
            <div className="bg-primary-steel rounded-lg p-6 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-4 gap-1 h-full">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="border border-white"></div>
                  ))}
                </div>
              </div>
              <div className="relative h-48 bg-gradient-to-br from-primary-steel to-primary-dark rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <div className="text-sm text-gray-400">Deutschlandweite Abdeckung</div>
                </div>
              </div>
            </div>
            {serviceRegions.length === 0 ? (
              <div className="text-sm text-gray-400 space-y-2">
                <p>Frische Gründung – wir planen derzeit neue Einsatzgebiete.</p>
                <Link href="/kontakt" className="inline-block text-accent-orange font-semibold hover:underline">
                  Jetzt Kontakt aufnehmen →
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 text-sm">
                {serviceRegions.map((region, index) => (
                  <div key={index} className="text-gray-400 hover:text-white transition-colors">
                    {region}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Micro Menu & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Navigation</h4>
            <div className="space-y-3 mb-8">
              <Link href="/services" className="block text-gray-400 hover:text-accent-orange transition-colors">
                Leistungen
              </Link>
              <Link href="/technologie" className="block text-gray-400 hover:text-accent-orange transition-colors">
                Technologie & Operations
              </Link>
              <Link href="/ueber-uns" className="block text-gray-400 hover:text-accent-orange transition-colors">
                Unternehmen
              </Link>
              <Link href="/kontakt" className="block text-gray-400 hover:text-accent-orange transition-colors">
                Kontakt
              </Link>
              <Link href="/angebot" className="block text-accent-orange font-semibold hover:text-accent-orange hover:underline">
                Angebot anfordern →
              </Link>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <div className="space-y-2 text-sm">
                <Link href="/impressum" className="block text-gray-500 hover:text-gray-300 transition-colors">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="block text-gray-500 hover:text-gray-300 transition-colors">
                  Datenschutz
                </Link>
                <Link href="/agb" className="block text-gray-500 hover:text-gray-300 transition-colors">
                  AGB
                </Link>
                <Link href="/cookies" className="block text-gray-500 hover:text-gray-300 transition-colors">
                  Cookie-Richtlinie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sicherheitszertifikate Strip */}
      <div className="border-t border-gray-800 bg-primary-steel">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-xs text-gray-400 uppercase tracking-wider">Zertifizierungen:</div>
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent-orange rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {cert.icon}
                </div>
                <span className="text-sm font-semibold">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-primary-black">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Team24Security GmbH. Alle Rechte vorbehalten.</p>
            <p>Handelsregister: HRB 12345 | Amtsgericht Musterstadt</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
