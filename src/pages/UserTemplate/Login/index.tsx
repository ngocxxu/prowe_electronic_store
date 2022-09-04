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
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Notification } from 'src/components/Notification';
import { LOGIN_USER_SAGA } from 'src/redux/consts/consts';
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
        type: LOGIN_USER_SAGA,
        payload: {
          data: values,
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
      <Notification />
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
