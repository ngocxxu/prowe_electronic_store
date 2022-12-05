import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/redux/configStore';
import { updateActiveStep } from 'src/redux/reducers/otherReducer';
import Pd1 from '../../../assets/img/product/7.1.jpg';
import HorizontalLinearStepper from './Stepper';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export const CheckoutForm = () => {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <Box component='form' autoComplete='off'>
        <Typography sx={{ mt: 3 }} variant='h6'>
          Contact Information
        </Typography>
        <TextField
          fullWidth
          margin='normal'
          id='outlined-number'
          label='Email'
        />
        <Typography sx={{ mt: 4, mb: 2 }} variant='h6'>
          Shipping Address
        </Typography>
        <TextField
          fullWidth
          id='outlined-select-currency'
          select
          label='Country / Region'
          // value={currency}
          onChange={handleChange}
          // helperText='Please select your currency'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            sx={{ mr: 0.5 }}
            fullWidth
            id='outlined-number'
            label='First name'
          />
          <TextField
            sx={{ ml: 0.5 }}
            fullWidth
            id='outlined-number'
            label='Last name'
          />
        </Box>
        <TextField
          sx={{ mt: 1 }}
          fullWidth
          id='outlined-number'
          label='Address'
        />
        <TextField
          sx={{ mt: 1 }}
          fullWidth
          id='outlined-number'
          label='Apartment, suite, etc. (optional)'
        />
        <TextField sx={{ mt: 1 }} fullWidth id='outlined-number' label='City' />
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TextField
            fullWidth
            id='outlined-select-currency'
            select
            label='State'
            // value={currency}
            sx={{ mr: 0.5 }}
            onChange={handleChange}
            // helperText='Please select your currency'
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            sx={{ ml: 0.5 }}
            fullWidth
            id='outlined-number'
            label='ZIP code'
          />
        </Box>
      </Box>
    </>
  );
};

export const CheckoutShipping = memo(() => {
  const dispatch = useDispatch();
  const { activeStep } = useSelector((state: RootState) => state.otherReducer);
  const [value, setValue] = useState('standard');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

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
            <p className='ml-10'>abc@gmail.com</p>
          </div>
          <Button variant='text' onClick={() => dispatch(updateActiveStep(0))}>
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
            <p className='ml-10'>15 Tran Hung Dao</p>
          </div>
          <Button variant='text' onClick={() => dispatch(updateActiveStep(0))}>
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
                <p className='ml-10'>Standard · $19.70</p>
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
              p: 1,
            }}
          >
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
            >
              <FormControl>
                <RadioGroup
                  aria-labelledby='demo-controlled-radio-buttons-group'
                  name='controlled-radio-buttons-group'
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value='standard'
                    control={<Radio />}
                    label='Standard'
                  />
                </RadioGroup>
              </FormControl>
              <p>$19.70</p>
            </Stack>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 4 }} variant='h6'>
            Payment
          </Typography>
          <Box component='form' autoComplete='off'>
            <TextField
              sx={{ mt: 2 }}
              fullWidth
              id='outlined-number'
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
                sx={{ mr: 0.5 }}
                fullWidth
                id='outlined-number'
                label='Expiry Year (ex: 2030)'
              />
              <TextField
                sx={{ ml: 0.5 }}
                fullWidth
                id='outlined-number'
                label='Expiry Month (ex: 03)'
              />
            </Box>
            <TextField
              sx={{ mt: 1 }}
              fullWidth
              id='outlined-number'
              label='CVC/CVV (ex: 403)'
            />
          </Box>
        </>
      )}
    </>
  );
});

export const Checkout = () => {
  return (
    <Container maxWidth='lg'>
      <Grid sx={{ height: '100vh' }} container>
        <Grid item xs={12} md={7}>
          <Typography sx={{ m: 4, mt: 8, mb: 0 }} variant='h4'>
            Prowe - Electronic Store Responsive Shopify Theme
          </Typography>
          <HorizontalLinearStepper />
        </Grid>
        <Grid sx={{ backgroundColor: '#fafafa', p: 4 }} item xs={12} md={5}>
          <Box sx={{ mt: 7 }}>
            <div className='flex justify-between items-center mb-4'>
              <div className='flex justify-center items-center'>
                <Badge badgeContent={4} color='primary'>
                  <div className='max-w-full w-20 border rounded border-[#b8aa83]'>
                    <img alt='prod' src={Pd1} className='w-full' />
                  </div>
                </Badge>
                <div className='ml-4'>
                  <Typography variant='subtitle1'>iPhone 12 Pro Max</Typography>
                  <Typography variant='caption'>white</Typography>
                </div>
              </div>
              <div>$320.00</div>
            </div>
          </Box>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <div className='flex justify-between items-center'>
            <Typography sx={{ textAlign: 'right' }}>Subtotal</Typography>
            <Typography sx={{ textAlign: 'right' }}>$360.00</Typography>
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
