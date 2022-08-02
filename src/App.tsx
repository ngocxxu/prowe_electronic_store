import { useRoutes } from 'react-router-dom';
import './App.scss';
import { ErrorTemplate } from './pages/ErrorTemplate';
import { HomeTemplate } from './pages/HomeTemplate';
import { Home } from './pages/HomeTemplate/Home';

function App() {
  const routes = [
    {
      element: <HomeTemplate />,
      path: '/',
      children: [
        { path: '/home', element: <Home /> },
        { path: '/shop', element: <Home /> },
        { path: '/blog', element: <Home /> },
        { path: '/contact', element: <Home /> },
    ],
    },
    { path: '*', element: <ErrorTemplate /> },
  ];

  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
