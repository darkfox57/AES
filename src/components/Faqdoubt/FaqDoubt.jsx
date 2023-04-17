import React, { useState } from 'react'
import SectionFaq from './SectionFaq'
import { FaqContainerText } from './FaqDoubt.Styled'
const datas = [
  {
    title: '¿A cuántas personas ayudan con su trabajo de beneficencia?',
    detail:
      'Nos contactamos con colegios para brindarles los talleres a adolescentes de últimos años.',
  },
  {
    title:
      'Si hago una donación, ¿puedo decidir a qué sería destinado mi dinero?',
    detail:
      'Por supuesto, puede elegir si se destinan a kits de salud, adolescentes que necesiten sesiones particulares de psicología o al mantenimiento de nuestras plataformas.',
  },
  {
    title: '¿Qué nos distingue a nosotros de otras organizaciones?',
    detail:
      'Trabajamos de la mano con especialistas del sector salud que de forma voluntaria brindan su tiempo para los talleres. Además que buscamos cubrir el tema de la salud de forma integral, es decir física y mental.',
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
