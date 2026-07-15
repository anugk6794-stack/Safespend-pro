import React, { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('scan')
  return (
    <div style={{fontFamily:'sans-serif', padding:20, background:'#0f172a', color:'white', minHeight:'100vh'}}>
      <h1>SafeSpend Pro 🔒</h1>
      <div style={{display:'flex', gap:10, margin:'20px 0', flexWrap:'wrap'}}>
        {['scan','delete','block','lock'].map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{padding:12, background:'#2563eb', border:'none', borderRadius:8, color:'white', fontWeight:'bold'}}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>
      <div style={{background:'#1e293b', padding:20, borderRadius:12}}>
        {tab === 'scan' && <p>🔍 Scan your transactions here</p>}
        {tab === 'delete' && <p>🗑️ Delete risky transactions</p>}
        {tab === 'block' && <p>🚫 Block merchants</p>}
        {tab === 'lock' && <p>🔐 Lock your card</p>}
      </div>
    </div>
  )
}
