import React, { useState } from 'react'
import SectionFaq from './SectionFaq'
import { FaqContainerText } from './FaqDoubt.Styled'
const datas = [
  {
    title: '¿A quienes están dirigidos los talleres?',
    detail:
      'A niños y adolescentes de colegios públicos con poco o nulo acceso a talleres de salud, contamos con modalidad virtual y presencial. ',
  },
  {
    title:
      'Si hago una donación, ¿puedo decidir a qué se destinaría mi aporte?',
    detail:
      'Por supuesto, puede elegir si se destinan a kits de salud, adolescentes y niños que necesiten sesiones particulares de psicología o al mantenimiento de nuestras plataformas.',
  },
  {
    title: '¿Qué nos distingue de otras organizaciones?',
    detail:
      'Trabajamos de la mano con especialistas del sector salud que de forma voluntaria brindan su tiempo para los talleres. Además que buscamos cubrir el tema de la salud de forma integral, es decir física, mental, social y medio ambiental.',
  },
]

const FaqDoubt = () => {
  const [visibleIndex, setVisibleIndex] = useState(null) // Estado para el índice del span visible

  return (
    <FaqContainerText>
      <div>
        {datas.map((data, index) => (
          <SectionFaq
            key={index}
            index={index}
            title={data.title}
            details={data.detail}
            visibleIndex={visibleIndex}
            setVisibleIndex={setVisibleIndex}
          />
        ))}
      </div>
    </FaqContainerText>
  )
}

export default FaqDoubt
