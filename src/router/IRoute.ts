import { RouteProps } from 'react-router-dom'

export interface IRouteMeta {
  title: string
  icon?: string
}

// 主要是继承RouteProps的path，exact和component来使用
export default interface IRoute extends RouteProps {
  path: string
  // meta 路由元信息
  meta?: IRouteMeta
  children?: IRoute[]
}
