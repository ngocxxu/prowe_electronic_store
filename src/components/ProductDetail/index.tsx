import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import { ProductSwiper } from '../Swiper';

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
  return <Stack></Stack>;
};

export const ProductDetail = () => {
  return (
    <Container maxWidth='xl' sx={{ paddingTop: '40px' }}>
      <Breadcrumb />
      <ProductIntro />
    </Container>
  );
};
