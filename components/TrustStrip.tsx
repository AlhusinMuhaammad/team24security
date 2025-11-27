export default function TrustStrip() {
  return (
    <div className="bg-primary-steel text-white py-3 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-accent-orange">✓</span>
            <span>§34a Bewachungsgewerbe</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-orange">✓</span>
            <span>Versicherungsnachweise</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-orange">📞</span>
            <a href="tel:+491722363102" className="hover:text-accent-orange">
              +49 1722363102
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-orange">💬</span>
            <a href="https://wa.me/491722363102" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange">
              WhatsApp
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-orange">🕐</span>
            <span>24/7 erreichbar</span>
          </div>
        </div>
      </div>
    </div>
  )
}


