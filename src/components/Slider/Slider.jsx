import React from 'react'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { Slider_Stylizied, Button_Stylizied } from './Slider.Styles'

export default function Slider({ data }) {
  let [idImage, setIdImage] = useState(0)

  const handleNext = (event) => {
    event.preventDefault()
    if (idImage === data.length - 1) setIdImage(0)
    else setIdImage(idImage + 1)
  }

  const handlePrevious = (event) => {
    event.preventDefault()
    if (idImage === 0) setIdImage(data.length - 1)
    else setIdImage(idImage - 1)
  }

  return (
    <Slider_Stylizied image={data[idImage].image}>
      <Button_Stylizied onClick={handlePrevious}>
        <FaArrowLeft />
      </Button_Stylizied>
      <p>{data[idImage].text}</p>
      <Button_Stylizied onClick={handleNext}>
        <FaArrowRight />
      </Button_Stylizied>
    </Slider_Stylizied>
  )
}
