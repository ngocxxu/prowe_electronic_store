import AddIcon from '@mui/icons-material/Add';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import MenuIcon from '@mui/icons-material/Menu';
import PlaylistRemoveOutlinedIcon from '@mui/icons-material/PlaylistRemoveOutlined';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import {
  toggleOpenComparisonModal,
  toggleOpenComparisonTable,
} from 'src/redux/reducers/otherReducer';
import Prod1 from '../../../assets/img/product/1.1.jpg';

const ComparisonBar = () => {
  const { isOpenComparisonModal, isOpenComparisonTable } = useSelector(
    (state: RootState) => state.otherReducer
  );
  const dispatch = useDispatch();

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
        onClose={() => dispatch(toggleOpenComparisonModal(false))}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>Disagree</Button>
          <Button autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ComparisonBar;
