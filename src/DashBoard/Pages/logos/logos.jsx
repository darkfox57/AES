import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { editFile, getAllFiles } from '../../../redux/actions/gallery_actions'
import ImageCard from './Card/ImageCard'
import { GalleryWrapper } from './gallery.styles'

export default function Logos() {
  const images = useSelector((state) => state.gallery.files)
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <>
      <h2>Galeria Involucrate</h2>
      <Link className="dashBtn" to={'add'}>
        Agregar Imagen
      </Link>
      <GalleryWrapper>
        {images
          .filter((file) => file.origin === 'logos')
          .map((img) => (
            <ImageCard
              key={img._id}
              id={img._id}
              url={img.url}
              status={img.status}
              submition={img}
              activeModal={selectedCard === img._id}
              captureIdModal={() => setSelectedCard(img._id)}
              setSelectedCard={setSelectedCard}
            />
          ))}
      </GalleryWrapper>
    </>
  )
}
