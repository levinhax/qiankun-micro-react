import React, { lazy, Suspense } from 'react'
import { Route, RouteProps, Switch } from 'react-router-dom'

import PageLoading from '../components/pageLoading'
import chartsRoute from './modules/charts'

const Home = lazy(() => import('../views/Home'))
const About = lazy(() => import('../views/About'))

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  chartsRoute,
]

const PageRouter = () => (
  <Suspense fallback={<PageLoading />}>
    <Switch>
      {routes.map((route: RouteProps) => (
        <Route key={route.path + ''} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  </Suspense>
)

export default PageRouter
