import React from 'react'
import {
  DonacionSection,
  DonationTexts,
} from './donacion.styles'

import Button from '../../utils/Button/Button'
export default function Donacion() {
  return (
    <DonacionSection>
      <DonationTexts>
        <h1>Apoya con tu donación</h1>
        <Button type={"secundary"} link={"/faqs/donaciones"} text="Haz una donación" size="md" />
      </DonationTexts>
    </DonacionSection>
  )
}
