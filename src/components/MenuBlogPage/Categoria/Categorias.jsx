import React from 'react'
import { CardFlex, CategoriaContainer } from './Categoria.Styled'
import CardCategory from './CardCategory'

/*const NumCategory = (category,posts)=>{
  const contador = {}
     category.forEach((categoria) => {
        const objetosFiltrados = posts.filter((obj) =>
          obj.category.includes(categoria.name)
        )
        contador[categoria] = objetosFiltrados.length
      })
      return contador
}*/
const Categorias = ({category,posts}) => {
  //console.log(NumCategory(category,posts));
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
