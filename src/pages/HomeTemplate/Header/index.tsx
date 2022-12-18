import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/Person';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Avatar, Badge, Chip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { cloneElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TemporaryDrawer } from 'src/components/Drawer/index';
import FeatureModal from 'src/components/Modal';
import { RootState } from 'src/redux/configStore';
import {
  ADD_TO_CART_SAGA,
  GET_CART_SAGA,
  GET_FAVOR_SAGA,
  GET_MY_USER_SAGA,
  LOGOUT_USER_SAGA,
  REMOVE_ALL_FAVOR_SAGA,
  REMOVE_TO_FAVOR_SAGA,
} from 'src/redux/consts/consts';
import {
  toggleOpenModal,
  toggleOpenQuickViewModal,
} from 'src/redux/reducers/otherReducer';
import { REFRESHTOKEN } from 'src/services/settings';
import { Props } from 'src/types/GeneralTypes';
import Stack from '@mui/material/Stack';
import ClearIcon from '@mui/icons-material/Clear';
import QuickView from '../QuickView';

const pages = [
  {
    name: 'Home',
    url: '/home',
  },
  {
    name: 'Shop',
    url: '/shop',
  },
  {
    name: 'Product',
    url: '/shop/63079c6758ddbddc04ac0d8c',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

const settings = ['Profile', 'Logout'];

function ElevationScroll({ children, window }: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = (props: Props) => {
  const { myInfo } = useSelector((state: RootState) => state.userReducer);
  const { dataCart } = useSelector((state: RootState) => state.cartReducer);
  const { dataFavor } = useSelector((state: RootState) => state.favorReducer);
  const { isOpenModal, isOpenQuickViewModal } = useSelector(
    (state: RootState) => state.otherReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logo = require('../../../assets/img/others/logo.png');

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    dispatch({
      type: GET_MY_USER_SAGA,
    });
    dispatch({
      type: GET_CART_SAGA,
      payload: myInfo.idCart,
    });
    dispatch({
      type: GET_FAVOR_SAGA,
      payload: myInfo.idFavor,
    });
  }, [dispatch, myInfo.idCart, myInfo.idFavor]);

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: 'white',
            paddingBottom: '10px',
            paddingTop: '10px',
          }}
        >
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Box
                onClick={() => navigate('/')}
                sx={{ display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }}
              >
                <img className='mw-full' width='150' src={logo} alt='logo' />
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page, index) => (
                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                      <Typography
                        onClick={() => navigate(page.url)}
                        textAlign='center'
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* Full Screen - Responsive*/}
              <Box
                onClick={() => navigate('/')}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <img className='mw-full' width='100' src={logo} alt='logo' />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                }}
              >
                {pages.map((page, index) => (
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      fontSize: '16px',
                      my: 2,
                      fontWeight: 'bold',
                      color: 'black',
                      display: 'block',
                      textTransform: 'initial',
                    }}
                  >
                    <Box onClick={() => navigate(page.url)}>{page.name}</Box>
                  </Button>
                ))}
              </Box>
              <Box sx={{ display: 'flex' }}>
                <TemporaryDrawer direction='top' />
                {myInfo.email ? (
                  <>
                    <Chip
                      sx={{ mt: 'auto', mb: 'auto' }}
                      onClick={handleOpenUserMenu}
                      avatar={
                        <Avatar
                          alt='Natacha'
                          src={`https://avatars.dicebear.com/api/bottts/${myInfo._id}.svg`}
                        />
                      }
                      label={`${myInfo.email}`}
                      variant='outlined'
                    />
                  </>
                ) : (
                  <>
                    <IconButton
                      onClick={() => navigate('/login')}
                      sx={{ color: 'black' }}
                    >
                      <PersonOutlineIcon />
                    </IconButton>
                  </>
                )}
                <IconButton
                  onClick={() => dispatch(toggleOpenModal(true))}
                  sx={{
                    color: 'black',
                  }}
                >
                  <Badge
                    badgeContent={dataFavor.favorItems?.length}
                    color='secondary'
                  >
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>

                {/* Modal for favorite items */}
                <FeatureModal
                  onClose={() => dispatch(toggleOpenModal(false))}
                  open={isOpenModal}
                >
                  <>
                    <Stack
                      direction='row'
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                      >
                        <FavoriteIcon /> Wishlist (
                        {dataFavor.favorItems?.length})
                      </Typography>
                      <div
                        className='text-red-600 cursor-pointer underline text-sm'
                        onClick={() =>
                          dispatch({
                            type: REMOVE_ALL_FAVOR_SAGA,
                            payload: dataFavor.idFavor,
                          })
                        }
                      >
                        Clear all
                      </div>
                    </Stack>
                    <Divider />
                    {dataFavor?.favorItems &&
                    dataFavor.favorItems?.length > 0 ? (
                      <>
                        {dataFavor.favorItems.map((item) => (
                          <Box key={item.product._id}>
                            <div className='flex justify-between items-center m-4'>
                              <div className='flex justify-center items-center'>
                                <div className='cursor-pointer'>
                                  <img
                                    width='80px'
                                    height='50px'
                                    src={item.product?.image?.main}
                                    alt={item.product?.name}
                                  />
                                </div>
                                <div className='flex-1 ml-4'>
                                  <p className='cursor-pointer hover:text-orange-500'>
                                    {item.product.name}
                                  </p>
                                  <p>${item.product.price?.raw}</p>
                                </div>
                              </div>
                              <Stack
                                direction='column'
                                justifyContent='center'
                                alignItems='flex-end'
                              >
                                <IconButton
                                  onClick={() =>
                                    dispatch({
                                      type: REMOVE_TO_FAVOR_SAGA,
                                      payload: {
                                        idFavor: dataFavor.idFavor,
                                        idProduct: item.product._id,
                                      },
                                    })
                                  }
                                >
                                  <ClearIcon fontSize='small' />
                                </IconButton>
                                <p className='text-gray-400 text-right'>
                                  In stock
                                </p>
                                <Button
                                  onClick={() =>
                                    dispatch({
                                      type: ADD_TO_CART_SAGA,
                                      payload: {
                                        idCart: dataCart.idCart,
                                        data: {
                                          idProduct: item.product._id,
                                          quantity: 1,
                                        },
                                      },
                                    })
                                  }
                                  variant='contained'
                                  size='small'
                                  color='error'
                                >
                                  Add to cart
                                </Button>
                              </Stack>
                            </div>
                            <Divider />
                          </Box>
                        ))}
                        <Button
                          sx={{ mt: 2 }}
                          onClick={() => navigate('/shop')}
                          size='large'
                          variant='outlined'
                          color='inherit'
                          endIcon={<ArrowForwardIcon />}
                        >
                          CONTINUE SHOPPING
                        </Button>
                      </>
                    ) : (
                      <div className='p-4 flex flex-col items-center justify-center'>
                        <p>Add more for cart!</p>
                        <RemoveShoppingCartIcon fontSize='large' />
                      </div>
                    )}
                  </>
                </FeatureModal>

                {/* Modal for quick view */}
                <FeatureModal
                  width={800}
                  onClose={() => dispatch(toggleOpenQuickViewModal(false))}
                  open={isOpenQuickViewModal}
                >
                  <QuickView />
                </FeatureModal>

                <TemporaryDrawer dataCart={dataCart} direction='right' />
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) =>
                    setting === 'Logout' ? (
                      <MenuItem
                        key={setting}
                        onClick={() =>
                          dispatch({
                            type: LOGOUT_USER_SAGA,
                            payload: {
                              token: JSON.parse(
                                localStorage.getItem(REFRESHTOKEN) || ''
                              ),
                              navigate,
                            },
                          })
                        }
                      >
                        <Typography textAlign='center'>{setting}</Typography>
                      </MenuItem>
                    ) : (
                      <MenuItem key={setting}>
                        <Typography textAlign='center'>{setting}</Typography>
                      </MenuItem>
                    )
                  )}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0 }}></Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};
