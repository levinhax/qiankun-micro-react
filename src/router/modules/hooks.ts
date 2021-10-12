import { lazy } from 'react'

import IRoute from '../IRoute'

const HooksDemo = lazy(() => import('../../views/Hooks/Demo'))

const route: IRoute[] = [
  {
    path: '/hooks/demo',
    exact: false,
    meta: {
      title: '钩子函数',
    },
    component: HooksDemo,
  },
]

export default route
