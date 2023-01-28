import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { memo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import { updateActiveStep } from 'src/redux/reducers/otherReducer';
import { TCheckoutShipping } from 'src/types/GeneralTypes';

export const shipMethods = [
  {
    value: 'standard',
    label: 'Standard',
    price: 19.72,
  },
  {
    value: 'fastDelivery',
    label: 'Fast Delivery',
    price: 44.44,
  },
];

export const CheckoutShipping = memo(
  ({ handleChange, values }: TCheckoutShipping) => {
    const dispatch = useDispatch();
    const { myInfo } = useSelector((state: RootState) => state.userReducer);
    const { activeStep } = useSelector(
      (state: RootState) => state.otherReducer
    );
    const {
      dataFormCheckout: { shippingMethod },
    } = useSelector((state: RootState) => state.cartReducer);
    const refPriceShippingMethod = useRef(
      shipMethods.find((item) => item.value === shippingMethod)
    );

    return (
      <>
        <Box
          sx={{
            border: '1px solid #d9d9d9',
            borderRadius: '5px',
            mt: 4,
            mb: 4,
            p: 2,
          }}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <div className='flex justify-between items-center'>
              <h1 className='text-[#737373]'>Contact</h1>
              <p className='ml-10'>{myInfo.email}</p>
            </div>
            {/* <Button
              variant='text'
              onClick={() => dispatch(updateActiveStep(0))}
            >
              Change
            </Button> */}
          </Stack>
          <Divider />
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <div className='flex justify-between items-center'>
              <h1 className='text-[#737373]'>Name</h1>
              <p className='ml-10'>{values.name}</p>
            </div>
            <Button
              variant='text'
              onClick={() => dispatch(updateActiveStep(0))}
            >
              Change
            </Button>
          </Stack>
          <Divider />
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >
            <div className='flex justify-between items-center'>
              <h1 className='text-[#737373]'>Ship to</h1>
              <p className='ml-10'>{values.address}</p>
            </div>
            <Button
              variant='text'
              onClick={() => dispatch(updateActiveStep(0))}
            >
              Change
            </Button>
          </Stack>
          {activeStep === 2 && (
            <>
              <Divider />
              <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
              >
                <div className='flex justify-between items-center'>
                  <h1 className='text-[#737373]'>Method</h1>
                  <p className='ml-10'>
                    {refPriceShippingMethod.current?.label} - $
                    {refPriceShippingMethod.current?.price}
                  </p>
                </div>
                <Button
                  onClick={() => dispatch(updateActiveStep(1))}
                  variant='text'
                >
                  Change
                </Button>
              </Stack>
            </>
          )}
        </Box>
        {activeStep === 1 ? (
          <>
            <Typography sx={{ mt: 4 }} variant='h6'>
              Shipping Method
            </Typography>
            <Box
              sx={{
                border: '1px solid #d9d9d9',
                borderRadius: '5px',
                mt: 1,
                mb: 4,
                p: 1.5,
              }}
            >
              <FormControl fullWidth>
                <RadioGroup
                  value={values.shippingMethod}
                  onChange={handleChange}
                  id='shippingMethod'
                  name='shippingMethod'
                >
                  {shipMethods.map((option, index) => (
                    <Stack
                      key={index}
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <FormControlLabel
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                      />
                      <p>${option.price}</p>
                    </Stack>
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 4 }} variant='h6'>
              Payment
            </Typography>
            <Box component='form' autoComplete='off'>
              <TextField
                required
                onChange={handleChange}
                id='cardNumber'
                name='cardNumber'
                sx={{ mt: 2 }}
                fullWidth
                label='Card number (ex: 4242 4242 4242)'
              />
              <Box
                sx={{
                  mt: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TextField
                  required
                  sx={{ mr: 0.5 }}
                  fullWidth
                  onChange={handleChange}
                  id='expYear'
                  name='expYear'
                  label='Expiry Year (ex: 2030)'
                />
                <TextField
                  required
                  sx={{ ml: 0.5 }}
                  fullWidth
                  onChange={handleChange}
                  id='expMonth'
                  name='expMonth'
                  label='Expiry Month (ex: 03)'
                />
              </Box>
              <TextField
                required
                sx={{ mt: 1 }}
                fullWidth
                onChange={handleChange}
                id='CVCAndCVV'
                name='CVCAndCVV'
                label='CVC/CVV (ex: 403)'
              />
            </Box>
          </>
        )}
      </>
    );
  }
);
