import './public-path'
import actions from './shared/actions'

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// --------- 微前端应用处理 -----------

/**
 * 渲染函数
 * 两种情况：主应用生命周期钩子中运行 / 微应用单独启动时运行
 */
function render(props: any) {
  console.log('------ React 子应用渲染 ------')
  console.log(props)
  if (props && JSON.stringify(props) !== '{}') {
    // 注入 actions 实例
    actions.setActions(props)
    props.onGlobalStateChange((state: any) => {
      const { token } = state
      if (token) {
        window.localStorage.setItem('token', token)
        // store.commit('globalStore/setStoreTokenMutation', token)
      }
    }, true)
  }

  const { container } = props
  // 挂载应用
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  )
}

// 独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
  console.log('子应用单独运行')
  render({})
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('[react17] react app bootstraped')
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
  console.log('[react17] props from main framework', props)
  render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
  console.log('[react17] react app unmount')
  const { container } = props
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'))
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
