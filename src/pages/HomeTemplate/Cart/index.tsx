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
  const { dataCart } = useSelector((state: RootState) => state.cartReducer);
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
            <TableBody>
              {dataCart?.lineItems && dataCart.lineItems?.length > 0 ? (
                dataCart.lineItems.map((row) => {
                  return (
                    <TableRow
                      key={row.idProduct}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        <div className='flex items-center max-w-full'>
                          <div className='max-w-full w-24'>
                            <img
                              src={row.product.image?.main}
                              alt={row.product.name}
                              className='w-full'
                            />
                          </div>
                          <p className='ml-10'>{row.product.name}</p>
                        </div>
                      </TableCell>
                      <TableCell>${row.product.price?.raw}</TableCell>
                      <TableCell>
                        <TextField
                          onChange={(e: React.ChangeEvent<any>) => {
                            setFieldValue('itemQuantity', e.target.value * 1);
                            setFieldValue('itemIdProduct', row.idProduct);
                            setFieldValue('itemPrice', row.price);
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
                          onClick={() =>
                            dispatch({
                              type: REMOVE_TO_CART_SAGA,
                              payload: {
                                idCart: dataCart.idCart,
                                data: {
                                  idCart: dataCart.idCart,
                                  idProduct: row.idProduct,
                                },
                              },
                            })
                          }
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
            type='submit'
            variant='contained'
            size='large'
            color='success'
          >
            UPDATE CART
          </Button>
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
              {dataCart.subTotal ? `$${dataCart.subTotal}` : ''}
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
