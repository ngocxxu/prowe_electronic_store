import { Button } from '@mui/material';

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
  return (
    <Button variant='text' sx={ButtonMUI}>
      Shop now
    </Button>
  );
};

export const ShopRoundButton = () => {
  return (
    <Button
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
  return (
    <Button
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
