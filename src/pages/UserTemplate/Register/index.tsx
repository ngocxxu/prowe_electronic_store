import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { REGISTER_USER_SAGA } from 'src/redux/consts/consts';
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

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState({
    showPassword: false,
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch({
        type: REGISTER_USER_SAGA,
        payload: {
          data: values,
          navigate: () => navigate('/register/register-success'),
        },
      });
    },
  });

  const handleClickShowPassword = () => {
    setShow({
      ...show,
      showPassword: !show.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
      <FormControl
        error={formik.touched.password && Boolean(formik.errors.password)}
        sx={{ mt: 2, mb: 2, width: '100%' }}
        variant='outlined'
      >
        <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
        <OutlinedInput
          fullWidth
          id='password'
          name='password'
          label='Password'
          type={show.showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {show.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText id='password'>
          {formik.touched.password && formik.errors.password}
        </FormHelperText>
      </FormControl>

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
