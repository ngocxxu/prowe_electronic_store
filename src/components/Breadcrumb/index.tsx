import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  const breadcrumbs = [
    <Link
      underline='hover'
      key='1'
      href='/'
      onClick={handleClick}
      sx={{ color: '#fff' }}
    >
      MUI
    </Link>,
    <Link
      underline='hover'
      key='2'
      href='/material-ui/getting-started/installation/'
      onClick={handleClick}
      sx={{ color: '#fff' }}
    >
      Core
    </Link>,
    <Typography key='3' sx={{ color: '#fff', fontWeight: '600' }}>
      Breadcrumb
    </Typography>,
  ];

  return (
    <Stack spacing={2} sx={{marginTop:'20px', marginBottom:'40px'}}>
      <Breadcrumbs
        separator={<NavigateNextIcon sx={{ color: '#fff' }} fontSize='small' />}
        aria-label='breadcrumb'
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
