import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import { TCheckoutForm } from 'src/types/GeneralTypes';

const currencies = [
  {
    value: 'vn',
    label: 'Viet Nam',
  },
  {
    value: 'us',
    label: 'United State',
  },
  {
    value: 'uk',
    label: 'United Kingdom',
  },
  {
    value: 'ko',
    label: 'Korea',
  },
];

export const CheckoutForm = ({ handleChange }: TCheckoutForm) => {
  const { myInfo } = useSelector((state: RootState) => state.userReducer);

  return (
    <>
      {/* <Box component='form' autoComplete='off'> */}
      <Typography sx={{ mt: 3 }} variant='h6'>
        Contact Information
      </Typography>
      <Typography variant='body1'>{myInfo.email}</Typography>
      <Typography sx={{ mt: 4, mb: 2 }} variant='h6'>
        Shipping Address
      </Typography>
      <TextField
        fullWidth
        id='country'
        name='country'
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
          onChange={handleChange}
          id='name'
          name='name'
          required
          // sx={{ mr: 0.5 }}
          fullWidth
          label='Your name'
        />
        {/* <TextField
            sx={{ ml: 0.5 }}
            fullWidth
            
            label='Last name'
          /> */}
      </Box>
      <TextField
        onChange={handleChange}
        id='address'
        name='address'
        required
        sx={{ mt: 1 }}
        fullWidth
        label='Address'
      />
      <TextField
        onChange={handleChange}
        id='apartment'
        name='apartment'
        sx={{ mt: 1 }}
        fullWidth
        label='Apartment, suite, etc. (optional)'
      />
      <TextField
        onChange={handleChange}
        id='city'
        name='city'
        sx={{ mt: 1 }}
        fullWidth
        label='City'
      />
      <Box
        sx={{
          mt: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* <TextField   onChange={handleChange}
          id='city'
          name='city'
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
          </TextField> */}
        <TextField
          onChange={handleChange}
          id='zip'
          name='zip'
          // sx={{ ml: 0.5 }}
          fullWidth
          label='ZIP code'
        />
      </Box>
      {/* </Box> */}
    </>
  );
};
