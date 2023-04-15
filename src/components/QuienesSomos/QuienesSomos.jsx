import React from 'react'

import {
  GridQuienes,
  QuienesInfo,
  QuieneSomosContainer,
} from './QuienesSomos.Styled'

const QuienesSomos = () => {
  return (
    <QuieneSomosContainer>
      <GridQuienes>
        <div>
          <img
            src="https://revistarecursoshumanos.com/wp-content/uploads/2016/08/atención-cliente_2015.jpg"
            alt=""
          />
        </div>
        <QuienesInfo>
          <p>Nuestro trabajo</p>
          <h2>
            ¿Quiénes somos <br />
            <span>y qué hacemos?</span>
          </h2>
          <p>
            Patrocinios Somos una organización sin fines de lucro creada por
            jóvenes multidisciplinarios, quienes en trabajo conjunto con
            profesionales de la salud buscan formar una sólida cultura sanitaria
            en los adolescentes del Perú a través de talleres dinámicos.
          </p>
        </QuienesInfo>
      </GridQuienes>
    </QuieneSomosContainer>
  )
}

export default QuienesSomos
