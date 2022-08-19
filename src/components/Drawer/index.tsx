import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Badge, IconButton, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Container } from '@mui/system';
import { memo, useState } from 'react';

type Anchor = 'top' | 'right';

type DrawerAction = {
  direction: 'top' | 'right';
};

export const TemporaryDrawer = memo(({ direction }: { direction: Anchor }) => {
  const [state, setState] = useState({
    top: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

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
            sx={{ textAlign: 'center', fontWeight: '600', mt: 4, mb:6 }}
            variant='h3'
          >
            Start typing and hit Enter
          </Typography>
          <Container maxWidth='md'>
            <Box component='form'>
              <TextField
                fullWidth
                id='standard-search'
                label='Search anything'
                type='search'
                variant='standard'
              />
            </Box>
          </Container>
        </Box>
      ) : (
        <Box>Right</Box>
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
          <Badge badgeContent={4} color='success'>
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
