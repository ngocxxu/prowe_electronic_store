import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ButtonMUI = {
  '&:hover': {
    backgroundColor: 'transparent',
    borderBottom: '2px solid transparent',
  },
  fontSize: '18px',
  textTransform: 'initial',
  borderBottom: '2px solid black',
  padding: '0px',
  borderRadius: '0px',
  color: 'black',
};

export const ShopButton = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate('/shop')} variant='text' sx={ButtonMUI}>
      Shop now
    </Button>
  );
};

export const ShopRoundButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate('/shop')}
      variant='contained'
      sx={{
        backgroundColor: 'black',
        '&:hover': { backgroundColor: '#f97316' },
      }}
    >
      Shop now
    </Button>
  );
};

export const ShopWhiteButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate('/shop')}
      variant='contained'
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        border: '1px solid white',
        '&:hover': {
          backgroundColor: 'black',
          border: '1px solid transparent',
        },
      }}
    >
      Shop now
    </Button>
  );
};
