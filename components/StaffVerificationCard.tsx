interface StaffVerificationCardProps {
  name: string
  role: string
  id: string
  photo: string
  trainings: string[]
}

export default function StaffVerificationCard({
  name,
  role,
  id,
  photo,
  trainings,
}: StaffVerificationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all">
      <div className="h-64 bg-gradient-to-br from-primary-dark to-primary-steel relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-gray-300 text-sm">{role}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4 pb-4 border-b">
          <div className="text-sm text-gray-500 mb-1">Personalausweis</div>
          <div className="font-mono text-primary-dark">{id}</div>
        </div>
        
        <div>
          <div className="text-sm text-gray-500 mb-2">Ausbildungen & Zertifikate</div>
          <div className="space-y-2">
            {trainings.map((training, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-accent-orange">✓</span>
                <span className="text-sm text-gray-700">{training}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


