export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-primary-dark">Cookie-Richtlinie</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Was sind Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie eine Website besuchen. 
              Sie werden verwendet, um die Website für Sie funktionsfähig zu machen oder zu verbessern und um Informationen 
              über die Nutzung der Website zu erhalten.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Wie verwenden wir Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
              Die meisten Cookies, die wir verwenden, sind sogenannte "Session-Cookies", die nach dem 
              Schließen Ihres Browsers automatisch gelöscht werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Arten von Cookies</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary-dark">Notwendige Cookies</h3>
            <p className="text-gray-700 mb-4">
              Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich. Sie können 
              nicht deaktiviert werden.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary-dark">Funktionale Cookies</h3>
            <p className="text-gray-700 mb-4">
              Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung 
              bereitzustellen.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary-dark">Analytische Cookies</h3>
            <p className="text-gray-700 mb-4">
              Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem 
              Informationen anonym gesammelt und gemeldet werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Cookie-Verwaltung</h2>
            <p className="text-gray-700 mb-4">
              Sie können Cookies in den Einstellungen Ihres Browsers verwalten und löschen. Bitte beachten Sie, 
              dass das Deaktivieren von Cookies die Funktionalität dieser Website beeinträchtigen kann.
            </p>
            <p className="text-gray-700 mb-4">
              Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser so einstellen, dass 
              Cookies abgelehnt werden oder Sie benachrichtigt werden, wenn Cookies gesendet werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Ihre Einwilligung</h2>
            <p className="text-gray-700 mb-4">
              Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß dieser Cookie-Richtlinie zu. 
              Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die Cookie-Einstellungen in Ihrem Browser ändern.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Kontakt</h2>
            <p className="text-gray-700 mb-4">
              Bei Fragen zu unserer Cookie-Richtlinie können Sie uns jederzeit kontaktieren:
            </p>
            <p className="text-gray-700">
              Team24Security GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              <br />
              E-Mail: info@team24security.de<br />
              Telefon: +49 123 456 7890
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


