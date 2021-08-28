import { lazy } from 'react'

import IRoute from '../IRoute'

const LineChart = lazy(() => import('../../views/Charts/lineChart'))

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

const route: IRoute = {
  path: '/charts/lineChart',
  exact: false,
  meta: {
    title: '折线图',
  },
  component: LineChart,
}

export default route
