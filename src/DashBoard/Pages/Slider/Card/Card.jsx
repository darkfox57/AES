<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteFile } from '../../../../redux/actions/gallery_actions'
>>>>>>> Stashed changes

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
