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
            <TableCell align='center'>Settings</TableCell>
            <TableCell>Ultra Android 10.0 Smartphone 8GB Ram</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>Image</TableCell>
            <TableCell>
              <div>
                <img
                  className='max-w-full rounded-sm'
                  src={Prod1}
                  alt='icon1'
                />
              </div>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>Price</TableCell>
            <TableCell>
              <Typography variant='button' display='block' gutterBottom>
                $54.50
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>Description</TableCell>
            <TableCell className='w-64'>
              <div>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </div>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>Dimensions</TableCell>
            <TableCell>
              <div>N/A</div>
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align='center'>Add to cart</TableCell>
            <TableCell>
              <Button
                // onClick={() => navigate('/shop')}
                size='large'
                variant='contained'
                sx={{ backgroundColor: 'black' }}
              >
                Add To Cart
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonDetail;
