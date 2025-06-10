import React from 'react'

export default function ConfiguratorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'row' }}>
      {/* Sidebar */}
      <div style={{ width: '80px', background: '#eee', padding: '1rem' }}>
        <div>Logo</div>
        <div>☰</div>
      </div>

      {/* Middenblok */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Topbalk */}
        <div style={{ height: '80px', background: '#f6f6f6', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>🧠 Keuzehulp/Suggesties</div>
          <div>🔘 Knoppenmenu</div>
        </div>

        {/* Viewer */}
        <div style={{ flex: 1, display: 'flex', background: '#fafafa', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          {children}
          <div style={{
            position: 'absolute', right: '300px', top: '20%', background: 'yellow',
            padding: '0.5rem 1rem', borderRadius: '1rem'
          }}>
            💡 Suggestie
          </div>
        </div>
      </div>

      {/* Wizard rechts */}
      <div style={{ width: '300px', background: '#e6f7ff', padding: '1rem' }}>
        <h3>🤖 AI WIZARD</h3>
        <p>Sturing / Advies / Slimme opties</p>
      </div>
    </div>
  )
}
