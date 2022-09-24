import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { dragon } from 'services/fetchAPI';
import 'swiper/css';


export const Carusel = () => {
    const [slides, setSlides] = useState('');

    useEffect(()=>{
        dragon().then(({ flickr_images }) => setSlides(flickr_images)).catch((error)=> console.log(error));
    }, [])
    
    return(
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {slides &&
          slides.map(item => {
            return (
            <SwiperSlide className='swipe-slide' key={item}>
            <img className="slide-img" src={item} alt="" key={item} />
            </SwiperSlide>
            )
          })}
      </Swiper>
    )
}