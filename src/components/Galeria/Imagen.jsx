import React from 'react'
import { Image } from './Imagen.Styles'

export default function Imagen({ url }) {
  return (
    <>
      <Image src={url} alt="" />
    </>
  )
}
