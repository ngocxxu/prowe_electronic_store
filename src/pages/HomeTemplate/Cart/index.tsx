import ClearIcon from '@mui/icons-material/Clear';
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from 'src/components/Breadcrumb';
import { IProduct } from 'src/types/GeneralTypes';
import Prod from '../../../assets/img/product/14.1.jpg';

const rows: IProduct[] = [
  {
    _id: '5aec18723f45afa668523081',
    name: 'Freetel ICE 2 8GB',
    code: 'ANDROID_3',
    price: 924,
    image: Prod,
    quantity: 1,
    total: 924,
  },
];
export const Cart = () => {
  const navigate = useNavigate();
  const [totalBill, setTotalBill] = useState<number | string | null>(1);

  return (
    <>
      <Box sx={{ marginTop: '40px', backgroundColor: '#f6f6f6' }}>
        <Container maxWidth='xl' sx={{ padding: '10px 0px 10px 0px' }}>
          <Breadcrumb />
        </Container>
      </Box>
      <Container maxWidth='xl' sx={{ marginTop: '40px' }}>
        <TableContainer sx={{ border: '1px solid #dee2e6' }}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>PRODUCT NAME</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>QUANTITY</TableCell>
                <TableCell>TOTAL</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    <div className='flex items-center max-w-full'>
                      <div className='max-w-full w-24'>
                        <img src={Prod} alt='prod' className='w-full' />
                      </div>
                      <p className='ml-10'>{row.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>${row.price}</TableCell>
                  <TableCell>
                    <TextField
                      type='number'
                      value={totalBill}
                      onChange={(event) => setTotalBill(event.target.value)}
                    />
                  </TableCell>
                  <TableCell>${row.total}</TableCell>
                  <TableCell>
                    <IconButton size='small'>
                      <ClearIcon fontSize='small' />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          sx={{ marginTop: '30px', marginBottom: '50px' }}
          spacing={3}
          direction='row'
          alignItems='center'
        >
          <Button variant='contained' size='large' color='success'>
            UPDATE CART
          </Button>
          <Button
            onClick={() => navigate('/shop')}
            size='large'
            variant='contained'
            color='warning'
          >
            CONTINUE SHOPPING
          </Button>
        </Stack>
        <Box sx={{ border: '1px solid #dee2e6', padding: '40px 20px' }}>
          <Typography variant='button'>CART TOTALS</Typography>
          <Divider sx={{ margin: '20px 0' }} />
          <Stack
            spacing={3}
            direction='row'
            alignItems='center'
            justifyContent='space-between'
            sx={{ width: '40%' }}
          >
            <Typography variant='subtitle1'>Total</Typography>
            <Typography variant='h6'>$360.00</Typography>
          </Stack>
          <Button
            onClick={() => navigate('/cart/checkout')}
            sx={{ marginTop: '20px' }}
            size='large'
            variant='contained'
            color='warning'
          >
            PROCEED TO CHECKOUT
          </Button>
        </Box>
      </Container>
    </>
  );
};
