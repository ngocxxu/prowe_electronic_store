import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Notification } from 'src/components/Notification';

const LoginExpired = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: '350px' }} component='form' autoComplete='off'>
      <Notification />
      <Typography sx={{ textAlign: 'center' }} variant='h5'>
        Your login session has expired
      </Typography>
      <Typography
        sx={{ textAlign: 'center', mt: 1, mb: 2, color: 'orange' }}
        variant='subtitle1'
      >
        Please log in again
      </Typography>
      <div className='bg-slate-200 p-3 text-center'>
        <p
          className='cursor-pointer hover:text-orange-500'
          onClick={() => navigate('/login')}
        >
          Back to Login page
        </p>
      </div>
    </Box>
  );
};

export default LoginExpired;
