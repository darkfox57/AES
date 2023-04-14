import React from 'react'
import { EtiquetaContainer, GridEtiquetaBtn } from './Etiquetas.Styled'
import { useDispatch } from 'react-redux'
import { filterTags } from '../../../redux/actions/blog_actions'
import useScroll from '../../../Hooks/useScrollTop'
import { MdLabelImportant} from 'react-icons/md'
import { filterTagsEvent } from '../../../redux/actions/event_actions'

const EtiquetasPopular = ({tags,EventTag}) => {
  const dispatch = useDispatch()

  const handleTag = (tag)=>{
    if(EventTag){
      dispatch(filterTagsEvent(tag))
    }else{
      dispatch(filterTags(tag))
     useScroll(520)
    }
  }

  return (
    <EtiquetaContainer>
      <h4><MdLabelImportant className="icon-label" /> Etiquetas populares</h4>
      <GridEtiquetaBtn>
        {tags.map((tag,i)=> <button onClick={()=> handleTag(tag.name)} key={i}>{tag.name}</button> )}
      </GridEtiquetaBtn>
    </EtiquetaContainer>
  )
}

export default EtiquetasPopular
