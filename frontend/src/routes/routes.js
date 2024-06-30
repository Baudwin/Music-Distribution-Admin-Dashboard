// All components mapping with path for internal routes
import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Services = lazy(() => import('../pages/protected/services'))

const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },

  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/services',
    component: Services,
  },

]

export default routes
