import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllFiles } from '../../../redux/actions/gallery_actions'
import Card from './Card/Card'
import { AddBtn, Sliders } from './slider.styles'

export default function Slider() {
  const files = useSelector((state) => state.gallery.files)

  return (
    <>
      <h2>Banner Principal</h2>
      <Link to={'add-banner'}>
        <AddBtn>Agregar Slider</AddBtn>
      </Link>

      <Sliders>
        {files
          .filter((file) => file.origin === 'slider')
          .map((file) => (
            <Card
              key={file._id}
              id={file._id}
              url={file.url}
              title={file.title}
              subtitle={file.subtitle}
              status={file.status}
            />
          ))}
      </Sliders>
    </>
  )
}
