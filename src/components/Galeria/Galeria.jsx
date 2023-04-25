import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import useScroll from '../../Hooks/useScrollTop'
import Imagen from './Imagen'

import Button from '../../utils/Button/Button'

import {
  ButtonContainer,
  GalleryContainer,
  SectionContainer,
} from './Galeria.Styles'

export default function Galeria() {
  const images = useSelector((state) => state.gallery.files)
  const gallery = images.filter((file) => file.origin === 'images')
  const [index, setIndex] = useState(8)

  const increaseImages = () => {
    setIndex((indice) => indice + 8)
    useScroll(window.scrollY)
  }

  const decreaseImages = () => {
    setIndex((indice) => indice - 8)
    useScroll(window.scrollY - 500)
  }

  return (
    <SectionContainer>
      <h2>Galería</h2>
      <GalleryContainer>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 1300: 4 }}
        >
          <Masonry>
            {gallery.slice(0, index).map((image, index) => (
              <Imagen key={index} url={image.url} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </GalleryContainer>
      <ButtonContainer>
        {index < gallery.length && (
          <button onClick={increaseImages}>Mostrar más</button>
        )}

        {index > 8 && <button onClick={decreaseImages}>Mostrar menos</button>}
      </ButtonContainer>
    </SectionContainer>
  )
}
