import {
  Badge,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import { GET_MY_USER_SAGA } from 'src/redux/consts/consts';
import HorizontalLinearStepper from './Stepper';
import Shipper1 from '../../../assets/img/gif/shipper1.gif';
import { useNavigate } from 'react-router-dom';
import { shipMethods } from './CheckoutShipping';

export const Checkout = () => {
  const {
    dataCart: { lineItems, subTotal },
    dataFormCheckout: { shippingMethod },
  } = useSelector((state: RootState) => state.cartReducer);
  const { activeStep } = useSelector((state: RootState) => state.otherReducer);
  const refPriceShippingMethod = useRef(
    shipMethods.find((item) => item.value === shippingMethod)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: GET_MY_USER_SAGA,
    });
  }, [dispatch]);

  useEffect(() => {
    if (shippingMethod) {
      refPriceShippingMethod.current = shipMethods.find(
        (item) => item.value === shippingMethod
      );
    }
  }, [shippingMethod]);

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
          {lineItems.length > 0 ? (
            <>
              {lineItems.map((item) => {
                const { subQuantity, product } = item;
                return (
                  <Fragment key={product._id}>
                    <Box>
                      <div className='flex justify-between items-center mb-4'>
                        <div className='flex justify-center items-center'>
                          <Badge badgeContent={subQuantity} color='primary'>
                            <div className='max-w-full w-20 border rounded border-[#b8aa83]'>
                              <img
                                alt='prod'
                                src={product.image?.main}
                                className='w-full'
                              />
                            </div>
                          </Badge>
                          <div
                            className='ml-4'
                            onClick={() => {
                              navigate(`/shop/${product._id}`);
                            }}
                          >
                            <Typography variant='subtitle1'>
                              <span className='hover:text-orange-500 transition ease-out cursor-pointer'>
                                {product.name}
                              </span>
                            </Typography>
                          </div>
                        </div>
                        <div>${product.price?.raw}</div>
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
                  {activeStep === 2
                    ? `$${refPriceShippingMethod.current?.price}`
                    : ' Calculated at next step'}
                </Typography>
              </div>
              <Divider sx={{ mt: 2, mb: 2 }} />
              <div className='flex justify-between items-center'>
                <p>Total</p>
                <div className='flex justify-center items-center'>
                  <Typography variant='overline' display='block'>
                    USD &nbsp;
                  </Typography>
                  {refPriceShippingMethod.current?.price && activeStep === 2 ? (
                    <Typography variant='h5'>
                      {subTotal + refPriceShippingMethod.current?.price}
                    </Typography>
                  ) : (
                    <Typography variant='h5'>${subTotal}</Typography>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                className='block mx-auto my-auto'
                src={Shipper1}
                alt='Shipper1'
              />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
