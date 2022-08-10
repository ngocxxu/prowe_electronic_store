import { useRoutes } from 'react-router-dom';
import './App.scss';
import { ErrorTemplate } from './pages/ErrorTemplate';
import { HomeTemplate } from './pages/HomeTemplate';
import { Blog } from './pages/HomeTemplate/Blog';
import { Contact } from './pages/HomeTemplate/Contact';
import { Home } from './pages/HomeTemplate/Home';
import { ProductDetail } from './pages/HomeTemplate/ProductDetail';
import { Shop } from './pages/HomeTemplate/Shop';

function App() {
  const routes = [
    {
      element: <HomeTemplate />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/shop/:category/:id', element: <ProductDetail /> },
        { path: '/blog', element: <Blog /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
    { path: '*', element: <ErrorTemplate /> },
  ];

  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
