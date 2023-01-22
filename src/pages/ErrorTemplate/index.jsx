import { useNavigate } from 'react-router-dom';
import Page404 from '../../assets/img/background/404.png';

export const ErrorTemplate = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen flex justify-center items-center'>
      <img
        onClick={() => navigate('/')}
        className='block mx-auto my-auto'
        src={Page404}
        alt='Page404'
      />
    </div>
  );
};
