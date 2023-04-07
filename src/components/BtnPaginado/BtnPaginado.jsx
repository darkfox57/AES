import React, { useState } from 'react'
import { BtnPaginadoFlex, Btnpage } from './BtnPaginado.Styled'

const BtnPaginado = ({ pageNumbers, goToPage}) => {
  const [active,setActive] = useState(1)
    
  const handlePage = (e)=>{
    setActive(parseInt(e.target.value))
    goToPage(parseInt(e.target.value))
  }
    
  return (
    <BtnPaginadoFlex >
      {pageNumbers.map((item,i) => (
        <Btnpage
          key={i}
          value={item}
          page={active === item}
          onClick={handlePage}
        >
          {item}
        </Btnpage>
      ))}
    </BtnPaginadoFlex>
  )
}

export default BtnPaginado;

