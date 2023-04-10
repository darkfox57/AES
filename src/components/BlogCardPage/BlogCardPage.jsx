import React from 'react'
import { BlogPageCardContainer, ContainerInfo, ContainerSpan } from './BlogCardPage.Styled'
import { useDispatch } from 'react-redux';
import { filterTags } from '../../redux/actions/blog_actions';

const BlogCardPage = ({img,title,date,description,tags}) => {
    const Newdate = new Date(date);
    const dispatch = useDispatch()

    const handleTag = (tag)=>{
      dispatch(filterTags(tag))
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
        <span>👁️‍🗨️ 232 Views</span>
        <span>📝 comments 35</span>
        <span>🗓️ {Newdate.toLocaleDateString()}</span>
      </ContainerSpan>
      <p>
        {description}
      </p>
      <ContainerSpan>
        <div>
          {tags.map(tag =>  <button onClick={()=>handleTag(tag.name)} key={tag} className='img'>{tag.name}</button>)}
        </div>
        <span>Readmore</span>
      </ContainerSpan>
      </ContainerInfo>
    </BlogPageCardContainer>
  )
}

export default BlogCardPage
