import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../../redux/actions/blog_actions'
import { BlogContainer} from './Blog.Styled'
import BlogCard from './BlogCard'
import BlogHeader from './BlogHeader'

//compoentes swiper
import { Swiper, SwiperSlide } from 'swiper/react';
//autopaly
import SwiperCore, { Autoplay,Navigation } from 'swiper';
//css
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);

const Blog = () => {
  // usamos un useHook perzonalizado para la paginacion tipo slider

  const dispatch = useDispatch()
  const posts = useSelector((state) => state.blog.blogs)

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [])

  return (
    <BlogContainer>
      <BlogHeader/>
      <Swiper
      className='xd'
    autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      loop={true}
      navigation
      spaceBetween={10}// gap
      slidesPerView={3}
      centeredSlides={true}
      //onSwiper={(swiper) => console.log(swiper)}
    >
        {posts.map((post) => (
          <SwiperSlide key={post._id} className='swiper-card'>
          <BlogCard
            image={post.image}
            title={post.title}
            status={post.status}
            date={post.createdAt}
            slug={post.slug}
          />
          </SwiperSlide>
        ))}
    </Swiper>
    </BlogContainer>
  )
}

export default Blog
