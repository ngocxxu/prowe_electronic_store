import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {
  Badge,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Container } from '@mui/system';
import { memo, useState } from 'react';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Pd1 from '../../assets/img/product/7.1.jpg';
import { useNavigate } from 'react-router-dom';

type Anchor = 'top' | 'right';

export const TemporaryDrawer = memo(({ direction }: { direction: Anchor }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    top: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: {
          md: anchor === 'right' ? 400 : '100%',
          xs: anchor === 'right' ? 300 : '100%',
        },
        height: {
          md: anchor === 'top' ? 500 : '100%',
          xs: anchor === 'top' ? 300 : '100%',
        },
      }}
      role='presentation'
    >
      {anchor === 'top' ? (
        <Box>
          <Typography
            sx={{ textAlign: 'center', fontWeight: '600', mt: 4, mb: 6 }}
            variant='h3'
          >
            Start typing and hit Enter
          </Typography>
          <Container maxWidth='md'>
            <Box component='form'>
              <TextField
                fullWidth
                id='standard-search'
                label='Search anything'
                type='search'
                variant='standard'
              />
            </Box>
          </Container>
        </Box>
      ) : (
        <Box>
          <div className='flex flex-col h-screen'>
            <div className='flex justify-between items-center'>
              <IconButton>
                <ClearIcon />
              </IconButton>
              <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                Shopping Cart
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  fontWeight: '500',
                  mr: 2,
                  pl: 1,
                  backgroundColor: '#000',
                  color: '#fff',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                }}
              >
                3
              </Typography>
            </div>
            <Divider />
            <Box>
              <div className='flex justify-between items-center m-4'>
                <div className='flex justify-center items-center'>
                  <div className='cursor-pointer'>
                    <img width='80px' height='50px' src={Pd1} alt='pd1' />
                  </div>
                  <div className='flex-1 ml-4'>
                    <p className='cursor-pointer hover:text-orange-500'>
                      Over-Ear Headphones
                    </p>
                    <p>QTY : 1</p>
                    <p>$200.00</p>
                  </div>
                </div>
                <div className='cursor-pointer hover:text-orange-500'>
                  <DeleteForeverOutlinedIcon />
                </div>
              </div>
              <Divider />
            </Box>
            <div className='mt-auto'>
              <div className='p-4 flex justify-between items-center bg-slate-100'>
                <Typography variant='h6'>Total:</Typography>
                <Typography variant='h6' sx={{ color: 'orange' }}>
                  $880.00
                </Typography>
              </div>
              <div className='flex justify-center items-center'>
                <Button
                  onClick={() => navigate('/cart')}
                  sx={{
                    pt: 3,
                    pb: 3,
                    borderRadius: 0,
                    flex: 1,
                    backgroundColor: 'gray',
                    '&:hover': {
                      backgroundColor: 'orange',
                    },
                  }}
                  variant='contained'
                  size='large'
                >
                  View Cart
                </Button>
                <Button
                  onClick={() => navigate('/cart/checkout')}
                  sx={{
                    pt: 3,
                    pb: 3,
                    borderRadius: 0,
                    flex: 1,
                    backgroundColor: '#000',
                    '&:hover': {
                      backgroundColor: 'orange',
                    },
                  }}
                  variant='contained'
                  size='large'
                >
                  Check Out
                </Button>
              </div>
            </div>
          </div>
        </Box>
      )}
    </Box>
  );

  return (
    <div className='my-auto'>
      {direction === 'right' ? (
        <IconButton
          sx={{ color: 'black' }}
          onClick={toggleDrawer(direction, true)}
        >
          <Badge badgeContent={4} color='success'>
            <LocalMallOutlinedIcon />
          </Badge>
        </IconButton>
      ) : (
        <IconButton
          size='large'
          aria-label='search'
          sx={{
            color: 'black',
          }}
          onClick={toggleDrawer(direction, true)}
        >
          <SearchIcon />
        </IconButton>
      )}

      <Drawer
        anchor={direction}
        open={state[direction]}
        onClose={toggleDrawer(direction, false)}
      >
        {list(direction)}
      </Drawer>
    </div>
  );
});
