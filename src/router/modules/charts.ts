import { lazy } from 'react'

import IRoute from '../IRoute'

const LineChart = lazy(() => import('../../views/Charts/lineChart'))
const RingRatioBarChart = lazy(() => import('../../views/Charts/ringRatioBarChart'))
const ThreeDimensionalCylinder = lazy(() => import('../../views/Charts/threeDimensionalCylinder'))

// const route: IRoute = {
//   path: '/charts',
//   exact: false,
//   meta: {
//     title: '图表',
//   },
//   children: [
//     {
//       path: '/charts/lineChart',
//       exact: false,
//       meta: {
//         title: '折线图',
//       },
//       component: LineChart,
//     },
//   ],
// }

const route: IRoute[] = [
  {
    path: '/charts/lineChart',
    exact: false,
    meta: {
      title: '折线图',
    },
    component: LineChart,
  },
  {
    path: '/charts/ringRatioBarChart',
    exact: false,
    meta: {
      title: '同比环比柱状图',
    },
    component: RingRatioBarChart,
  },
  {
    path: '/charts/threeDimensionalCylinder',
    exact: false,
    meta: {
      title: '立体柱状图',
    },
    component: ThreeDimensionalCylinder,
  },
]

export default route
