import { Box, Container, Grid, TextField, Typography } from '@mui/material';

export const Checkout = () => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: '60px' }}>
      <Typography variant='h5'>
        Prowe - Electronic Store Responsive Shopify Theme
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant='h6'>Contact Information</Typography>
          <Box component='form' autoComplete='off'>
            <TextField
              fullWidth
              margin='normal'
              id='outlined-number'
              label='Email'
            />
          </Box>
          <Typography variant='h6'>Shipping Address</Typography>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Container>
  );
};
