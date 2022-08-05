import { Box, Button, Grid, styled, Typography } from '@mui/material';
import Ba1 from '../../assets/img/background/ba1.jpg';
import Ba2 from '../../assets/img/background/ba2.jpg';
import Ba3 from '../../assets/img/background/ba3.jpg';
import Ba4 from '../../assets/img/background/ba4.jpg';

const Item = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'gray',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
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
      <Grid sx={{ height: '600px' }} item md={6}>
        <Item
          sx={{
            backgroundImage: `url(${Ba1})`,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <Box sx={{ marginBottom: '40px' }}>
            <Typography variant='h4'>Audio Speaker A1</Typography>
            <Typography
              sx={{ marginBottom: '20px', marginTop: '20px' }}
              component='p'
            >
              Lasted answer oppose to ye months no esteem.<br></br> Branched is
              on an ecstatic directly it.
            </Typography>
            <Button variant='text' sx={{ textTransform: 'initial' }}>
              Shop now
            </Button>
          </Box>
        </Item>
      </Grid>
      <Grid container spacing={2} item md={6}>
        <Grid item md={5}>
          <Item
            sx={{
              backgroundImage: `url(${Ba2})`,
            }}
          >
            xs=6 md=4
          </Item>
        </Grid>
        <Grid item md={7}>
          <Item
            sx={{
              backgroundImage: `url(${Ba3})`,
            }}
          >
            xs=6 md=4
          </Item>
        </Grid>
        <Grid item md={12}>
          <Item
            sx={{
              backgroundImage: `url(${Ba4})`,
            }}
          >
            xs=6 md=4
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};
