import React, { useState } from 'react'

import bbva from '../../assets/FaqPago/logo-bbva.png'
import cajaInterbank from '../../assets/FaqPago/logo-interbank.png'
import cajaScotiabank from '../../assets/FaqPago/logo-scotiabank_alt.png'
import bcp from '../../assets/FaqPago/logo-bcp.png'

import { BancosContainer, PlinContainer ,BancosLogo} from './Plin.Styled'
import SwiperMobil from './SwiperMobil'
//import Yape from './Yape'

const Plin = ({ typePago }) => {
  const [banco, setBanco] = useState('')
  
  const handleView = (e) => {
    setBanco(e.target.alt)
  }

  return (
    <PlinContainer>
      <BancosContainer banco={banco} >
        {typePago === 'Plin' ? (
          <>
            <BancosLogo src={bbva} alt="bbva" onClick={handleView} />
            <BancosLogo  src={cajaInterbank} alt="interbank" onClick={handleView} />
            <BancosLogo src={cajaScotiabank} alt="scotiabank" onClick={handleView} />
          </>
        ) : (
          <BancosLogo src={bcp} alt="bcp"  onClick={handleView} />
        )}
      </BancosContainer>
       <SwiperMobil banco={banco} />
    </PlinContainer>
  )
}

export default Plin
