import React,{useMemo} from 'react'
import { CardFlex, CategoriaContainer } from './Categoria.Styled'
import CardCategory from './CardCategory'
import { TbCategory2} from 'react-icons/tb'

const countCategories = (categories, posts) => {
  const Status = posts.filter((post) => post.status)

  return categories.reduce((counter, { name, _id }) => {
    // Filtra los posts que incluyen la categoría actual
    const filteredPosts = Status.filter(post => post.categories.some(category => category._id === _id));
    // Agrega una propiedad al contador con el nombre de la categoría y la cantidad de posts filtrados
    counter[name] = filteredPosts.length;
    // Retorna el contador actualizado
    return counter;
  }, {});
}


const Categorias = ({ category, posts,typeEvent }) => {
  const categories = useMemo(() => countCategories(category, posts), [category]);

  return (
    <CategoriaContainer>
      <h4><TbCategory2 className='icon-category'/> Categorias</h4>
      <CardFlex>
        {Object.keys(categories).map((category, index) => (
          <CardCategory
            typeEvent={typeEvent}
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

