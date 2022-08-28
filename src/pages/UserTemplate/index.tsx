import { Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';

const UserTemplate = () => {
  const logo = require('../../assets/img/others/logo.png');
  const video = require('../../assets/img/others/SamuraiTech-Neon-Tokio.mp4');

  return (
    <div className='flex justify-center items-center container-login w-full h-screen'>
      <video
        className='fixed top-0 right-0 min-w-full min-h-full'
        autoPlay
        loop
        muted
      >
        <source src={video} type='video/mp4' />
      </video>
      <div className='bg-white p-10 z-10'>
        <div>
          <img className='mw-full mx-auto' width='150' src={logo} alt='logo' />
        </div>
        <Divider sx={{ mt: 2, mb: 2 }} />
        <Outlet />
      </div>
    </div>
  );
};

export default UserTemplate;
