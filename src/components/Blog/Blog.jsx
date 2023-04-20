import React from 'react'
import { BlogContainer } from './Blog.Styled'
import BlogCard from './BlogCard'
import BlogHeader from './BlogHeader'

//compoentes swiper
import { Swiper, SwiperSlide } from 'swiper/react'
//autopaly
import SwiperCore, { Autoplay, Navigation } from 'swiper'
//css
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Autoplay])
SwiperCore.use([Navigation])

const Blog = ({posts}) => {
 


  /*if (!posts.length) {
    return <p>Cargando eventos...</p>
  }*/

  return (
    <BlogContainer>
      <BlogHeader />
      <Swiper
      className='swiper'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation
        spaceBetween={20} // gap
        breakpoints={{
          1458: {
            slidesPerView: 4
          },
          1080: {
            slidesPerView: 3
          },
          754: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 1
          }
        }}
        //centeredSlides={true}
      >
        {posts.map((post) => (
            <SwiperSlide key={post._id} className="swiper-card">
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
