import React from 'react'

export default function DashLayout({ children }) {
  return (
    <>
      <div>Barra lateral</div>
      <section className="body">
        <div>barra superior</div>
        <div>{children}</div>
      </section>
    </>
  )
}
