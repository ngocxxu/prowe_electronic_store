import { Outlet } from 'react-router-dom';
import ScrollButton from 'src/components/Scroll/ScrollButton';
import { Footer } from './Footer';
import { Header } from './Header';

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollButton />
    </>
  );
};

export default HomeTemplate;
