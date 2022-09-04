import { useRoutes } from 'react-router-dom';
import './App.scss';
import { ErrorTemplate } from './pages/ErrorTemplate';
import { HomeTemplate } from './pages/HomeTemplate';
import { Blog } from './pages/HomeTemplate/Blog';
import { Cart } from './pages/HomeTemplate/Cart';
import { Checkout } from './pages/HomeTemplate/Checkout';
import { Contact } from './pages/HomeTemplate/Contact';
import { Home } from './pages/HomeTemplate/Home';
import { ProductDetail } from './pages/HomeTemplate/ProductDetail';
import { Shop } from './pages/HomeTemplate/Shop';
import UserTemplate from './pages/UserTemplate';
import Login from './pages/UserTemplate/Login';
import LoginExpired from './pages/UserTemplate/Login/LoginExpired';
import Register from './pages/UserTemplate/Register';
import RegisterSuccess from './pages/UserTemplate/Register/RegisterSuccess';

function App() {
  const routes = [
    {
      element: <HomeTemplate />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/cart', element: <Cart /> },
        { path: '/shop', element: <Shop /> },
        { path: '/shop/:category/:id', element: <ProductDetail /> },
        { path: '/blog', element: <Blog /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
    { path: '/cart/checkout', element: <Checkout /> },
    {
      element: <UserTemplate />,
      children: [
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/register/register-success', element: <RegisterSuccess /> },
        { path: '/login/login-expiration', element: <LoginExpired /> },
      ],
    },
    { path: '*', element: <ErrorTemplate /> },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
