import {
  Badge,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import { GET_MY_USER_SAGA } from 'src/redux/consts/consts';
import Pd1 from '../../../assets/img/product/7.1.jpg';
import HorizontalLinearStepper from './Stepper';

export const Checkout = () => {
  const {
    dataCart: { lineItems, subTotal },
  } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_MY_USER_SAGA,
    });
  }, [dispatch]);

  return (
    <Container maxWidth='lg'>
      <Grid sx={{ height: '100vh' }} container>
        <Grid item xs={12} md={7}>
          <Typography sx={{ m: 4, mt: 8, mb: 0 }} variant='h4'>
            Prowe - Electronic Store
          </Typography>
          <HorizontalLinearStepper />
        </Grid>
        <Grid
          sx={{ backgroundColor: '#fafafa', p: 4, mt: 7 }}
          item
          xs={12}
          md={5}
        >
          {lineItems.length > 0 &&
            lineItems.map((item, index) => {
              const { _id, subQuantity, price, image, name } = item;
              return (
                <Fragment key={_id}>
                  <Box>
                    <div className='flex justify-between items-center mb-4'>
                      <div className='flex justify-center items-center'>
                        <Badge badgeContent={4} color='primary'>
                          <div className='max-w-full w-20 border rounded border-[#b8aa83]'>
                            <img alt='prod' src={Pd1} className='w-full' />
                          </div>
                        </Badge>
                        <div className='ml-4'>
                          <Typography variant='subtitle1'>{name}</Typography>
                          <Typography variant='caption'>white</Typography>
                        </div>
                      </div>
                      <div>${price?.raw}</div>
                    </div>
                  </Box>
                  <Divider sx={{ mt: 2, mb: 2 }} />
                </Fragment>
              );
            })}

          <div className='flex justify-between items-center'>
            <Typography sx={{ textAlign: 'right' }}>Subtotal</Typography>
            <Typography sx={{ textAlign: 'right' }}>${subTotal}</Typography>
          </div>
          <div className='flex justify-between items-center'>
            <Typography sx={{ textAlign: 'right' }}>Shipping</Typography>
            <Typography
              sx={{ textAlign: 'right' }}
              variant='subtitle2'
              display='block'
            >
              Calculated at next step
            </Typography>
          </div>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <div className='flex justify-between items-center'>
            <p>Total</p>
            <div className='flex justify-center items-center'>
              <Typography variant='overline' display='block'>
                USD &nbsp;
              </Typography>
              <Typography variant='h5'>$396.00</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
