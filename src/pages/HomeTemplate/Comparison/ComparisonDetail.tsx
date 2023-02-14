import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { LoadingButton } from '@mui/lab';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'src/redux/configStore';
import {
  ADD_TO_CART_SAGA,
  REMOVE_TO_COMPARISON_SAGA,
} from 'src/redux/consts/consts';
import { setProductId } from 'src/redux/reducers/cartReducer';
import { setComparisonId } from 'src/redux/reducers/comparisonReducer';
import { toggleOpenComparisonTable } from 'src/redux/reducers/otherReducer';
import { IProduct } from 'src/types/GeneralTypes';

const ComparisonDetail = () => {
  const { isLoadingButton, productId, dataCart } = useSelector(
    (state: RootState) => state.cartReducer
  );
  const {
    dataComparison: { comparisonItems },
    isLoadingComparisonButton,
    comparisonId,
  } = useSelector((state: RootState) => state.comparisonReducer);

  const { myInfo } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRenderTableCell = useCallback(
    (
      infoKey: keyof IProduct,
      infoKey2?: keyof { raw: number },
      infoKey3?: keyof { main: string }
    ) =>
      comparisonItems.map(({ product }) => {
        switch (infoKey) {
          case 'price':
            return (
              <TableCell>
                <Typography variant='h6' display='block' gutterBottom>
                  ${infoKey2 && `${product[infoKey][infoKey2]}`}
                </Typography>
              </TableCell>
            );
          case 'description':
            return (
              <TableCell>
                <Typography variant='body1'>{`${product[infoKey]}`}</Typography>
              </TableCell>
            );
          case 'image':
            return (
              <TableCell>
                <div className='max-w-[170px]'>
                  <img
                    className='max-w-full rounded-sm'
                    src={infoKey3 && product[infoKey][infoKey3]}
                    alt='icon1'
                  />
                </div>
              </TableCell>
            );

          default:
            return (
              <TableCell key={product._id} className='w-20'>
                {`${product[infoKey]}`}
              </TableCell>
            );
        }
      }),
    [comparisonItems]
  );

  return (
    <>
      <div className='absolute -top-[85vh] right-0 z-[9999]'>
        <IconButton
          onClick={() => dispatch(toggleOpenComparisonTable(false))}
          sx={{ fill: '#000' }}
        >
          <DisabledByDefaultIcon />
        </IconButton>
      </div>
      
      <TableContainer
        className='absolute -top-[85vh] left-0 z-[9998] w-full h-[83vh]'
        component={Paper}
      >
        <Table
          sx={{
            minWidth: comparisonItems.length <= 5 ? '1680px' : '1920px',
            height: '100%',
            backgroundColor: '#f8fafc',
            overscrollBehavior: 'auto',
          }}
          aria-label='simple table'
        >
          <TableHead className='relative'>
            <TableRow>
              <TableCell className='w-10' align='center'>
                Settings
              </TableCell>
              {handleRenderTableCell('name')}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
                <Typography variant='subtitle2' gutterBottom>
                  Image
                </Typography>
              </TableCell>
              {handleRenderTableCell('image', undefined, 'main')}
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
                <Typography variant='subtitle2' gutterBottom>
                  Price
                </Typography>
              </TableCell>
              {handleRenderTableCell('price', 'raw')}
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
                <Typography variant='subtitle2' gutterBottom>
                  Description
                </Typography>
              </TableCell>
              {handleRenderTableCell('description')}
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
                <Typography variant='subtitle2' gutterBottom>
                  Actions
                </Typography>
              </TableCell>
              {comparisonItems.map(({ product }) => (
                <TableCell key={product._id}>
                  <LoadingButton
                    loading={productId === product._id && isLoadingButton}
                    onClick={async () => {
                      if (myInfo.email) {
                        dispatch(setProductId(product._id));
                        dispatch({
                          type: ADD_TO_CART_SAGA,
                          payload: {
                            idCart: dataCart.idCart,
                            data: {
                              idProduct: product._id,
                              quantity: 1,
                            },
                          },
                        });
                      } else {
                        navigate('/login');
                      }
                    }}
                    startIcon={<AddShoppingCartIcon />}
                    size='small'
                    variant='contained'
                    sx={{
                      backgroundColor: 'black',
                      '&:hover': { backgroundColor: 'black' },
                      mr: 1,
                    }}
                  >
                    <span>ADD TO CART</span>
                  </LoadingButton>
                  <LoadingButton
                    loading={
                      comparisonId === product._id && isLoadingComparisonButton
                    }
                    onClick={async () => {
                      if (myInfo.email) {
                        dispatch(setComparisonId(product._id));
                        dispatch({
                          type: REMOVE_TO_COMPARISON_SAGA,
                          payload: {
                            id: myInfo._id,
                            idProduct: product._id,
                          },
                        });
                      } else {
                        navigate('/login');
                      }
                    }}
                    size='small'
                    variant='contained'
                    color='error'
                  >
                    <span>Remove</span>
                  </LoadingButton>
                  {/* <Button
                  // onClick={() => navigate('/shop')}
                  size='small'
                  variant='contained'
                  color='error'
                >
                  Remove
                </Button> */}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ComparisonDetail;
