import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-accent-orange group"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-primary-dark group-hover:text-accent-orange transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4 text-accent-orange font-semibold group-hover:underline">
        Mehr erfahren →
      </div>
    </Link>
  )
}


