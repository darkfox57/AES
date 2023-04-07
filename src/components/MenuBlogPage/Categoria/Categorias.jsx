import React from 'react'
import { CardFlex, CategoriaContainer } from './Categoria.Styled'
import CardCategory from './CardCategory'

const Categorias = () => {
  return (
    <CategoriaContainer>
      <h4>🫠 Categorias</h4>
      <CardFlex>
      <CardCategory text={"Agua"} cant={25}/>
      <CardCategory text={"Agua"} cant={25}/>
      <CardCategory text={"Agua"} cant={25}/>
      <CardCategory text={"Agua"} cant={25}/>
      </CardFlex>
    </CategoriaContainer>
  )
}

export default Categorias
