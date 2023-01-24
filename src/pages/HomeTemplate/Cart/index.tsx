import ClearIcon from '@mui/icons-material/Clear';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from 'src/components/Breadcrumb';
import { RootState } from 'src/redux/configStore';
import {
  REMOVE_ALL_CART_SAGA,
  REMOVE_TO_CART_SAGA,
  UPDATE_TO_CART_SAGA,
} from 'src/redux/consts/consts';

export const Cart = () => {
  const { dataCart, productId, isClearAllCart } = useSelector(
    (state: RootState) => state.cartReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      itemQuantity: 1,
      itemIdProduct: '',
      itemPrice: 0,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch({
        type: UPDATE_TO_CART_SAGA,
        payload: {
          idCart: dataCart.idCart,
          data: {
            idProduct: values.itemIdProduct,
            quantity: values.itemQuantity,
            price: values.itemPrice,
          },
        },
      });
    },
  });

  return (
    <Box component='form' onSubmit={handleSubmit}>
      <Box sx={{ marginTop: '40px', backgroundColor: '#f6f6f6' }}>
        <Container maxWidth='xl' sx={{ padding: '10px 0px 10px 0px' }}>
          <Breadcrumb />
        </Container>
      </Box>
      <Container maxWidth='xl' sx={{ marginTop: '40px' }}>
        <TableContainer sx={{ border: '1px solid #dee2e6' }}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>PRODUCT NAME</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>QUANTITY</TableCell>
                <TableCell>TOTAL</TableCell>
                <TableCell>
                  <div
                    className='text-red-600 cursor-pointer underline'
                    onClick={() =>
                      dispatch({
                        type: REMOVE_ALL_CART_SAGA,
                        payload: dataCart.idCart,
                      })
                    }
                  >
                    Clear all
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className='relative'>
              {isClearAllCart && (
                <div className='absolute w-full h-full bg-gray-100 opacity-40 top-0 left-0 z-10'>
                  &nbsp;
                </div>
              )}
              {dataCart?.lineItems && dataCart.lineItems?.length > 0 ? (
                dataCart.lineItems.map((row) => {
                  return (
                    <TableRow
                      className='relative'
                      key={row.product._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {productId === row.product._id && (
                          <div className='absolute w-full h-full bg-gray-100 opacity-40 top-0 left-0 z-10'>
                            &nbsp;
                          </div>
                        )}
                        <div className='flex items-center max-w-full'>
                          <div className='max-w-full w-24'>
                            <img
                              onClick={() => {
                                navigate(`/shop/${row.product._id}`);
                              }}
                              src={row.product.image?.main}
                              alt={row.product.name}
                              className='w-full cursor-pointer'
                            />
                          </div>
                          <p
                            onClick={() => {
                              navigate(`/shop/${row.product._id}`);
                            }}
                            className='ml-10'
                          >
                            <span className='hover:text-orange-500 transition ease-out cursor-pointer'>
                              {row.product.name}
                            </span>
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>${row.product.price?.raw}</TableCell>
                      <TableCell>
                        <TextField
                          onKeyPress={(e) => {
                            if (e.code === 'Minus') {
                              e.preventDefault();
                            }
                          }}
                          inputProps={{ min: '1', step: '1' }}
                          onChange={(e: React.ChangeEvent<any>) => {
                            setFieldValue('itemQuantity', e.target.value * 1);
                            setFieldValue('itemIdProduct', row.product._id);
                            setFieldValue('itemPrice', row.price);
                            handleSubmit();
                          }}
                          id='itemQuantity'
                          name='itemQuantity'
                          type='number'
                          defaultValue={row.subQuantity}
                        />
                      </TableCell>
                      <TableCell>${row.subTotalProduct}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            dispatch({
                              type: REMOVE_TO_CART_SAGA,
                              payload: {
                                idCart: dataCart.idCart,
                                idProduct: row.product._id,
                              },
                            });
                          }}
                          size='small'
                        >
                          <ClearIcon fontSize='small' />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <div className='p-4 flex flex-col items-center justify-center'>
                    <p>Add more for cart!</p>
                    <RemoveShoppingCartIcon />
                  </div>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          sx={{ marginTop: '30px', marginBottom: '50px' }}
          spacing={3}
          direction='row'
          alignItems='center'
        >
          <Button
            onClick={() => navigate('/shop')}
            size='large'
            variant='contained'
            color='warning'
          >
            CONTINUE SHOPPING
          </Button>
        </Stack>
        <Box sx={{ border: '1px solid #dee2e6', padding: '40px 20px' }}>
          <Typography variant='button'>CART TOTALS</Typography>
          <Divider sx={{ margin: '20px 0' }} />
          <Stack
            spacing={3}
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ width: '40%' }}
          >
            <Typography variant='subtitle1'>Total</Typography>
            <Typography variant='h6'>
              {dataCart?.subTotal ? `$${dataCart?.subTotal}` : ''}
            </Typography>
          </Stack>
          <Button
            onClick={() => navigate('/cart/checkout')}
            sx={{ marginTop: '20px' }}
            size='large'
            variant='contained'
            color='warning'
          >
            PROCEED TO CHECKOUT
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
