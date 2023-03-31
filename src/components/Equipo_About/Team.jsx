import React from 'react'
import Button from '../../utils/Button'
import CardTeam from './CardTeam'
import { TeamFlex } from './Team.Styled'
const data = [
  {
    name: 'Gerardo Osorio',
    cargo: 'Coordinador(a) de logística',
    img: 'https://cdn.shopify.com/s/files/1/1045/8368/files/Side-view-of-Tom-Welling-wearing-beige-trenchcoat-and-thick-eyeglasses-playing-the-role-of-Clark-Kent-in-the-2011-series-of-Smallville.jpg?v=1664361554',
  },
  {
    name: 'Kevin Cotrina',
    cargo: 'Relaciones Públicas',
    img: 'https://cdn.shopify.com/s/files/1/1045/8368/files/Side-view-of-Tom-Welling-wearing-beige-trenchcoat-and-thick-eyeglasses-playing-the-role-of-Clark-Kent-in-the-2011-series-of-Smallville.jpg?v=1664361554',
  },
  {
    name: 'Rick Quito',
    cargo: 'Talento Humano',
    img: 'https://cdn.shopify.com/s/files/1/1045/8368/files/Side-view-of-Tom-Welling-wearing-beige-trenchcoat-and-thick-eyeglasses-playing-the-role-of-Clark-Kent-in-the-2011-series-of-Smallville.jpg?v=1664361554',
  },
  {
    name: 'Gerardo Osorio',
    cargo: 'Ceo',
    img: 'https://cdn.shopify.com/s/files/1/1045/8368/files/Side-view-of-Tom-Welling-wearing-beige-trenchcoat-and-thick-eyeglasses-playing-the-role-of-Clark-Kent-in-the-2011-series-of-Smallville.jpg?v=1664361554',
  },
]
const Team = () => {
  return (
    <TeamFlex>
      <div className='grid'>
        {data.map((team, index) => (
          <CardTeam
            key={index}
            name={team.name}
            cargo={team.cargo}
            img={team.img}
          />
        ))}
      </div>
      <Button size="lg" type="primary" text={"Contactanos"} />
    </TeamFlex>
  )
}

export default Team
