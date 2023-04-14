import React from 'react'
import { CardContainer } from './CardCategory.Styled'
import { useDispatch } from 'react-redux'
import { filterCategory } from '../../../redux/actions/blog_actions'
import useScroll from '../../../Hooks/useScrollTop'
import { filterEvents } from '../../../redux/actions/event_actions'

const CardCategory = ({text,cant,typeEvent}) => {
  const dispatch = useDispatch()

  const handleCategory = ()=>{
   if(!typeEvent){
    dispatch(filterCategory(text))
    useScroll(520)
   }else{
     dispatch(filterEvents(text))
    useScroll(520)
   }
   
   
  }
  
  return (
    <CardContainer onClick={handleCategory}>
        <span className='text'>{text}</span>
        <span className='cant'>{cant}</span>
    </CardContainer>
  )
}

export default CardCategory
