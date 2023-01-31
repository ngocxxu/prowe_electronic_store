import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Image', 159, 6.0, 24, 4.0),
  createData('Price', 237, 9.0, 37, 4.3),
  createData('Description', 262, 16.0, 24, 6.0),
  createData('Dimensions', 305, 3.7, 67, 4.3),
  createData('Add to cart', 356, 16.0, 49, 3.9),
];
const ComparisonDetail = () => {
  return (
    // <div className='absolute -top-[85vh] left-0 z-[9999] px-20 bg-blue-100 w-full h-[83vh]'>
    // </div>
    <TableContainer
      className='absolute -top-[85vh] left-0 z-[9999] bg-blue-100 w-full h-[83vh]'
      component={Paper}
    >
      <Table sx={{ minWidth: 650, height: '100%' }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Settings</TableCell>
            <TableCell>Ultra Android 10.0 Smartphone 8GB Ram</TableCell>
            <TableCell>Xiaomi Redmi Note 10 Global Version</TableCell>
            <TableCell>Office Gaming Laptop Silver AMD-Ryzen</TableCell>
            <TableCell>Teclast Touch Screen Laptop 8GB Windows 10</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonDetail;
