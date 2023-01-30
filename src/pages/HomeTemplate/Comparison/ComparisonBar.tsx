import { Button, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Prod1 from '../../../assets/img/product/1.1.jpg';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

const ComparisonBar = () => {
  return (
    <div className='flex justify-end items-center'>
      <div className='flex justify-end items-center'>
        <Tooltip title='Add product' arrow>
          <IconButton
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
        variant='contained'
        color='error'
        size='large'
        startIcon={<MenuIcon />}
      >
        Compare
      </Button>
    </div>
  );
};

export default ComparisonBar;
