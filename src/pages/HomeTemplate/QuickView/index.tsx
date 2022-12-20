import { useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button/Button';
import Divider from '@mui/material/Divider/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductSwiper } from 'src/components/Swiper';
import { RootState } from 'src/redux/configStore';
import { ADD_TO_CART_SAGA } from 'src/redux/consts/consts';
import { toggleOpenQuickViewModal } from 'src/redux/reducers/otherReducer';

const QuickView = () => {
  const { dataProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const { dataCart } = useSelector((state: RootState) => state.cartReducer);
  const [quantity, setQuantity] = useState<number | string>(1);
  const { image, name, price, _id, description } = dataProduct;

  return (
    <Grid container spacing={!isSmall ? 10 : 5}>
      <Grid item xs={12} md={7}>
        <ProductSwiper imageLib={image.library} />
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant='h5' sx={{ fontWeight: '500' }}>
          {name}
        </Typography>
        <Typography sx={{ mt: 1, mb: 1, fontWeight: '500' }} variant='body1'>
          ${price.raw} USD
        </Typography>
        <Divider />
        <Typography sx={{ color: '#969696', margin: '20px 0' }} variant='body1'>
          {description}
        </Typography>
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
          <Button
            onClick={() => {
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
              });
              dispatch(toggleOpenQuickViewModal(false));
            }}
            sx={{ width: '100%' }}
            color='warning'
            variant='contained'
            size='large'
          >
            ADD TO CART
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default QuickView;
