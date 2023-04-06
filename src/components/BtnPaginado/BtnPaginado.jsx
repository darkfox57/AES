import React from 'react'
import { BtnPaginadoFlex, Btnpage } from './BtnPaginado.Styled'
import { useNavigate, useParams } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

const BtnPaginado = ({ pageNumbers, goToPage }) => {
  const params = useParams()

     goToPage(Number(params.id))
  
  return (
    <BtnPaginadoFlex >
        
      {pageNumbers.map((item) => (
      <NavLink  to={`/proximos-eventos/${item}`} key={item}>
        <Btnpage
          page={Number(params.id) === item}
        >
          {item}
        </Btnpage>
        </NavLink>
      ))}
    </BtnPaginadoFlex>
  )
}

export default BtnPaginado
