import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  const location = useLocation();
  const truePathname = location.pathname === '/shop';

  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      href='/'
      onClick={handleClick}
      sx={{ color: truePathname ? '#fff' : '#000' }}
    >
      Home
    </Link>,
    <Link
      underline='hover'
      key='2'
      href='/material-ui/getting-started/installation/'
      onClick={handleClick}
      sx={{ color: truePathname ? '#fff' : '#000' }}
    >
      Shop
    </Link>,
    <Typography
      key='3'
      sx={{ color: truePathname ? '#fff' : '#f97316', fontWeight: '600' }}
    >
      Laptop
    </Typography>,
  ];

  return (
    <Stack spacing={2} sx={{ marginTop: '20px', marginBottom: '40px' }}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon
            sx={{ color: truePathname ? '#fff' : '#000' }}
            fontSize='small'
          />
        }
        aria-label='breadcrumb'
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
