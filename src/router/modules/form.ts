import { lazy } from 'react'

import IRoute from '../IRoute'

const BasicForm = lazy(() => import('../../views/Form/basicForm'))
const MixForm = lazy(() => import('../../views/Form/mixForm'))
const reactHookForm = lazy(() => import('../../views/Form/reactHookForm'))

const route: IRoute[] = [
  {
    path: '/form/basic',
    exact: false,
    meta: {
      title: '基础表单',
    },
    component: BasicForm,
  },
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
