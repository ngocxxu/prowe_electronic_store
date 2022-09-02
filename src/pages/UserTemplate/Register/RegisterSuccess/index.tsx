import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Notification } from 'src/components/Notification';

const RegisterSuccess = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: '350px' }} component='form' autoComplete='off'>
      <Notification />
      <Typography sx={{ textAlign: 'center' }} variant='h5'>
        Thank you for registering
      </Typography>
      <Typography
        sx={{ textAlign: 'center', mt: 1, mb: 2, color: 'orange' }}
        variant='subtitle1'
      >
        You have successfully logged in
      </Typography>
      <div className='bg-slate-200 p-3 text-center'>
        <p
          className='cursor-pointer hover:text-orange-500'
          onClick={() => navigate('/')}
        >
          Back to Homepage
        </p>
      </div>
    </Box>
  );
};

export default RegisterSuccess;
