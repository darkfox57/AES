import React from 'react'
import { BlogPageCardContainer, ContainerInfo, ContainerSpan } from './BlogCardPage.Styled'

const BlogCardPage = ({img,title,status,date,slug,description}) => {
    const Newdate = new Date(date);
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
        <span className='img'><img src={img} alt="img" /> by Hearman</span>
        <span>Readmore</span>
      </ContainerSpan>
      </ContainerInfo>
    </BlogPageCardContainer>
  )
}

export default BlogCardPage
