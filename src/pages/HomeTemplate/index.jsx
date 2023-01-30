import { Outlet } from 'react-router-dom';
import ScrollButton from 'src/components/Scroll/ScrollButton';
import Comparison from './Comparison';
import { Footer } from './Footer';
import { Header } from './Header';

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollButton />
      <Comparison/>
    </>
  );
};

export default HomeTemplate;
