import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { TbHeartHandshake, TbLifebuoy } from 'react-icons/tb'
import { FaYelp } from 'react-icons/fa'
import CardTaller from './CardTaller'
import { TallerContainer } from './Talleres.Styled'

const events = [
  {
    icon: <AiOutlineGift />,
    title: 'Creando mi espacio seguro',
    parraf:
      'Taller de salud mental enfocado en la gestión de emociones y manejo del estrés que consta de 4 sesiones lúdicas.',
  },
  {
    icon: <TbHeartHandshake />,
    title: 'Hábitos saludables',
    parraf:
      'Taller de salud física enfocado en la construcción de un estilo de vida sano que consta de 4 sesiones lúdicas.',
  },
  {
    icon: <TbLifebuoy />,
    title: 'Habilidades sociales',
    parraf:
      'Taller de salud social que consta de 5 sesiones lúdicas para desarrollar mis habilidades sociales.',
  },
  {
    icon: <FaYelp />,
    title: 'Reciclando ando',
    parraf:
      'Taller de salud ambiental enfocado en el conocimiento y adopción de herramientas para la conciencia del cuidado ambiental.',
  },
]
const Talleres = () => {
  return (
    <TallerContainer>
      {events.map((e, index) => (
        <CardTaller
          key={index}
          icon={e.icon}
          title={e.title}
          parraf={e.parraf}
        />
      ))}
    </TallerContainer>
  )
}

export default Talleres
