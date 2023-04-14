import React, { useState } from 'react'

import Imagen from './Imagen'
import useScroll from '../../Hooks/useScrollTop'

import Button from '../../utils/Button/Button'

import { GalleryContainer, ButtonContainer } from './Galeria.Styles'

export default function Galeria() {
  const [index, setIndex] = useState(4)

  const imgGaleria = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGNPChzL1dKFsqFEVoKAbZjQoV9uG-thWDmQ&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVOCEMq-gxwuN1ijqbOCnyZ3T2jjUyVQVFoQ&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsODF14TsJt3xIPV_gmVFCVRQVSdZ33xLEA&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gIz2wZuJm-YEqpRm-lzflLwYtmGoyrhp3w&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj40bZspJkkT9Npler9aj6Grc0H2XyaGqfrA&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDt54f6fUmThui-eJc2SD1tZTEsedxhQmQg&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToY4K7Z1bZQqVFv0uSU5Mj-gv2Y-LNyayxTw&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJzsiLvd0rfyf4HRYGVWIIjonVN2nKvDt3A&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Ep2eYT4wHvO2aO8noGcDiXuB2BlpfCiCFQ&usqp=CAU',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVt4oy42NqaAn9JVEV_XkO9VY619qwBurtCw&usqp=CAU',
    },
  ]

  const increaseImages = () => {
    setIndex((indice) => indice + 4)
    useScroll(window.scrollY)
  }

  const decreaseImages = () => {
    setIndex((indice) => indice - 4)
    useScroll(window.scrollY - 500)
  }

  return (
    <>
      <GalleryContainer>
        {imgGaleria.slice(0, index).map((image, index) => (
          <Imagen key={index} url={image.url} />
        ))}
      </GalleryContainer>

      <ButtonContainer>
        {index < imgGaleria.length && (
          // <Button
          //   size={'sm'}
          //   type={'primary'}
          //   text={'Cargar más'}
          //   onClick={handleImages}
          // />
          <button onClick={increaseImages}>Mostrar más</button>
        )}

        {index > 4 && <button onClick={decreaseImages}>Mostrar menos</button>}
      </ButtonContainer>
    </>
  )
}
