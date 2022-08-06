import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { cloneElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Shop', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Logout'];

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const Header = (props: Props) => {
  const navigate = useNavigate();
  const logo = require('../../../assets/img/others/logo.png');

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: 'white',
            paddingBottom: '10px',
            paddingTop: '10px',
          }}
        >
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Box
                onClick={() => navigate('/')}
                sx={{ display: { xs: 'none', md: 'flex' }, cursor: 'pointer' }}
              >
                <img className='mw-full' width='150' src={logo} alt='logo' />
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* Full Screen - Responsive*/}
              <Box
                onClick={() => navigate('/')}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  cursor: 'pointer',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                <img className='mw-full' width='100' src={logo} alt='logo' />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      fontSize: '16px',
                      my: 2,
                      fontWeight: 'bold',
                      color: 'black',
                      display: 'block',
                      textTransform: 'initial',
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Box>
                <IconButton
                  size='large'
                  aria-label='search'
                  sx={{
                    color: 'black',
                    display: { xs: 'none', md: 'inline-block' },
                  }}
                >
                  <SearchIcon />
                </IconButton>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ color: 'black' }}
                >
                  <PersonOutlineIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: 'black',
                    display: { xs: 'none', md: 'inline-block' },
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton sx={{ color: 'black' }}>
                  <LocalMallOutlinedIcon />
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign='center'>{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0 }}></Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};
