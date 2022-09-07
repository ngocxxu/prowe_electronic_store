import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = ({ children }: { children: React.ReactElement }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
