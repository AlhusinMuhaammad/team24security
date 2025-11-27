export default function DashboardPreview() {
  return (
    <div className="bg-primary-steel rounded-lg p-6 text-white">
      <h3 className="text-2xl font-bold mb-6">Operations Dashboard</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-primary-dark p-4 rounded-lg">
          <h4 className="text-sm text-gray-400 mb-2">Aktive Patrouillen</h4>
          <div className="text-3xl font-bold text-accent-orange">12</div>
        </div>
        <div className="bg-primary-dark p-4 rounded-lg">
          <h4 className="text-sm text-gray-400 mb-2">Offene Vorfälle</h4>
          <div className="text-3xl font-bold text-green-400">2</div>
        </div>
      </div>

      <div className="bg-primary-dark p-4 rounded-lg mb-6">
        <h4 className="text-sm text-gray-400 mb-4">GPS Route Tracking</h4>
        <div className="h-48 bg-black bg-opacity-30 rounded flex items-center justify-center">
          <div className="text-gray-500">Karte wird geladen...</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary-dark p-4 rounded-lg">
          <h4 className="text-sm text-gray-400 mb-2">CCTV Status</h4>
          <div className="text-green-400 font-semibold">98% Online</div>
        </div>
        <div className="bg-primary-dark p-4 rounded-lg">
          <h4 className="text-sm text-gray-400 mb-2">Alarm Systeme</h4>
          <div className="text-green-400 font-semibold">Alle aktiv</div>
        </div>
        <div className="bg-primary-dark p-4 rounded-lg">
          <h4 className="text-sm text-gray-400 mb-2">Response Time</h4>
          <div className="text-accent-orange font-semibold">4.2 Min</div>
        </div>
      </div>
    </div>
  )
}


