import { Box, Grid, Modal, styled, Typography } from '@mui/material';
import { useState } from 'react';
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

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
};

export const Carousel = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <div className='video-play-button' onClick={handleOpen}>
                <span></span>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <Box sx={style}>
                  <iframe
                    width='1268'
                    height='713'
                    src='https://www.youtube.com/embed/9tobL8U7dQo'
                    title='The new MacBook Pro | Supercharged for pros | Apple'
                    // frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    // allowfullscreen
                  ></iframe>
                </Box>
              </Modal>
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
