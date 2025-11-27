'use client'

import { useState } from 'react'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary-dark to-primary-steel text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Kontakt
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Wir sind 24/7 für Sie erreichbar. Kontaktieren Sie uns telefonisch, 
            per E-Mail oder nutzen Sie unser Kontaktformular.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary-dark">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white text-xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                    <a href="tel:+491234567890" className="text-gray-700 hover:text-accent-orange">
                      +49 123 456 7890
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 erreichbar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white text-xl">
                    💬
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/491234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-accent-orange"
                    >
                      +49 123 456 7890
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Schnelle Antwort garantiert</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white text-xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-Mail</h3>
                    <a href="mailto:info@team24security.de" className="text-gray-700 hover:text-accent-orange">
                      info@team24security.de
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Wir antworten innerhalb von 24 Stunden</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-orange rounded-full flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-700">
                      Team24Security GmbH<br />
                      Musterstraße 123<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/491234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <span>💬</span>
                  <span>WhatsApp Chat starten</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary-dark">
                Nachricht senden
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary-dark text-center">
            So finden Sie uns
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-96 bg-gray-200 rounded flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-4">📍</div>
                  <div>Google Maps wird hier geladen</div>
                  <div className="text-sm mt-2">Musterstraße 123, 12345 Musterstadt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


