import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/home';
import Category from '../../pages/category';
import Description from '../../pages/description';
import Dashboard from '../../pages/admin/dashboard';

const webSiteRoutes = [
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'category/:slug',
    element: <Category />,
  },
  {
    path: 'category/:description/:slug',
    element: <Description />,
  },
];

const dashboardRoutes = [
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'admin',
    element: <Dashboard />,
  },
];

export const mainRoutes = createBrowserRouter([
  ...webSiteRoutes,
  ...dashboardRoutes,
]);
