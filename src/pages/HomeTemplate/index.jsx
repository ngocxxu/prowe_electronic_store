import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import ScrollButton from 'src/components/Scroll/ScrollButton';
import Comparison from './Comparison';
import ComparisonDetail from './Comparison/ComparisonDetail';
import { Footer } from './Footer';
import { Header } from './Header';

const HomeTemplate = () => {
  const { isOpenComparisonTable } = useSelector((state) => state.otherReducer);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollButton />
      <Comparison />

      {/* Comparison Detail Table */}
      {isOpenComparisonTable && <ComparisonDetail />}
    </>
  );
};

export default HomeTemplate;
