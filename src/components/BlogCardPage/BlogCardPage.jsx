import React from 'react'
import { BlogPageCardContainer, ContainerInfo, ContainerSpan } from './BlogCardPage.Styled'
import { useDispatch } from 'react-redux';
import { filterTags } from '../../redux/actions/blog_actions';
import useScroll from '../../Hooks/useScrollTop';
import { BiStreetView} from 'react-icons/bi'
import { AiOutlineComment} from 'react-icons/ai'
import { IoCalendarSharp} from 'react-icons/io5'


const BlogCardPage = ({img,title,date,description,tags}) => {
    const Newdate = new Date(date);
    const dispatch = useDispatch()

    const handleTag = (tag)=>{
      dispatch(filterTags(tag))
      useScroll(520)
    }

    return (
    <BlogPageCardContainer img={img} >
      <div className="portada"></div>
      <ContainerInfo>
     <span>Charity</span>
      <h3>
        {title}
      </h3>
      <ContainerSpan>
        <span><BiStreetView className='icon-card-blog'/> 232 Views</span>
        <span><AiOutlineComment className='icon-card-blog' /> comments 35</span>
        <span><IoCalendarSharp className='icon-card-blog' /> {Newdate.toLocaleDateString()}</span>
      </ContainerSpan>
      <p>
        {description}
      </p>
      <ContainerSpan>
        <div>
          {tags.map((tag,i) =>  <button onClick={()=>handleTag(tag.name)} key={i} className='img'>{tag.name}</button>)}
        </div>
        <span>Readmore</span>
      </ContainerSpan>
     
      </ContainerInfo>
    </BlogPageCardContainer>
  )
}

export default BlogCardPage
