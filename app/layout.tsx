import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: 'Team24Security - Professioneller Sicherheitsdienst',
  description: 'Professioneller Sicherheitsdienst für Objektschutz, Werkschutz, Personenschutz, Geldtransport und mehr. 24/7 erreichbar.',
  keywords: 'Sicherheitsdienst, Objektschutz, Wachschutz, Sicherheitsfirma, Geldtransport, Personenschutz, Videoüberwachung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
