import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ id, title, subtitle, url, status }) {
  return (
    <div className="container">
      <div className="content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Link to={`edit/${id}`}>
          <button>Editar</button>
        </Link>
      </div>
      <img src={url} alt={title} />
    </div>
  )
}
