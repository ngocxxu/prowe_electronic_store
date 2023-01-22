import SendIcon from '@mui/icons-material/Send';
import {
  Box,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  styled,
  Typography,
} from '@mui/material';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ShopButton,
  ShopRoundButton,
  ShopWhiteButton,
} from 'src/components/Button';
import { Carousel } from 'src/components/Carousel';
import { LoadingPage2 } from 'src/components/Loading';
import ProductItem from 'src/components/ProductItem';
import { InstaSwiper } from 'src/components/Swiper';
import { RootState } from 'src/redux/configStore';
import { GET_ALL_PRODUCTS_SAGA } from 'src/redux/consts/consts';
import { IHomeProps } from 'src/types/GeneralTypes';
import Ba10 from '../../../assets/img/background/ba10.jpg';
import Ba11 from '../../../assets/img/background/ba11.jpg';
import Tracking1 from '../../../assets/img/background/ba5.jpg';
import Tracking2 from '../../../assets/img/background/ba6.jpg';
import Ba7 from '../../../assets/img/background/ba7.jpg';
import Ba8 from '../../../assets/img/background/ba8.jpg';
import Ba9 from '../../../assets/img/background/ba9.jpg';
import Icon1 from '../../../assets/img/icon/1.png';
import Icon2 from '../../../assets/img/icon/2.png';
import Icon3 from '../../../assets/img/icon/3.png';
import Icon4 from '../../../assets/img/icon/4.png';
import Ins1 from '../../../assets/img/lib/instagram1.jpg';
import Ins2 from '../../../assets/img/lib/instagram2.jpg';
import Ins3 from '../../../assets/img/lib/instagram3.jpg';
import Ins4 from '../../../assets/img/lib/instagram4.jpg';
import Ins5 from '../../../assets/img/lib/instagram5.jpg';
import Ins6 from '../../../assets/img/lib/instagram6.jpg';

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

const arrayInsta = [
  {
    image: Ins1,
    content: 'Ins1',
  },
  {
    image: Ins2,
    content: 'Ins2',
  },
  {
    image: Ins3,
    content: 'Ins3',
  },
  {
    image: Ins4,
    content: 'Ins4',
  },
  {
    image: Ins5,
    content: 'Ins5',
  },
  {
    image: Ins6,
    content: 'Ins6',
  },
];

