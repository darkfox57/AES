import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
  const [index, setIndex] = useState(4)

  const increaseImages = () => {
    setIndex((indice) => indice + 4)
    useScroll(window.scrollY)
  }

  const decreaseImages = () => {
    setIndex((indice) => indice - 4)
    useScroll(window.scrollY - 500)
  }

  return (
    <SectionContainer>
      <h2>Galería</h2>
      <GalleryContainer>
        {gallery.slice(0, index).map((image, index) => (
          <Imagen key={index} url={image.url} />
        ))}
      </GalleryContainer>
      <ButtonContainer>
        {index < gallery.length && (
          <button onClick={increaseImages}>Mostrar más</button>
        )}

        {index > 4 && <button onClick={decreaseImages}>Mostrar menos</button>}
      </ButtonContainer>
    </SectionContainer>
  )
}
