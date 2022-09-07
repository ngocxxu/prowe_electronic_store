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
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import { SwiperProps } from 'src/types/GeneralTypes';
import SwiperCore, {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper';
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

export const RelatedProductSwiper = () => {
  const { dataAllProducts } = useSelector(
    (state: RootState) => state.productReducer
  );
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
        {dataAllProducts.length > 0 &&
          dataAllProducts.map((item) => (
            <SwiperSlide key={item._id}>
              <ProductItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export const ProductSwiper = ({ imageLib }: { imageLib: string[] }) => {
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
        {imageLib
          .map((img) => {
            let arrayStrImg = img.split('/');
            let strImg = 'h_1000,w_1000';
            let findIndex = arrayStrImg.indexOf('upload');

            arrayStrImg.splice(findIndex + 1, 0, strImg);
            return arrayStrImg.join('/');
          })
          .map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`prod${index}`} />
            </SwiperSlide>
          ))}
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
        {imageLib.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`prod${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
