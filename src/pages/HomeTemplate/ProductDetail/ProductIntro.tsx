import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductSwiper } from 'src/components/Swiper';
import { RootState } from 'src/redux/configStore';
import {
  ADD_TO_CART_SAGA,
  ADD_TO_FAVOR_SAGA,
  REMOVE_TO_FAVOR_SAGA,
} from 'src/redux/consts/consts';

export const ProductIntro = () => {
  const [toggleFavor, setToggleFavor] = useState(false);
  const [quantity, setQuantity] = useState<number | string>(1);
  const theme = useTheme();
  const dispatch = useDispatch();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { dataComment } = useSelector(
    (state: RootState) => state.commentReducer
  );
  const { dataCart } = useSelector((state: RootState) => state.cartReducer);
  const { dataFavor } = useSelector((state: RootState) => state.favorReducer);
  const { dataProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const {
    inventory,
    image,
    name,
    price,
    _id,
    avgReviews,
    categories,
    description,
  } = dataProduct;

  return (
    <Grid container spacing={!isSmall ? 10 : 5}>
      <Grid item xs={12} md={7}>
        <ProductSwiper imageLib={image.library} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
        >
          <Box>
            <Typography variant='h5' sx={{ fontWeight: '500' }}>
              {name}
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
                ${price.raw} USD
              </Typography>
              <Typography
                variant='h6'
                sx={{ fontWeight: '500', color: '#f97316' }}
              >
                &nbsp; ${price.raw} USD
              </Typography>
            </Stack>
          </Box>
          <Tooltip
            onClick={() => {
              setToggleFavor(!toggleFavor);
              !toggleFavor
                ? dispatch({
                    type: ADD_TO_FAVOR_SAGA,
                    payload: {
                      idFavor: dataFavor.idFavor,
                      data: {
                        idProduct: _id,
                      },
                    },
                  })
                : dispatch({
                    type: REMOVE_TO_FAVOR_SAGA,
                    payload: {
                      idFavor: dataFavor.idFavor,
                      idProduct: _id,
                    },
                  });
            }}
            sx={{
              backgroundColor: `${
                dataFavor.favorItems.some((item) => item.product._id === _id)
                  ? '#f9773a'
                  : 'white'
              }`,
              color: `${
                dataFavor.favorItems.some((item) => item.product._id === _id)
                  ? 'white'
                  : 'rgba(0, 0, 0, 0.54)'
              }`,
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
          <Rating name='read-only' value={avgReviews} readOnly size='small' />
          {dataComment.length > 0 ? (
            <Typography variant='caption'>
              &nbsp; {dataComment.length} reviews
            </Typography>
          ) : (
            <Typography variant='caption'>&nbsp; No reviews</Typography>
          )}
        </Stack>
        <Divider />
        <Typography sx={{ color: '#969696', margin: '20px 0' }} variant='body1'>
          {description}
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
            onKeyPress={(e) => {
              if (e.code === 'Minus') {
                e.preventDefault();
              }
            }}
            inputProps={{ min: '1', step: '1' }}
            type='number'
            label='Amount'
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <Typography sx={{ margin: '20px 0' }} variant='body1'>
            <span className='text-red-600'>{inventory} item(s)</span> available
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          direction='row'
          alignItems='center'
          sx={{ margin: '30px 0' }}
        >
          <Button
            onClick={() =>
              dispatch({
                type: ADD_TO_CART_SAGA,
                payload: {
                  idCart: dataCart.idCart,
                  data: {
                    idProduct: _id,
                    quantity,
                    price: price.raw,
                  },
                },
              })
            }
            startIcon={<AddShoppingCartIcon />}
            sx={{ width: '100%' }}
            color='warning'
            variant='contained'
            size='large'
          >
            ADD TO CART
          </Button>
          <Button
            sx={{ backgroundColor: 'black', width: '100%' }}
            color='warning'
            variant='contained'
            size='large'
          >
            BUY IT NOW
          </Button>
        </Stack>
        <Divider sx={{ margin: '30px 0' }} />
        <Typography sx={{ margin: '20px 0' }} variant='body1'>
          Categories :
          <Typography
            component='span'
            sx={{
              color: '#969696',
              cursor: 'pointer',
              '&:hover': { color: '#f97316' },
            }}
          >
            &nbsp;{categories.join(', ')}
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};
