import { useRoutes } from 'react-router-dom';
import './App.scss';
import { ErrorTemplate } from './pages/ErrorTemplate';
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

// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { lazy, Suspense } from 'react';
import { LoadingPage } from './components/Loading';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCnOxKXeUW5bbZpXrf1_sOvsLtMba1_DmQ',
  authDomain: 'prowe-electronic-store.firebaseapp.com',
  projectId: 'prowe-electronic-store',
  storageBucket: 'prowe-electronic-store.appspot.com',
  messagingSenderId: '428459684051',
  appId: '1:428459684051:web:66d65823e69002ff9f6426',
  measurementId: 'G-0YWNSTRVYT',
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const HomeTemplateLazy = lazy(() => import('./pages/HomeTemplate'));

function App() {
  const routes = [
    {
      element: (
        <Suspense fallback={<LoadingPage />}>
          <HomeTemplateLazy />
        </Suspense>
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/shop/:id', element: <ProductDetail /> },
        { path: '/blog', element: <Blog /> },
        { path: '/contact', element: <Contact /> },
        { path: '/cart', element: <Cart /> },

        // {
        //   element: <PrivateRoutes />,
        //   children: [{ path: '/cart', element: <Cart /> }],
        // },
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
