import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box
      onSubmit={formik.handleSubmit}
      sx={{ maxWidth: '350px' }}
      component='form'
      autoComplete='off'
    >
      <Typography sx={{ textAlign: 'center' }} variant='h5'>
        Great to have you back!
      </Typography>
      <TextField
        fullWidth
        margin='normal'
        id='email'
        name='email'
        label='Email Address'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        margin='normal'
        id='password'
        name='password'
        label='Password'
        type='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <p className='cursor-pointer hover:text-orange-500 text-slate-400'>
        Forgot your password?
      </p>
      <Button
        type='submit'
        sx={{
          width: '100%',
          mt: 2,
          mb: 2,
          backgroundColor: '#000',
          '&:hover': {
            backgroundColor: 'orange',
          },
        }}
        variant='contained'
        size='large'
      >
        LOG IN
      </Button>
      <div className='bg-slate-200 p-3 text-center'>
        <p>
          Don’t have an account? &nbsp;
          <span
            className='cursor-pointer hover:text-orange-500 text-gray-400'
            onClick={() => navigate('/register')}
          >
            Register now
          </span>
        </p>
      </div>
    </Box>
  );
};

export default Login;
