'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-dark text-white p-6 shadow-2xl z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.{' '}
              <Link href="/cookies" className="text-accent-orange underline">
                Mehr erfahren
              </Link>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleReject}
              className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-primary-dark transition-colors"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-accent-orange rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


