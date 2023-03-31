import React from 'react'
import { TeamCard } from './CardTeam.Styled'

const CardTeam = ({name,cargo,img}) => {
  return (
    <TeamCard>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
      <h3>{name}</h3>
      <p>{cargo}</p>
      </div>
    </TeamCard>
  )
}

export default CardTeam
