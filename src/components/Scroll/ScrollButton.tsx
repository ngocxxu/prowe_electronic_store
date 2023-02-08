import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/configStore';
import './style.scss';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const {
    dataComparison: { comparisonItems },
  } = useSelector((state: RootState) => state.comparisonReducer);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <button
      className={`buttonScroll hidden lg:block ${
        comparisonItems.length > 0 ? 'bottom-[120px]' : 'bottom-[60px]'
      }`}
    >
      <div
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none', color: 'red' }}
      >
        <ArrowCircleUpOutlinedIcon sx={{ fontSize: 40 }} />
      </div>
    </button>
  );
};

export default ScrollButton;
