import ClearIcon from '@mui/icons-material/Clear';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
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
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Container } from '@mui/system';
import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { REMOVE_TO_CART_SAGA } from 'src/redux/consts/consts';
import { ICart } from 'src/types/GeneralTypes';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

type Anchor = 'top' | 'right';

export const TemporaryDrawer = memo(
  ({ direction, dataCart }: { direction: Anchor; dataCart?: ICart }) => {
    const dispatch = useDispatch();
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
                <IconButton
                  onClick={() => setState({ ...state, right: false })}
                >
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
                  {dataCart?.lineItems.length}
                </Typography>
              </div>
              <Divider />
              {dataCart?.lineItems && dataCart.lineItems.length > 0 ? (
                dataCart.lineItems.map((item) => (
                  <Box key={item._id}>
                    <div className='flex justify-between items-center m-4'>
                      <div className='flex justify-center items-center'>
                        <div className='cursor-pointer'>
                          <img
                            width='80px'
                            height='50px'
                            src={item.image.main}
                            alt={item.name}
                          />
                        </div>
                        <div className='flex-1 ml-4'>
                          <p className='cursor-pointer hover:text-orange-500'>
                            {item.name}
                          </p>
                          <p>QTY : {item.subQuantity}</p>
                          <p>${item.price?.raw}</p>
                        </div>
                      </div>
                      <IconButton
                        className='cursor-pointer hover:text-orange-500'
                        onClick={() =>
                          dispatch({
                            type: REMOVE_TO_CART_SAGA,
                            payload: {
                              idCart: dataCart.idCart,
                              idProduct: item._id,
                            },
                          })
                        }
                      >
                        <DeleteForeverOutlinedIcon />
                      </IconButton>
                    </div>
                    <Divider />
                  </Box>
                ))
              ) : (
                <div className='p-4 flex flex-col items-center justify-center'>
                  <p>Add more for cart!</p>
                  <RemoveShoppingCartIcon fontSize='large' />
                </div>
              )}
              <div className='mt-auto'>
                <div className='p-4 flex justify-between items-center bg-slate-100'>
                  <Typography variant='h6'>Total:</Typography>
                  <Typography variant='h6' sx={{ color: 'orange' }}>
                    $880.00
                  </Typography>
                </div>
                <div className='flex justify-center items-center'>
                  <Button
                    onClick={() => {
                      setState({ ...state, right: false });
                      navigate('/cart');
                    }}
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
            <Badge badgeContent={dataCart?.lineItems.length} color='success'>
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
  }
);
