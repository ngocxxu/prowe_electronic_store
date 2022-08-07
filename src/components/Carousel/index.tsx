import { Box, Grid, styled, Typography } from '@mui/material';
import Ba1 from '../../assets/img/background/ba1.jpg';
import Ba2 from '../../assets/img/background/ba2.jpg';
import Ba3 from '../../assets/img/background/ba3.jpg';
import Ba4 from '../../assets/img/background/ba4.jpg';
import { ShopButton } from '../Button';
import './style.scss';

const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'gray',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
}));

export const Carousel = () => {
  return (
    <Grid container spacing={2}>
      <Grid sx={{ height: '800px' }} item xs={12} md={6}>
        <Item
          sx={{
            backgroundImage: `url(${Ba1})`,
            justifyContent: 'center',
            alignItems: 'flex-end',
            textAlign: 'center',
          }}
        >
          <Box sx={{ marginBottom: '30px' }}>
            <Typography variant='h4' sx={{ fontWeight: '500', color: 'black' }}>
              Audio Speaker A1
            </Typography>
            <Typography
              sx={{ marginBottom: '15px', marginTop: '20px' }}
              component='p'
            >
              Lasted answer oppose to ye months no esteem.<br></br> Branched is
              on an ecstatic directly it.
            </Typography>
            <ShopButton />
          </Box>
        </Item>
      </Grid>
      <Grid container spacing={2} item xs={12} md={6}>
        <Grid item xs={12} md={5}>
          <Item
            sx={{
              backgroundImage: `url(${Ba2})`,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='relative md:my-0 my-24'>
              <div className='video-play-button'>
                <span></span>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={12} md={7}>
          <Item
            sx={{
              backgroundImage: `url(${Ba3})`,
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}
          >
            <Box sx={{ marginBottom: '30px', marginLeft: '30px' }}>
              <Typography
                variant='h4'
                sx={{ fontWeight: '500', color: 'black' }}
              >
                Headphone
              </Typography>
              <Typography
                sx={{ marginBottom: '15px', marginTop: '20px' }}
                component='p'
              >
                Headphones give you a<br></br> great experience
              </Typography>
              <ShopButton />
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={12}>
          <Item
            sx={{
              backgroundImage: `url(${Ba4})`,
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}
          >
            <Box sx={{ marginBottom: '30px', marginLeft: '30px' }}>
              <Typography
                variant='h4'
                sx={{ fontWeight: '500', color: 'black' }}
              >
                Smart Watch
              </Typography>
              <Typography
                sx={{ marginBottom: '15px', marginTop: '20px' }}
                component='p'
              >
                It is a long established fact<br></br> that a reader will
              </Typography>
              <ShopButton />
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};
