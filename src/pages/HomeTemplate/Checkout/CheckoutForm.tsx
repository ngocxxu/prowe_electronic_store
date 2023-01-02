import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
