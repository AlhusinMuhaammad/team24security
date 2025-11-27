'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  const navItems = [
    { label: 'Leistungen', href: '/services' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Technologie', href: '/technologie' },
    { label: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <header className="bg-primary-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
            {!logoError ? (
              <div className="relative h-20 w-auto md:h-40 md:w-auto flex-shrink-0">
                <Image
                  src="/images/logo-main.png"
                  alt="Team24Security Logo"
                  width={560}
                  height={224}
                  className="object-contain h-full w-auto"
                  priority
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : null}
            <span className="hidden md:inline text-2xl md:text-3xl font-bold">
              Team24<span className="text-accent-orange">Security</span>
            </span>
            {logoError && (
              <span className="md:hidden text-xl font-bold">
                Team24<span className="text-accent-orange">Security</span>
              </span>
            )}
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-accent-orange transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/angebot"
            className="hidden md:block bg-accent-orange px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Angebot anfordern
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 hover:text-accent-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/angebot"
              className="block mt-4 bg-accent-orange px-6 py-2 rounded-lg font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Angebot anfordern
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
