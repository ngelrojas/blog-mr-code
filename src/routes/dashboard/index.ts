import Dashboard from '../../pages/admin/dashboard';

type Route = {
  path: string;
  element: React.ElementType;
};

export const dashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    element: Dashboard,
  },
  {
    path: 'admin',
    element: Dashboard,
  },
];
