import React, { useState } from 'react'

import bbva from '../../assets/FaqPago/logo-bbva.png'
import cajaInterbank from '../../assets/FaqPago/logo-interbank.png'
import cajaScotiabank from '../../assets/FaqPago/logo-scotiabank_alt.png'
import bcp from '../../assets/FaqPago/logo-bcp.png'

import { BancosContainer, PlinContainer } from './Plin.Styled'
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
            <img src={bbva} alt="bbva" onClick={handleView} />
            <img src={cajaInterbank} alt="interbank" onClick={handleView} />
            <img src={cajaScotiabank} alt="scotiabank" onClick={handleView} />
          </>
        ) : (
          <img src={bcp} alt="bcp"  onClick={handleView} />
        )}
      </BancosContainer>
       <SwiperMobil banco={banco} />
    </PlinContainer>
  )
}

export default Plin
