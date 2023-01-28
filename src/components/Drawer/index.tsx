import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SearchIcon from '@mui/icons-material/Search';
import { LoadingButton } from '@mui/lab';
import {
  Badge,
  Button,
  Divider,
  IconButton,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Container } from '@mui/system';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/redux/configStore';
import {
  ADD_TO_CART_SAGA,
  GET_ALL_PRODUCTS_QUERY_SAGA,
  REMOVE_TO_CART_SAGA,
} from 'src/redux/consts/consts';
import { setProductId } from 'src/redux/reducers/cartReducer';
import { getSearchAllProducts } from 'src/redux/reducers/productReducer';
import useDebounce from '../Hooks/useDebounce';
import { LoadingPage2 } from '../Loading';

export type Anchor = 'top' | 'right';

export const TemporaryDrawer = memo(({ direction }: { direction: Anchor }) => {
  const { myInfo } = useSelector((state: RootState) => state.userReducer);
  const { dataSearchAllProducts, isPendingAllProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const { productId, dataCart, isLoadingButton } = useSelector(
    (state: RootState) => state.cartReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    top: false,
    right: false,
  });
  const [valueSearch, setValueSearch] = useState('');
  const debouncedValue = useDebounce<string>(valueSearch, 700);

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    if (open === false) {
      setValueSearch('');
      dispatch(getSearchAllProducts([]));
    }
    setState({ ...state, [anchor]: open });
  };

  const CustomizedLoadingButton = styled(LoadingButton)`
    min-width: 0px;
    border-radius: 50%;

    & .MuiButton-startIcon {
      margin-right: 0px;
      margin-left: 0px;
      padding: 2px;

      & .MuiSvgIcon-root {
        fill: ${`${isLoadingButton ? '' : '#83868c'}`};
      }
    }
  `;

  useEffect(() => {
    // Do fetch here...
    if (!debouncedValue) {
      dispatch(getSearchAllProducts([]));
      return;
    }
    dispatch({
      type: GET_ALL_PRODUCTS_QUERY_SAGA,
      payload: { data: { name: debouncedValue }, isSearch: true },
    });

    // Triggers when "debouncedValue" changes
  }, [debouncedValue, dispatch]);

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
            Start typing
          </Typography>
          <Container maxWidth='md'>
            <Box className='sticky top-0 bg-white'>
              <TextField
                autoComplete='off'
                fullWidth
                id='standard-search'
                label='Search anything'
                variant='standard'
                onChange={(e: React.ChangeEvent<any>) => {
                  setValueSearch(e.target.value);
                }}
              />
            </Box>

            {!isPendingAllProduct ? (
              dataSearchAllProducts.map((item) => (
                <Box key={item._id}>
                  <div className='flex justify-between items-center m-4'>
                    <div className='flex justify-center items-center'>
                      <div className='cursor-pointer'>
                        <img
                          className='cursor-pointer'
                          onClick={() => {
                            navigate(`/shop/${item._id}`);
                          }}
                          width='80px'
                          height='50px'
                          src={item.image?.main}
                          alt={item.name}
                        />
                      </div>
                      <div className='flex-1 ml-4'>
                        <p
                          onClick={() => {
                            navigate(`/shop/${item._id}`);
                          }}
                          className='cursor-pointer hover:text-orange-500'
                        >
                          <span className='hover:text-orange-500 transition ease-out cursor-pointer'>
                            {item.name}
                          </span>
                        </p>
                        <p>${item.price?.raw}</p>
                      </div>
                    </div>
                    <CustomizedLoadingButton
                      loading={isLoadingButton}
                      loadingPosition='center'
                      startIcon={<AddShoppingCartIcon />}
                      onClick={() => {
                        myInfo.email
                          ? dispatch({
                              type: ADD_TO_CART_SAGA,
                              payload: {
                                idCart: dataCart.idCart,
                                data: {
                                  idProduct: item._id,
                                  quantity: 1,
                                },
                              },
                            })
                          : navigate('/login');
                      }}
                    />
                  </div>
                  <Divider />
                </Box>
              ))
            ) : (
              <LoadingPage2 />
            )}

            {!isPendingAllProduct &&
              dataSearchAllProducts.length === 0 &&
              valueSearch !== '' && (
                <div className='flex items-center justify-center h-[200px]'>
                  <div>
                    <div className='flex items-center justify-center'>
                      <FindInPageIcon fontSize='large' />
                    </div>
                    <p>No result is found!</p>
                  </div>
                </div>
              )}
          </Container>
        </Box>
      ) : (
        <Box>
          <div className='flex flex-col h-screen'>
            <div className='flex justify-between items-center'>
              <IconButton onClick={() => setState({ ...state, right: false })}>
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
                {dataCart?.lineItems?.length}
              </Typography>
            </div>
            <Divider />
            {dataCart?.lineItems && dataCart.lineItems?.length > 0 ? (
              dataCart.lineItems.map((item) => (
                <Box key={item.product._id}>
                  <div className='flex justify-between items-center m-4'>
                    <div className='flex justify-center items-center'>
                      <div className='cursor-pointer'>
                        <img
                          className='cursor-pointer'
                          onClick={() => {
                            navigate(`/shop/${item.product._id}`);
                          }}
                          width='80px'
                          height='50px'
                          src={item.product?.image?.main}
                          alt={item.product?.name}
                        />
                      </div>
                      <div className='flex-1 ml-4'>
                        <p
                          onClick={() => {
                            navigate(`/shop/${item.product._id}`);
                          }}
                          className='cursor-pointer hover:text-orange-500'
                        >
                          <span className='hover:text-orange-500 transition ease-out cursor-pointer'>
                            {item.product.name}
                          </span>
                        </p>
                        <p>QTY : {item.subQuantity}</p>
                        <p>${item.product.price?.raw}</p>
                      </div>
                    </div>
                    <IconButton
                      disabled={productId === item.product._id}
                      className='cursor-pointer hover:text-orange-500'
                      onClick={() => {
                        dispatch(setProductId(item.product._id));
                        dispatch({
                          type: REMOVE_TO_CART_SAGA,
                          payload: {
                            idCart: dataCart.idCart,
                            idProduct: item.product._id,
                          },
                        });
                      }}
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
                  ${dataCart?.subTotal}
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
                {dataCart && dataCart.lineItems?.length > 0 && (
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
                )}
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
          <Badge badgeContent={dataCart?.lineItems?.length} color='success'>
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
