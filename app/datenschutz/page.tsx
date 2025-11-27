export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-primary-dark">Datenschutzerklärung</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary-dark">Allgemeine Hinweise</h3>
            <p className="text-gray-700 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary-dark">Datenerfassung auf dieser Website</h3>
            <p className="text-gray-700 mb-2">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            </p>
            <p className="text-gray-700 mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">2. Hosting</h2>
            <p className="text-gray-700 mb-4">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
              die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary-dark">Datenschutz</h3>
            <p className="text-gray-700 mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen 
              sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary-dark">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-gray-700 mb-2">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-gray-700 mb-4">
              Team24Security GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              <br />
              Telefon: +49 123 456 7890<br />
              E-Mail: info@team24security.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary-dark">Kontaktformular</h3>
            <p className="text-gray-700 mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-primary-dark">Cookies</h3>
            <p className="text-gray-700 mb-4">
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen 
              Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver 
              und sicherer zu machen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">5. Ihre Rechte</h2>
            <p className="text-gray-700 mb-4">
              Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. 
              Außerdem haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung, ein Widerspruchsrecht 
              gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit.
            </p>
            <p className="text-gray-700 mb-4">
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-dark">6. Videoüberwachung</h2>
            <p className="text-gray-700 mb-4">
              Falls wir für Sie Videoüberwachungsanlagen installieren oder betreiben, erfolgt dies stets DSGVO-konform. 
              Wir informieren Sie über die rechtlichen Anforderungen, erstellen notwendige Hinweisschilder und unterstützen 
              Sie bei der Erstellung der Datenschutzerklärung für die Videoüberwachung.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


