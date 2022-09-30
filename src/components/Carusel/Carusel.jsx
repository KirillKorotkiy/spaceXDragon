import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swipe, SlideSwiper, Img } from './Carusel.styled';
export const Carusel = ({ dragon }) => {
  const [slides, setSlides] = useState('');

  useEffect(() => {
    dragon && setSlides(dragon.data.flickr_images);
  }, [dragon]);

  return (
    <Swipe
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {slides &&
        slides.map(item => {
          return (
            <SlideSwiper key={item}>
              <Img src={item} alt="" key={item} />
            </SlideSwiper>
          );
        })}
    </Swipe>
  );
};
