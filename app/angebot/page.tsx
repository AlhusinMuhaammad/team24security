import QuoteWizard from '@/components/QuoteWizard'

export default function AngebotPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 text-primary-dark">
              Angebot anfordern
            </h1>
            <p className="text-xl text-gray-600">
              Füllen Sie das Formular aus und wir erstellen Ihnen ein individuelles Angebot 
              für Ihre Sicherheitsanforderungen.
            </p>
          </div>

          <QuoteWizard />

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary-dark">
              Preisübersicht (Richtwerte)
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">Objektschutz (pro Stunde)</span>
                <span className="font-semibold text-primary-dark">ab 25€</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">Werkschutz (pro Stunde)</span>
                <span className="font-semibold text-primary-dark">ab 28€</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">Personenschutz (pro Stunde)</span>
                <span className="font-semibold text-primary-dark">ab 45€</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">Geldtransport (pro Transport)</span>
                <span className="font-semibold text-primary-dark">ab 150€</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">Ordnungsdienst (pro Stunde)</span>
                <span className="font-semibold text-primary-dark">ab 30€</span>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                * Alle Preise sind Richtwerte. Das finale Angebot richtet sich nach 
                Ihren individuellen Anforderungen und dem Umfang der Leistungen.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


