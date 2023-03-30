import React from 'react'
import {
  DonacionSection,
  DonationInputs,
  DonationTexts,
  InputDonacion,
} from './donacion.styles'

export default function Donacion() {
  return (
    <DonacionSection>
      <DonationTexts>
        <h2>Apoya con tu donación</h2>
      </DonationTexts>
      <DonationInputs>
        <InputDonacion type="button" value="$5" />
        <InputDonacion type="button" value="$10" />
        <InputDonacion type="button" value="$100" />
        <InputDonacion type="text" placeholder="Ingresa un valor" />
        <InputDonacion type="button" value="Donar ahora"></InputDonacion>
      </DonationInputs>
    </DonacionSection>
  )
}
