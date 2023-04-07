import React from 'react'
import { EtiquetaContainer, GridEtiquetaBtn } from './Etiquetas.Styled'
const etiquetas = ["salud","causas","niños","educacion","noticias","eventos","instituciones","patrocinadores"]
const EtiquetasPopular = () => {
  return (
    <EtiquetaContainer>
      <h4>Etiquetas populares</h4>
      <GridEtiquetaBtn>
        {etiquetas.map((el,i)=> <button key={i}>{el}</button> )}
      </GridEtiquetaBtn>
    </EtiquetaContainer>
  )
}

export default EtiquetasPopular
