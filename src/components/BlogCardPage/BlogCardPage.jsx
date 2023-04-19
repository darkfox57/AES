import React from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import { FaMousePointer } from 'react-icons/fa'

import { BiStreetView } from 'react-icons/bi'
import { IoCalendarSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import useScroll from '../../Hooks/useScrollTop'
import { filterTags } from '../../redux/actions/blog_actions'
import {
  BlogPageCardContainer,
  ContainerInfo,
  ContainerSpan,
} from './BlogCardPage.Styled'

const BlogCardPage = ({
  img,
  title,
  date,
  dateOut,
  slug,
  // description,
  count_view,
  tags,
  EventPage,
  short_description,
}) => {
  
  const Newdate = new Date(date)
  const NewDateOut = new Date(dateOut)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleTag = (tag) => {
    dispatch(filterTags(tag))
    useScroll(520)
  }

  const handleNavigate = () => {
    if (EventPage) {
      navigate(`/evento/${slug}`)
      useScroll(0)
    } else {
      navigate(`/blog/${slug}`)
      useScroll(0)
    }
  }
  return (
    <BlogPageCardContainer img={img}>
      <div className="portada"></div>
      <ContainerInfo>
        <span>Charity</span>
        <h3>{title}</h3>
        <ContainerSpan>
          <span>
            <BiStreetView className="icon-card-blog" /> {count_view} Vistas
          </span>
          <div>
            <span>
              <IoCalendarSharp className="icon-card-blog" />{' '}
              {Newdate.toLocaleDateString()}
            </span>
            {dateOut && (
              <span>
                -
                <IoCalendarSharp className="icon-card-blog" />{' '}
                {NewDateOut.toLocaleDateString()}
              </span>
            )}
          </div>
        </ContainerSpan>
        <p className="post-body">{short_description} </p>
        <ContainerSpan>
          <div>
            {tags.map((tag, i) => (
              <button
                onClick={() => handleTag(tag.name)}
                key={i}
                className="img"
              >
                {tag.name}
              </button>
            ))}
          </div>
          <button onClick={handleNavigate} className="read-more">
            <span>Ver publicación</span>
            <FaMousePointer />
          </button>
        </ContainerSpan>
      </ContainerInfo>
    </BlogPageCardContainer>
  )
}

export default BlogCardPage
