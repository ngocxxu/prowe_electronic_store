import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import MenuIcon from '@mui/icons-material/Menu';
import PlaylistRemoveOutlinedIcon from '@mui/icons-material/PlaylistRemoveOutlined';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from 'src/components/Hooks/useDebounce';
import { LoadingPage2 } from 'src/components/Loading';
import { RootState } from 'src/redux/configStore';
import { GET_ALL_PRODUCTS_QUERY_SAGA } from 'src/redux/consts/consts';
import {
  toggleOpenComparisonModal,
  toggleOpenComparisonTable,
} from 'src/redux/reducers/otherReducer';
import Prod1 from '../../../assets/img/product/1.1.jpg';
import FindInPageIcon from '@mui/icons-material/FindInPage';

const ComparisonBar = () => {
  const { isOpenComparisonModal, isOpenComparisonTable } = useSelector(
    (state: RootState) => state.otherReducer
  );
  const { dataSearchAllProducts, isPendingAllProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState('');
  const debouncedValue = useDebounce<string>(valueSearch, 700);

  useEffect(() => {
    // Do fetch here...
    dispatch({
      type: GET_ALL_PRODUCTS_QUERY_SAGA,
      payload: { data: { name: debouncedValue }, isSearch: true },
    });

    // Triggers when "debouncedValue" changes
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    dispatch({
      type: GET_ALL_PRODUCTS_QUERY_SAGA,
      payload: { data: { name: debouncedValue }, isSearch: true },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex justify-end items-center'>
      <div className='flex justify-end items-center'>
        <Tooltip title='Add product' arrow>
          <IconButton
            onClick={() => dispatch(toggleOpenComparisonModal(true))}
            sx={{
              padding: '14px',
              borderRadius: '2px',
              backgroundColor: '#3e3f45',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#3e3f45',
              },
            }}
          >
            <AddIcon sx={{ fill: 'white' }} />
          </IconButton>
        </Tooltip>

        <div className='group mx-4 relative rounded-sm'>
          <Tooltip title='Prod1' arrow>
            <div className='max-w-[50px]'>
              <img className='max-w-full rounded-sm' src={Prod1} alt='icon1' />
            </div>
          </Tooltip>
          <div className='absolute right-0 -top-[4px] hidden group-hover:block'>
            <Tooltip title='Remove' arrow>
              <IconButton
                size='small'
                sx={{
                  padding: '0px',
                }}
              >
                <DisabledByDefaultIcon
                  sx={{ fill: 'black', fontSize: '18px' }}
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>

      <Button
        onClick={() =>
          dispatch(toggleOpenComparisonTable(!isOpenComparisonTable))
        }
        variant='contained'
        color='error'
        size='large'
        startIcon={
          isOpenComparisonTable ? <PlaylistRemoveOutlinedIcon /> : <MenuIcon />
        }
      >
        Compare
      </Button>

      {/* Dialog */}
      <Dialog
        open={isOpenComparisonModal}
        onClose={() => {
          setValueSearch('');
          dispatch(toggleOpenComparisonModal(false));
        }}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          <TextField
            margin='dense'
            id='name'
            label='Type any keyword to search...'
            type='email'
            fullWidth
            variant='outlined'
            onChange={(e: React.ChangeEvent<any>) => {
              setValueSearch(e.target.value);
            }}
          />
        </DialogTitle>
        <div className='mx-4 overflow-y-auto h-52 w-[300px]'>
          {!isPendingAllProduct ? (
            dataSearchAllProducts.map((item) => (
              <div
                key={item._id}
                className='flex justify-between items-center mt-4'
              >
                <div className='max-w-[50px]'>
                  <img
                    className='max-w-full rounded-sm'
                    src={item.image?.main}
                    alt={item.name}
                  />
                </div>
                <p className='break-all w-45 ml-1'>{item.name}</p>
                <IconButton aria-label='upload picture' component='label'>
                  <AddBoxIcon sx={{ fill: 'black' }} />
                </IconButton>
              </div>
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
        </div>
        <DialogActions>
          <Button onClick={() => dispatch(toggleOpenComparisonModal(false))}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ComparisonBar;
