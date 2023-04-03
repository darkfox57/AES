import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import Button from '../../../../utils/Button/Button'

export default function AddBlog() {
  const [postContent, setPostContent] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí puedes enviar el contenido del post al servidor
  }

  return (
    <>
      <h2>Crear Articulo de Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Descripción:
          <ReactQuill
            value={postContent}
            onChange={(value) => setPostContent(value)}
          />
        </label>
        <button type="submit">Publicar</button>
      </form>
    </>
  )
}
