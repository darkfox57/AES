import React,{useMemo} from 'react'
import { CardFlex, CategoriaContainer } from './Categoria.Styled'
import CardCategory from './CardCategory'


const countCategories = (categories, posts) => {
  return categories.reduce((counter, { name, _id }) => {
    // Filtra los posts que incluyen la categoría actual
    const filteredPosts = posts.filter(post => post.categories.some(category => category._id === _id));
    // Agrega una propiedad al contador con el nombre de la categoría y la cantidad de posts filtrados
    counter[name] = filteredPosts.length;
    // Retorna el contador actualizado
    return counter;
  }, {});
}



const Categorias = ({ category, posts }) => {
  const categories = useMemo(() => countCategories(category, posts), [category]);

  return (
    <CategoriaContainer>
      <h4>🫠 Categorias</h4>
      <CardFlex>
        {Object.keys(categories).map((category, index) => (
          <CardCategory
            key={index}
            text={category}
            cant={categories[category]}
          />
        ))}
      </CardFlex>
    </CategoriaContainer>
  )
}

export default Categorias

