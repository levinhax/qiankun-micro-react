import { lazy } from 'react'

import IRoute from '../IRoute'

const MixForm = lazy(() => import('../../views/Form/mixForm'))

const route: IRoute[] = [
  {
    path: '/form/mixForm',
    exact: false,
    meta: {
      title: '多表单',
    },
    component: MixForm,
  },
]

export default route
