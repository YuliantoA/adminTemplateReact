import { lazy } from 'react';

const Chart = lazy(() => import('../pages/Chart'));
const NotFound = lazy(() => import('../pages/NotFound'));

const coreRoutes = [
  {
    path: '/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/NotFound',
    title: 'NotFound',
    component: NotFound,
  },
];

const routes = [...coreRoutes];
export default routes;
