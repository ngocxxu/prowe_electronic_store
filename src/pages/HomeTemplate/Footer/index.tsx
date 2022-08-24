import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  styled,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const Item = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    color: '#f97316',
  },
}));

export const Footer = () => {
  const logo = require('../../../assets/img/others/logo.png');
  const atm = require('../../../assets/img/others/logoo-removebg-preview.png');

  return (
    <Container maxWidth='xl'>
      <div className='lg:flex justify-center items-center my-12'>
        <div className='flex-1 text-center md:text-left mx-auto md:block flex justify-center items-center flex-col'>
          <div className='max-w-1/4 md:mx-0 mx-auto'>
            <img className='w-40' src={logo} alt='logo' />
          </div>
          <p className='text-sm my-5'>
            Sophisticated simplicity for the <br /> independent mind.
          </p>
          <Stack direction='row'>
            <IconButton aria-label='FacebookIcon' color='primary'>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label='InstagramIcon' color='secondary'>
              <InstagramIcon />
            </IconButton>
            <IconButton color='primary'>
              <TwitterIcon />
            </IconButton>
            <IconButton color='error'>
              <GoogleIcon />
            </IconButton>
          </Stack>
        </div>
        <div className='md:text-left text-center flex-1 md:mt-0 mt-6'>
          <h3 className='text-xl font-semibold'>Help & Information</h3>
          <Divider
            sx={{
              border: '0.3px solid black',
              marginTop: '10px',
              marginBottom: '10px',
              marginRight: {
                xs: '100px',
                md: '300px',
              },
              marginLeft: {
                xs: '100px',
                md: '0px',
              },
            }}
          />
          <Item>About Us</Item>
          <Item>Privacy Policy</Item>
          <Item>Terms & Conditions</Item>
          <Item>Products Return</Item>
          <Item>Wholesale Policy</Item>
        </div>
        <div className='md:text-left text-center flex-1 md:mt-0 mt-6'>
          <h3 className='text-xl font-semibold'>About Us</h3>
          <Divider
            sx={{
              border: '0.3px solid black',
              marginTop: '10px',
              marginBottom: '10px',
              marginRight: {
                xs: '100px',
                md: '300px',
              },
              marginLeft: {
                xs: '100px',
                md: '0px',
              },
            }}
          />
          <Item>Pagination</Item>
          <Item>Terms & Conditions</Item>
          <Item>Contact</Item>
          <Item>Accessories</Item>
          <Item>Home Page</Item>
        </div>
        <div className='md:text-left text-center flex-1 md:mt-0 mt-6'>
          <h3 className='text-xl font-semibold'>Categories</h3>
          <Divider
            sx={{
              border: '0.3px solid black',
              marginTop: '10px',
              marginBottom: '10px',
              marginRight: {
                xs: '100px',
                md: '300px',
              },
              marginLeft: {
                xs: '100px',
                md: '0px',
              },
            }}
          />
          <Item>Menu items</Item>
          <Item>Help Center</Item>
          <Item>Address Store</Item>
          <Item>Privacy Policy</Item>
          <Item>HomePage</Item>
        </div>
      </div>
      <Divider />
      <div className='md:flex justify-between items-center my-4 md:mt-4 mt-6'>
        <p className='md:text-left text-center md:mb-0 mb-4'>
          © Copyright 2022 | Prowe By Ngoc Quach. Powered by Zupishop.
        </p>
        <div className='max-w-full'>
          <img className='w-full' src={atm} alt='atm' />
        </div>
      </div>
    </Container>
  );
};
