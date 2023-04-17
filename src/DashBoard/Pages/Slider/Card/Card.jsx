
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFile } from '../../../../redux/actions/gallery_actions'

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
