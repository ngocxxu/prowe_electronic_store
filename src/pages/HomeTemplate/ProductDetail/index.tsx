import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GoogleIcon from '@mui/icons-material/Google';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ParaglidingOutlinedIcon from '@mui/icons-material/ParaglidingOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  styled,
  Tab,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Breadcrumb from 'src/components/Breadcrumb';
import { ProductSwiper } from 'src/components/Swiper';
import Insta10 from '../../../assets/img/lib/instagram10.jpg';
import Insta9 from '../../../assets/img/lib/instagram9.jpg';

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
  padding: '18px 65px',
}));

const ProductIntro = () => {
  const [value, setValue] = useState<number | null>(2);
  const [totalBill, setTotalBill] = useState<number | string | null>(1);

  return (
    <Grid container spacing={10}>
      <Grid item md={7}>
        <ProductSwiper />
      </Grid>
      <Grid item md={5}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
        >
          <Box>
            <Typography variant='h5' sx={{ fontWeight: '500' }}>
              Laptop ASUS VivoBook
            </Typography>
            <Stack direction='row' alignItems='center'>
              <Typography
                variant='subtitle1'
                sx={{
                  fontWeight: '500',
                  color: '#83868c',
                  textDecoration: 'line-through',
                }}
              >
                $360.00 USD
              </Typography>
              <Typography
                variant='h6'
                sx={{ fontWeight: '500', color: '#f97316' }}
              >
                &nbsp; $360.00 USD
              </Typography>
            </Stack>
          </Box>
          <Tooltip
            sx={{
              backgroundColor: 'white',
              border: '1px solid #f4f4f4',
              '&:hover': {
                backgroundColor: '#f9773a',
                color: 'white',
                border: '1px solid transparent',
              },
            }}
            title='Add to Wishlist'
            placement='top'
            arrow
          >
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack direction='row' alignItems='center' sx={{ margin: '20px 0' }}>
          <Rating name='read-only' value={value} readOnly size='small' />
          <Typography variant='caption'>&nbsp; No reviews</Typography>
        </Stack>
        <Divider />
        <Typography sx={{ color: '#969696', margin: '20px 0' }} variant='body1'>
          Things You Need To Know There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words which don't look even
          slightly believable. If you are going to use a passage of Lorem Ipsum,
          you need to...
        </Typography>
        <Stack
          spacing={3}
          direction='row'
          alignItems='center'
          sx={{ margin: '20px 0' }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              textTransform: 'initial',
              cursor: 'pointer',
              color: '#83868c',
              '&:hover': {
                color: '#f97316',
              },
            }}
            variant='subtitle1'
          >
            Delivery & Return
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              textTransform: 'initial',
              cursor: 'pointer',
              color: '#83868c',
              '&:hover': {
                color: '#f97316',
              },
            }}
            variant='subtitle1'
          >
            Ask a Question
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          direction='row'
          alignItems='center'
          sx={{ margin: '30px 0' }}
        >
          <TextField
            type='number'
            label='Amount'
            value={totalBill}
            onChange={(event) => setTotalBill(event.target.value)}
          />
          <Button
            sx={{ width: '100%' }}
            color='warning'
            variant='contained'
            size='large'
          >
            ADD TO CART
          </Button>
        </Stack>
        <Button
          sx={{ backgroundColor: 'black', width: '100%' }}
          color='warning'
          variant='contained'
          size='large'
        >
          BUY IT NOW
        </Button>
        <Divider sx={{ margin: '30px 0' }} />
        <Typography sx={{ margin: '20px 0' }} variant='body1'>
          Categories :{' '}
          <Typography
            component='span'
            sx={{
              color: '#969696',
              cursor: 'pointer',
              '&:hover': { color: '#f97316' },
            }}
          >
            laptop
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

const ProductServices = () => {
  return (
    <Stack
      sx={{ margin: '60px 0' }}
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      {arrayProductServices.map((item, index) => (
        <Item>
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
    </Stack>
  );
};

const ProductTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        borderTop: '1px solid #e1e1e1',
        padding: '10px 0',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            sx={{ paddingBottom: '15px' }}
            centered
            onChange={handleChange}
            aria-label='lab API tabs example'
            textColor='secondary'
            indicatorColor='secondary'
          >
            <Tab label='DESCRIPTION' value='1' />
            <Tab label='ADDITIONAL INFORMATION' value='2' />
            <Tab label='REVIEW' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <Container maxWidth='lg'>
            <Grid
              container
              spacing={4}
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Grid item md={6}>
                <img className='w-full' src={Insta10} alt='insta10' />
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant='h4'
                  sx={{ fontWeight: '500', textAlign: 'center' }}
                >
                  Things You Need To Know
                </Typography>
                <Typography
                  sx={{ color: '#969696', margin: '20px 0' }}
                  variant='body1'
                >
                  Things You Need To Know There are many variations of passages
                  of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to...
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant='h4'
                  sx={{ fontWeight: '500', textAlign: 'center' }}
                >
                  Things You Need To Know
                </Typography>
                <Typography
                  sx={{ color: '#969696', margin: '20px 0' }}
                  variant='body1'
                >
                  Things You Need To Know There are many variations of passages
                  of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to...
                </Typography>
              </Grid>
              <Grid item md={6}>
                <img className='w-full' src={Insta9} alt='insta9' />
              </Grid>
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value='2'>ADDITIONAL INFORMATION</TabPanel>
        <TabPanel value='3'>REVIEW</TabPanel>
      </TabContext>
    </Box>
  );
};

const RelatedProducts = () => {
  return (
  <Container maxWidth='xl' sx={{ padding: '50px 0' }}>
      <Typography variant='h3' sx={{ fontWeight: '500', textAlign: 'center' }}>
        RELATED PRODUCTS
      </Typography>
    </Container>
  );
};

export const ProductDetail = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{ paddingTop: '40px' }}>
        <Breadcrumb />
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
      <RelatedProducts />
    </>
  );
};
