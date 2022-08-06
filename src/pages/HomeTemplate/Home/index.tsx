import { Box, Container } from '@mui/material';
import { Carousel } from 'src/components/Carousel';
import Icon1 from '../../../assets/img/icon/1.png';
import Icon2 from '../../../assets/img/icon/2.png';
import Icon3 from '../../../assets/img/icon/3.png';
import Icon4 from '../../../assets/img/icon/4.png';
import Tracking1 from '../../../assets/img/background/ba5.png';
import Tracking2 from '../../../assets/img/background/ba6.png';

const arrayServices = [
  {
    image: Icon2,
    name: 'FREE SHIPPING',
    content: 'For all order over $99',
  },
  {
    image: Icon1,
    name: 'DELIVERY ON TIME',
    content: 'Break the lines whenever',
  },
  {
    image: Icon4,
    name: 'SECURE PAYMENT',
    content: '100% secure payment',
  },
  {
    image: Icon3,
    name: 'SHIPPING & RETURN',
    content: 'Photography online website',
  },
];

const ServiceItems = () => {
  return (
    <div className='flex justify-around items-center'>
      {arrayServices.map((item, index) => (
        <div key={index} className='flex justify-center items-center'>
          <div className='max-w-[60px]'>
            <img className='mw-full' src={item.image} alt='icon1' />
          </div>
          <div className='ml-4'>
            <h5 className='font-bold'>{item.name}</h5>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const DynamicTracking = () => {
  return (
    <div className='flex'>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const Home = () => {
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Carousel />
      </Box>
      <Container maxWidth='xl'>
        <ServiceItems />
        <DynamicTracking />
      </Container>
    </>
  );
};
