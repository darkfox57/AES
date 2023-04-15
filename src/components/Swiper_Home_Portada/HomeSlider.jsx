import React,{useState} from 'react';
//compoentes swiper
import { Swiper, SwiperSlide } from 'swiper/react';
//autopaly
import SwiperCore, { Autoplay,Pagination,Navigation } from 'swiper';
//css
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

import { HomeContainer } from './HomeSlider.Styled';
import SwiperInfo from './SwiperInfo';
//array de prueba
const images = [
  {
    id: 1,
    img: "https://mktdoctors.com.br/wp-content/uploads/2019/04/236302.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    img: "https://przyjacielzwierz.org/wp-content/uploads/2016/10/cause3.jpg",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    img: "https://cdn.culture.ru/images/36c935dd-3c37-53ca-916c-3ed6ccc98195",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 4,
    img: "https://cdn.coloradoparent.com/2019/10/RAC1911_Health_Match.jpg",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
];

const HomeSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <HomeContainer>
    <Swiper
    className='ContainerSlider'
    autoplay={{
        delay: 5000,
        disableOnInteraction: false
    }}
      pagination={{clickable:true}}
      loop={true}
      navigation
      spaceBetween={0}// gap
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      //onSwiper={(swiper) => console.log(swiper)}
    >
    {images.map((image)=> <SwiperSlide className='slider' key={image.id}><img src={image.img} alt="portada" /></SwiperSlide>)}
    </Swiper>
     <SwiperInfo text={images[activeIndex].description} />
    </HomeContainer>
  )
}

export default HomeSlider
