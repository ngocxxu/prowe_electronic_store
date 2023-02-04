import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Prod1 from '../../../assets/img/product/1.1.jpg';

const ComparisonDetail = () => {
  return (
    <TableContainer
      className='absolute -top-[85vh] left-0 z-[9999] w-full h-[83vh]'
      component={Paper}
    >
      <Table
        sx={{ minWidth: 650, height: '100%', backgroundColor: '#f8fafc' }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell className='w-10' align='center'>
              Settings
            </TableCell>
            <TableCell className='w-20'>
              Ultra Android 10.0 Smartphone 8GB Ram
            </TableCell>
            <TableCell className='w-20'>
              Ultra Android 10.0 Smartphone 8GB Ram a Android 10.0 Smartphone 8
            </TableCell>
            <TableCell className='w-20'>
              Ultra Android 10.0 Smartphone 8GB Ram
            </TableCell>
            <TableCell className='w-20'>
              Ultra Android 10.0 Smartphone 8GB Ram
            </TableCell>
            <TableCell className='w-20'>
              Ultra Android 10.0 Smartphone 8GB Ram
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>
              <Typography variant='subtitle2' gutterBottom>
                Image
              </Typography>
            </TableCell>
            <TableCell>
              <div className='max-w-[170px]'>
                <img
                  className='max-w-full rounded-sm'
                  src={Prod1}
                  alt='icon1'
                />
              </div>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>
              <Typography variant='subtitle2' gutterBottom>
                Price
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant='h6' display='block' gutterBottom>
                $54.50
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>
              <Typography variant='subtitle2' gutterBottom>
                Description
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant='body1'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>
              <Typography variant='subtitle2' gutterBottom>
                Dimensions
              </Typography>
            </TableCell>
            <TableCell>
              <div>N/A</div>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>
              <Typography variant='subtitle2' gutterBottom>
                Actions
              </Typography>
            </TableCell>
            <TableCell>
              <Button
                // onClick={() => navigate('/shop')}
                size='large'
                variant='contained'
                sx={{
                  backgroundColor: 'black',
                  '&:hover': { backgroundColor: 'black' },
                  mr: 1,
                }}
              >
                Add To Cart
              </Button>
              <Button
                // onClick={() => navigate('/shop')}
                size='large'
                variant='contained'
                color='error'
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonDetail;
