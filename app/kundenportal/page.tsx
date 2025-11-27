export default function KundenportalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-primary-dark to-primary-steel text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Kundenportal</h1>
          <p className="text-gray-300 mt-2">Zugriff auf alle Ihre Sicherheitsdaten</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded">
          <p className="text-yellow-800">
            <strong>Hinweis:</strong> Dies ist eine Vorschau des Kundenportals. 
            Die vollständige Funktionalität wird nach Vertragsabschluss freigeschaltet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Aktive Vorfälle</h2>
            <div className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4">
                <div className="font-semibold">Vorfall #2024-001</div>
                <div className="text-sm text-gray-600">Alarm ausgelöst - Gebäude A</div>
                <div className="text-xs text-gray-500 mt-1">Vor 15 Minuten</div>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <div className="font-semibold">Vorfall #2024-002</div>
                <div className="text-sm text-gray-600">Unbefugter Zugang - Eingang Nord</div>
                <div className="text-xs text-gray-500 mt-1">Vor 2 Stunden</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Patrouillen</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Route A</div>
                  <div className="text-sm text-gray-600">Aktuell aktiv</div>
                </div>
                <div className="text-green-500">●</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Route B</div>
                  <div className="text-sm text-gray-600">Nächste in 30 Min</div>
                </div>
                <div className="text-gray-400">○</div>
              </div>
              <div className="mt-4">
                <a href="#" className="text-accent-orange hover:underline">
                  Alle Routen ansehen →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Systemstatus</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>CCTV Kameras</span>
                <span className="text-green-500 font-semibold">98% Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Alarmsysteme</span>
                <span className="text-green-500 font-semibold">Alle aktiv</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Zugangskontrolle</span>
                <span className="text-green-500 font-semibold">Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Kamera-Ansichten</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-32 bg-gray-900 rounded overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-gray-500 text-xs">Kamera {i}</div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 px-2 py-1 rounded text-xs text-white">
                    [BLUR]
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              * Aus Datenschutzgründen werden Live-Ansichten nur nach Authentifizierung angezeigt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark">Berichte & Dokumente</h2>
            <div className="space-y-3">
              {[
                { name: 'Tagesbericht 15.01.2024', date: '15.01.2024', type: 'PDF' },
                { name: 'Wochenbericht KW 02', date: '12.01.2024', type: 'PDF' },
                { name: 'Monatsbericht Dezember 2023', date: '31.12.2023', type: 'PDF' },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <div className="font-semibold">{doc.name}</div>
                    <div className="text-sm text-gray-600">{doc.date}</div>
                  </div>
                  <button className="bg-accent-orange text-white px-4 py-2 rounded hover:bg-opacity-90">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-primary-dark">GPS Route Tracking</h2>
          <div className="h-64 bg-gray-200 rounded flex items-center justify-center">
            <div className="text-gray-500">Karte wird geladen...</div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Live-Tracking Ihrer Sicherheitspatrouillen und Transporte in Echtzeit.
          </p>
        </div>
      </div>
    </div>
  )
}


