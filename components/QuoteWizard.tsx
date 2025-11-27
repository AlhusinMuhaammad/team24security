'use client'

import { useState } from 'react'

interface QuoteWizardProps {
  onComplete?: (data: any) => void
}

export default function QuoteWizard({ onComplete }: QuoteWizardProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    location: '',
    description: '',
    documents: null as File | null,
    name: '',
    email: '',
    phone: '',
    company: '',
  })

  const services = [
    'Objektschutz',
    'Werkschutz',
    'Geldtransport',
    'Ordnungsdienst',
    'Personenschutz',
    'Detektei',
    'Empfangsdienst',
    'Installation von Alarmanlagen',
    'Installation von Videoüberwachungskameras',
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, documents: e.target.files[0] })
    }
  }

  const nextStep = () => {
    if (step < 6) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    if (onComplete) {
      onComplete(formData)
    }
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.')
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  s <= step
                    ? 'bg-accent-orange text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {s}
              </div>
              {s < 6 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    s < step ? 'bg-accent-orange' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-600 text-center">
          Schritt {step} von 6
        </div>
      </div>

      <div className="min-h-[400px]">
        {step === 1 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-dark">
              Service Auswahl
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => handleInputChange('service', service)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    formData.service === service
                      ? 'border-accent-orange bg-accent-orange bg-opacity-10'
                      : 'border-gray-300 hover:border-primary-dark'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-dark">
              Datum & Uhrzeit
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Gewünschtes Datum
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Gewünschte Uhrzeit
                </label>
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-dark">
              Standort
            </h3>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Adresse / Standort
              </label>
              <textarea
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Bitte geben Sie die vollständige Adresse ein"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-dark">
              Umfang & Beschreibung
            </h3>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Beschreiben Sie Ihre Anforderungen
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={8}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                placeholder="Bitte beschreiben Sie detailliert, welche Sicherheitsleistungen Sie benötigen..."
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-dark">
              Dokumente hochladen (optional)
            </h3>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Relevante Dokumente
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                accept=".pdf,.doc,.docx,.jpg,.png"
              />
              {formData.documents && (
                <p className="mt-2 text-sm text-gray-600">
                  Ausgewählt: {formData.documents.name}
                </p>
              )}
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-dark">
              Kontaktinformationen
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Unternehmen
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-8 pt-6 border-t">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className={`px-6 py-3 rounded-lg font-semibold ${
            step === 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-primary-dark hover:bg-gray-300'
          }`}
        >
          Zurück
        </button>
        {step < 6 ? (
          <button
            onClick={nextStep}
            className="px-6 py-3 bg-accent-orange text-white rounded-lg font-semibold hover:bg-opacity-90"
          >
            Weiter
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-accent-orange text-white rounded-lg font-semibold hover:bg-opacity-90"
          >
            Absenden
          </button>
        )}
      </div>
    </div>
  )
}


