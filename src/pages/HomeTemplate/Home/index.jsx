import { Box, Container } from '@mui/material';
import { Carousel } from 'src/components/Carousel';
import Icon1 from '../../../assets/img/icon/1.png';
import Icon2 from '../../../assets/img/icon/2.png';
import Icon3 from '../../../assets/img/icon/3.png';
import Icon4 from '../../../assets/img/icon/4.png';

const ServiceItems = () => {
  return (
    <div className='flex'>
      <div className='flex justify-center items-center'>
        <div className='mw-[60px]'>
          <img className='mw-full' src={Icon1} alt='icon1' />
        </div>
        <div>
          <h5 className='font-bold'>FREE SHIPPING</h5>
          <p>For all order over $99</p>
        </div>
      </div>
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
      </Container>
    </>
  );
};
