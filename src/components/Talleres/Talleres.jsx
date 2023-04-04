import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { TbHeartHandshake, TbLifebuoy } from 'react-icons/tb'
import { FaYelp } from 'react-icons/fa'
import CardTaller from './CardTaller'
import { TallerContainer } from './Talleres.Styled'

const events = [
  {
    icon: <AiOutlineGift />,
    title: 'Cultura Sanitaria',
    parraf:
      'Una de nuestros objetivos es asegurarnos de que los talleres abarquen la salud de forma integral es decir incluyendo la salud mental',
  },
  {
    icon: <TbHeartHandshake />,
    title: 'Cultura Sanitaria',
    parraf:
      'Una de nuestros objetivos es asegurarnos de que los talleres abarquen la salud de forma integral es decir incluyendo la salud mental',
  },
  {
    icon: <TbLifebuoy />,
    title: 'Cultura Sanitaria',
    parraf:
      'Una de nuestros objetivos es asegurarnos de que los talleres abarquen la salud de forma integral es decir incluyendo la salud mental',
  },
  {
    icon: <FaYelp />,
    title: 'Cultura Sanitaria',
    parraf:
      'Una de nuestros objetivos es asegurarnos de que los talleres abarquen la salud de forma integral es decir incluyendo la salud mental',
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
