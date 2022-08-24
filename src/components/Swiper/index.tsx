/* eslint-disable jsx-a11y/alt-text */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './style.scss';

// import required modules
import { useState } from 'react';
import { SwiperProps } from 'src/types/GeneralTypes';
import SwiperCore, {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper';
import Prod1 from '../../assets/img/product/14.1.jpg';
import Prod2 from '../../assets/img/product/10.1.jpg';
import Prod3 from '../../assets/img/product/16.1.jpg';
import Prod4 from '../../assets/img/product/15.1.jpg';
import { ProductItem } from '../ProductItem';

export const InstaSwiper = ({ arrayInsta }: SwiperProps) => {
  return (
    <div className='insta-swiper-container'>
      <Swiper
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        // slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        {arrayInsta?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt={item.content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const RelatedProductSwiper = () =>
  // { arrayInsta }: SwiperProps
  {
    return (
      <div className='insta-swiper-container'>
        <Swiper
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          // slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className='mySwiper'
        >
          {/* {arrayInsta?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt={item.content} />
          </SwiperSlide>
        ))} */}
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };

export const ProductSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <div className='product-swiper-container'>
      <Swiper
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        <SwiperSlide>
          <img src={Prod1} alt='prod1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Prod2} alt='prod2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Prod3} alt='prod3' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Prod4} alt='prod4' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // navigation={true}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={Prod1} alt='prod1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Prod2} alt='prod2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Prod3} alt='prod3' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Prod4} alt='prod4' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