const Item = styled(Box)(({ theme }) => ({
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

const ServiceItems = () => {
  return (
    <div className='md:flex justify-around items-center my-0 md:my-20'>
      {arrayServices.map((item, index) => (
        <div
          key={index}
          className='flex justify-center items-center my-4 md:my-0'
        >
          <div className='max-w-[60px]'>
            <img className='max-w-full' src={item.image} alt='icon1' />
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
    <div className='md:flex justify-center items-center my-10'>
      <div className='max-w-full flex-1'>
        <img className='max-w-full w-full' src={Tracking1} alt='tracking1' />
      </div>
      <div className='text-center flex-1 my-6 md:my-0'>
        <h1 className='font-medium text-5xl'>Dynamic Tracking</h1>
        <p className='p-7'>
          Artisanal rugs, wallpaper, classic vases, and lighting
          accessories—well-made and carefully considered—whether made by Heath
          or by like-minded makers we admire. Welcome in.
        </p>
        <ShopButton />
      </div>
      <div className='max-w-full flex-1'>
        <img className='max-w-full w-full' src={Tracking2} alt='tracking1' />
      </div>
    </div>
  );
};

const BestSeller = memo(({ dataAllProducts }: IHomeProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_ALL_PRODUCTS_SAGA,
    });
  }, [dispatch]);

  return (
    <div>
      <div className='text-center'>
        <h1 className='font-medium text-5xl mt-20'>BEST SELLER</h1>
        <p className='mt-4 mb-8'>Best Seller Product This Week!</p>
      </div>
      <Grid container spacing={2}>
        {dataAllProducts.length > 0 ? (
          dataAllProducts
            .filter((item) => item.is.hot)
            .map((item) => (
              <Grid key={item._id} item xs={6} sm={4} md={3}>
                <ProductItem item={item} />
              </Grid>
            ))
        ) : (
          <LoadingPage2 />
        )}
      </Grid>
    </div>
  );
});

const DailyEssential = () => {
  return (
    <Grid spacing={2} container>
      <Grid item xs={12} sm={4}>
        <Item
          sx={{
            backgroundImage: `url(${Ba7})`,
            padding: '60px',
          }}
        >
          <Typography variant='subtitle1'>Daily Essentials</Typography>
          <Typography
            sx={{
              marginTop: '12px',
              marginBottom: '22px',
              fontWeight: '500',
            }}
            variant='h4'
          >
            Headphone
          </Typography>
          <ShopRoundButton />
        </Item>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Item
          sx={{
            backgroundImage: `url(${Ba8})`,
            padding: '60px',
          }}
        >
          <Typography variant='subtitle1'>Daily Essentials</Typography>
          <Typography
            sx={{
              marginTop: '12px',
              marginBottom: '22px',
              fontWeight: '500',
            }}
            variant='h4'
          >
            Watch
          </Typography>
          <ShopRoundButton />
        </Item>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Item
          sx={{
            backgroundImage: `url(${Ba9})`,
            padding: '60px',
          }}
        >
          <Typography variant='subtitle1'>Daily Essentials</Typography>
          <Typography
            sx={{
              marginTop: '12px',
              marginBottom: '22px',
              fontWeight: '500',
            }}
            variant='h4'
          >
            Phone
          </Typography>
          <ShopRoundButton />
        </Item>
      </Grid>
    </Grid>
  );
};

const NewArrivals = memo(({ dataAllProducts }: IHomeProps) => {
  return (
    <Box>
      <h1 className='font-medium text-5xl text-center mb-10 mt-20'>
        NEW ARRIVALS
      </h1>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Item
            sx={{
              marginRight: { sm: '0px', md: '16px' },
              backgroundImage: `url(${Ba11})`,
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              padding: '40px',
            }}
          >
            <Typography variant='h3'>Smart Watch</Typography>
            <Typography
              sx={{
                marginTop: '12px',
                marginBottom: '22px',
                fontWeight: '500',
              }}
              variant='subtitle1'
            >
              Your transeasonal saviour
            </Typography>
            <ShopWhiteButton />
          </Item>
        </Grid>
        <Grid item container xs={12} md={8}>
          <div className='mt-8 md:mt-0 md:flex justify-center items-center gap-4'>
            {dataAllProducts.length > 0 ? (
              dataAllProducts
                .filter((item) => item.is.new)
                .map((item) => (
                  <React.Fragment key={item._id}>
                    <ProductItem item={item} />
                  </React.Fragment>
                ))
            ) : (
              <LoadingPage2 />
            )}
          </div>
          {/* <Grid xs={12} md={4}>
        </Grid>
        <Grid xs={12} md={4}>
          <ProductItem />
        </Grid>
        <Grid xs={12} md={4}>
          <ProductItem />
        </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );
});

const InstagramComponent = () => {
  return (
    <div>
      <h1 className='font-medium text-5xl text-center mb-4 mt-20'>
        #INSTAGRAM
      </h1>
      <h5 className='font-medium text-2xl text-center mb-14 text-orange-500'>
        #prowe
      </h5>
      <InstaSwiper arrayInsta={arrayInsta} />
    </div>
  );
};

const GetUpdate = () => {
  return (
    <div className='md:flex justify-evenly items-center'>
      <div className='text-center'>
        <h1 className='text-white font-bold text-5xl'>GET UPDATE</h1>
        <p className='text-white mt-4 mb-4 md:mb-0'>
          Subscribe our newsletter and get <br /> discount 30% off
        </p>
      </div>
      <div>
        <Paper
          component='form'
          sx={{
            p: '2px 4px',
            m: '0px auto',
            display: 'flex',
            alignItems: 'center',
            width: { xs: '300px', md: '400px' },
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder='Your email address...'
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton
            color='primary'
            sx={{ p: '10px' }}
            aria-label='directions'
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
};

export const Home = () => {
  const dispatch = useDispatch();
  const { dataAllProducts } = useSelector(
    (state: RootState) => state.productReducer
  );

  useEffect(() => {
    dispatch({
      type: GET_ALL_PRODUCTS_SAGA,
    });
  }, [dispatch]);

  return (
    <>
      <Box sx={{ my: 4 }}>
        <Carousel />
      </Box>
      <Container maxWidth='xl'>
        <ServiceItems />
        <DynamicTracking />
        <BestSeller dataAllProducts={dataAllProducts} />
      </Container>
      <Box sx={{ marginTop: '30px', marginBottom: '30px' }}>
        <Box
          sx={{
            backgroundColor: '#faf7f2',
            padding: { xs: '0', md: '50px', lg: '90px' },
          }}
        >
          <Container maxWidth='xl'>
            <DailyEssential />
          </Container>
        </Box>
      </Box>
      <Container maxWidth='xl'>
        <NewArrivals dataAllProducts={dataAllProducts} />
        <InstagramComponent />
      </Container>
      <Item
        sx={{
          marginTop: '70px',
          backgroundImage: `url(${Ba10})`,
          paddingTop: '100px',
          paddingBottom: '100px',
        }}
      >
        <GetUpdate />
      </Item>
    </>
  );
};
