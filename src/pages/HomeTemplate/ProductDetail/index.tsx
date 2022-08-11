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
  Avatar,
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
import { ProductSwiper, RelatedProductSwiper } from 'src/components/Swiper';
import Insta10 from '../../../assets/img/lib/instagram10.jpg';
import Insta9 from '../../../assets/img/lib/instagram9.jpg';
import Prod from '../../../assets/img/product/14.1.jpg';

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
  const [reviewValue, setReviewValue] = useState<number | null>(2);

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
            <Tab label='REVIEW (5)' value='3' />
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
        <TabPanel value='2'>
          <Container maxWidth='lg'>
            <Grid container spacing={4}>
              <Grid item md={8} container>
                <Grid item md={6}>
                  <Typography
                    sx={{
                      letterSpacing: '2px',
                      color: '#979797',
                      fontWeight: '600',
                    }}
                    variant='overline'
                  >
                    MORE INFORMATION TO YOU
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      position: 'relative',
                      paddingBottom: '15px',
                    }}
                    variant='h5'
                  >
                    Things You Need To Know
                    <Box
                      sx={{
                        position: 'absolute',
                        background: '#ff871d',
                        width: '40px',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                      }}
                    ></Box>
                  </Typography>
                  <Typography
                    sx={{ color: '#969696', margin: '20px 0' }}
                    variant='body1'
                  >
                    We use industry standard SSL encryption to protect your
                    details. Potentially sensitive information such as your
                    name, address and card details are encoded so they can only
                    be read on the secure server.
                  </Typography>
                  {[
                    'Safe Payments',
                    'Accept Credit Cart',
                    'Different Payment Method',
                    'Price Include VAT',
                    'Easy To Order',
                  ].map((item, index) => (
                    <Typography
                      sx={{
                        color: '#979797',
                        fontWeight: '500',
                        padding: '5px 0',
                      }}
                      variant='subtitle1'
                      key={index}
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
                <Grid item md={6}>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      marginTop: '34px',
                    }}
                    variant='h6'
                  >
                    Express Delivery
                  </Typography>
                  {[
                    'Europe & USA within 2-4 days',
                    'Rest of the world within 3-7 days',
                    'Selected locations',
                  ].map((item, index) => (
                    <Typography
                      sx={{
                        color: '#979797',
                        fontWeight: '500',
                        padding: '5px 0',
                      }}
                      variant='subtitle1'
                      key={index}
                    >
                      {item}
                    </Typography>
                  ))}
                  <Typography
                    sx={{
                      fontWeight: '500',
                      marginTop: '10px',
                    }}
                    variant='h6'
                  >
                    Need More Information
                  </Typography>
                  {[
                    'Orders & Shipping',
                    'Returns & Refunds',
                    'Payments',
                    'Your Orders',
                  ].map((item, index) => (
                    <Typography
                      sx={{
                        color: '#979797',
                        fontWeight: '500',
                        padding: '5px 0',
                      }}
                      variant='subtitle1'
                      key={index}
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
              <Grid item md={4}>
                <img src={Prod} alt='prod' className='w-full' />
              </Grid>
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value='3'>
          <Container maxWidth='lg'>
            <Typography
              sx={{
                letterSpacing: '3px',
                position: 'relative',
                paddingBottom: '10px',
              }}
              variant='button'
              display='block'
              gutterBottom
            >
              CUSTOMER REVIEWS
              <Box
                sx={{
                  position: 'absolute',
                  background: '#ff871d',
                  width: '40px',
                  height: '2px',
                  bottom: 0,
                  left: 0,
                }}
              ></Box>
            </Typography>
            {/* <Typography
            sx={{
                marginBottom: '30px',
                marginTop: '20px',
              }}
            variant='subtitle2'
          >
            No reviews yet
          </Typography> */}
            <Box
              sx={{
                marginBottom: '30px',
                marginTop: '20px',
                border: '1px solid #c4c4c4',
                borderRadius: '10px',
                padding: '15px',
              }}
            >
              <Stack
                justifyContent='space-between'
                direction='row'
                alignItems='center'
              >
                <Stack
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Avatar
                    alt='Remy Sharp'
                    src='/static/images/avatar/1.jpg'
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box sx={{ marginLeft: '20px' }}>
                    <Typography variant='h6'>Bono</Typography>
                    <Typography variant='subtitle2' sx={{ color: '#979797' }}>
                      July 24, 2022 11:42 AM
                    </Typography>
                  </Box>
                </Stack>
                <Box>
                  <Rating name='read-only' value={reviewValue} readOnly />
                </Box>
              </Stack>
              <Typography
                sx={{ marginTop: '15px', marginLeft: '15px' }}
                variant='subtitle1'
              >
                hello hellhello helloohello hello
              </Typography>
            </Box>
            <Divider />
            <Stack direction='row' spacing={2} alignItems='center'>
              <Typography
                sx={{
                  fontWeight: '500',
                  marginTop: '30px',
                }}
                variant='subtitle1'
              >
                Your Rating:
              </Typography>
              <Box sx={{ marginTop: 'auto' }}>
                <Rating
                  sx={{ paddingTop: '33px' }}
                  name='simple-controlled'
                  value={reviewValue}
                  onChange={(event, newValue) => {
                    setReviewValue(newValue);
                  }}
                />
              </Box>
            </Stack>
            <Stack
              direction='row'
              spacing={2}
              justifyContent='center'
              alignItems='start'
              sx={{ marginTop: '15px' }}
            >
              <Box sx={{ width: '100%' }} component='form'>
                <TextField
                  error={false}
                  helperText='Please input your review.'
                  fullWidth
                  id='outlined-multiline-static'
                  label='Your Review'
                  multiline
                  rows={4}
                />
              </Box>
              <Button
                sx={{ width: '100%' }}
                size='large'
                color='warning'
                variant='contained'
              >
                Submit
              </Button>
            </Stack>
          </Container>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

const RelatedProducts = () => {
  return (
    <Container maxWidth='xl' sx={{ padding: '50px 0' }}>
      <Typography
        variant='h3'
        sx={{ fontWeight: '500', textAlign: 'center', marginBottom: '30px' }}
      >
        RELATED PRODUCTS
      </Typography>
      <RelatedProductSwiper />
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
