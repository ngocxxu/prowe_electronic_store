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
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import { updateActiveStep } from 'src/redux/reducers/otherReducer';

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
