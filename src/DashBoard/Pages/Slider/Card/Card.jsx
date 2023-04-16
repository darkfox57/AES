import React from 'react'

export default function Card({ id, title, subtitle, url, status }) {
  return (
    <div className="container">
      <div className="content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button>Editar</button>
      </div>
      <img src={url} alt={title} />
    </div>
  )
}
