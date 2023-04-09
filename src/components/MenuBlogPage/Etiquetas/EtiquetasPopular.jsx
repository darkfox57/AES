import React from 'react'
import { EtiquetaContainer, GridEtiquetaBtn } from './Etiquetas.Styled'
import { useDispatch } from 'react-redux'
import { filterTags } from '../../../redux/actions/blog_actions'

const EtiquetasPopular = ({tags}) => {
  const dispatch = useDispatch()

  const handleTag = (tag)=>{
    dispatch(filterTags(tag))
  }

  return (
    <EtiquetaContainer>
      <h4>Etiquetas populares</h4>
      <GridEtiquetaBtn>
        {tags.map((tag,i)=> <button onClick={()=> handleTag(tag.name)} key={i}>{tag.name}</button> )}
      </GridEtiquetaBtn>
    </EtiquetaContainer>
  )
}

export default EtiquetasPopular
