import React from 'react'
import { TeamCard } from './CardTeam.Styled'

const CardTeam = ({ src }) => {
  return (
    <TeamCard>
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
       frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </TeamCard>
  )
}

export default CardTeam
