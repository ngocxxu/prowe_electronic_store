import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ParaglidingOutlinedIcon from '@mui/icons-material/ParaglidingOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Box,
  Container,
  IconButton,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumb from 'src/components/Breadcrumb';
import { LoadingPage2 } from 'src/components/Loading';
import { RelatedProductSwiper } from 'src/components/Swiper';
import { RootState } from 'src/redux/configStore';
import {
  GET_ALL_PRODUCTS_SAGA,
  GET_COMMENT_SAGA,
  GET_PRODUCT_SAGA,
} from 'src/redux/consts/consts';
import { ProductIntro } from './ProductIntro';
import { ProductTabs } from './ProductTabs';

const arrayProductServices = [
  {
    icon: ParaglidingOutlinedIcon,
    content: 'WORLDWIDE SHIPPING',
  },
  {
    icon: AssignmentReturnOutlinedIcon,
    content: 'FREE 60-DAY RETURNS',
  },
  {
    icon: EmojiEventsOutlinedIcon,
    content: '24 MONTH WARRANTY',
  },
  {
    icon: GppGoodOutlinedIcon,
    content: '100% SECRUE CHECKOUT',
  },
];

const Item = styled(Box)(({ theme }) => ({
  border: '1px solid #e1e1e1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ProductServices = () => {
  return (
    <div className='lg:flex justify-center items-center my-20 gap-10'>
      {arrayProductServices.map((item, index) => (
        <Item
          sx={{
            textAlign: 'center',
            margin: '10px 0',
            padding: { md: '10px 50px', lg: '18px 65px' },
          }}
          key={index}
        >
          <item.icon fontSize='large' sx={{ color: '#f97316' }} />
          <Typography
            sx={{
              color: 'black',
              letterSpacing: '4px',
              fontWeight: '500',
              paddingTop: '18px',
            }}
            variant='overline'
          >
            {item.content}
          </Typography>
        </Item>
      ))}
    </div>
  );
};

const RelatedProducts = () => {
  const { dataAllProducts, isPendingProduct } = useSelector(
    (state: RootState) => state.productReducer
  );

  return (
    <Container maxWidth='xl' sx={{ padding: '50px 0' }}>
      <Typography
        variant='h3'
        sx={{ fontWeight: '500', textAlign: 'center', marginBottom: '30px' }}
      >
        RELATED PRODUCTS
      </Typography>
      {!isPendingProduct && dataAllProducts.length > 0 ? <RelatedProductSwiper /> : <LoadingPage2 />}
    </Container>
  );
};

export const ProductDetail = () => {
  const { dataProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({
      type: GET_ALL_PRODUCTS_SAGA,
    });
    dispatch({
      type: GET_PRODUCT_SAGA,
      payload: id,
    });
    dispatch({
      type: GET_COMMENT_SAGA,
      payload: id,
    });
  }, [dispatch, id]);

  return (
    <>
      {dataProduct.name.length > 0 ? (
        <>
          <Container maxWidth='xl' sx={{ paddingTop: '40px' }}>
            <Box sx={{ paddingBottom: '30px' }}>
              <Breadcrumb />
            </Box>
            <ProductIntro />
            <ProductServices />
          </Container>
          <ProductTabs />
          <Stack
            direction='row'
            justifyContent='center'
            alignItems='center'
            sx={{
              borderTop: '1px solid #e1e1e1',
              borderBottom: '1px solid #e1e1e1',
              padding: '15px 0',
            }}
            spacing={3}
          >
            <IconButton color='error'>
              <GoogleIcon />
            </IconButton>
            <IconButton color='primary'>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label='InstagramIcon' color='secondary'>
              <InstagramIcon />
            </IconButton>
          </Stack>
        </>
      ) : (
        <LoadingPage2 />
      )}

      <RelatedProducts />
    </>
  );
};
