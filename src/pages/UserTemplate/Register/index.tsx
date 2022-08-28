import { Box, Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

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

const Register = () => {
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
        Register right now!
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
        REGISTER
      </Button>
      <div className='bg-slate-200 p-3 text-center'>
        <p
          className='cursor-pointer hover:text-orange-500'
          onClick={() => navigate('/login')}
        >
          Back to login
        </p>
      </div>
    </Box>
  );
};

export default Register;
