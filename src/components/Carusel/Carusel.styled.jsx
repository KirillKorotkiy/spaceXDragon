import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Swipe = styled(Swiper)`
  flex-basis: 50%;
  margin-bottom: 15px;
`;

export const SlideSwiper = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  margin-left: 0;
`;

export const Img = styled.img`
  width: 100%;
`;
