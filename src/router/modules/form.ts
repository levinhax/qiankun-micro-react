import { lazy } from 'react'

import IRoute from '../IRoute'

const MixForm = lazy(() => import('../../views/Form/mixForm'))
const reactHookForm = lazy(() => import('../../views/Form/reactHookForm'))

const route: IRoute[] = [
  {
    path: '/form/mixForm',
    exact: false,
    meta: {
      title: '多表单',
    },
    component: MixForm,
  },
  {
    path: '/form/reactHookForm',
    exact: false,
    meta: {
      title: 'reactHookForm',
    },
    component: reactHookForm,
  },
]

export default route
