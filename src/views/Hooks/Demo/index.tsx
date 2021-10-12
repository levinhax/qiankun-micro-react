import React, { useState, useEffect, useReducer, useRef, useCallback } from 'react'
import { Divider, Button } from 'antd'
import classes from './index.module.css'

import { themes, ThemeContext } from './theme-context'
import Toolbar from './Toolbar'

const initialState = { num: 0 }

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return { num: state.num + 1 }
    case 'decrement':
      return { num: state.num - 1 }
    default:
      throw new Error()
  }
}

const Demo = () => {
  const [count, setCount] = useState(0)
  const [obj, setObj] = useState({ id: 1 })
  const firstLoad = useRef(true)
  const [btnColor, setBtnColor] = useState(themes.dark)
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleUpdate1 = () => {
    setCount(count + 1)
  }

  const handleUpdate2 = () => {
    setObj(prevObj => ({ ...prevObj, ...{ id: 2, name: '张三' } }))
  }

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false
      return
    }
    document.title = `You clicked ${count} times`
  }, [count])

  // ============== useEffect 异步请求 ===================
  const getData = useCallback(async () => {
    // const data = await xxx({ id: 1 });
    const data = {}
    setDetail(data)
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  const handleUpdate3 = () => {
    getData()
  }

  const setDetail = (data: any) => {
    console.log('setDetail: ', data)
  }

  const handleUpdate4 = () => {
    setBtnColor(themes.light)
  }

  return (
    <div className={classes['demo-wrapper']}>
      <h3>React 钩子函数</h3>
      <Divider orientation="left">useState</Divider>
      <div className={classes['demo-item']}>
        count：{count}
        <Button type="primary" onClick={handleUpdate1} style={{ marginLeft: '16px' }}>
          普通更新
        </Button>
      </div>
      <div className="demo-item">
        obj：{JSON.stringify(obj)}
        <Button type="primary" onClick={handleUpdate2} style={{ marginLeft: '16px' }}>
          函数式更新
        </Button>
      </div>

      <Divider orientation="left">useEffect</Divider>
      <div className="demo-item">
        <Button type="primary" onClick={handleUpdate3} style={{ marginLeft: '16px' }}>
          更新数据
        </Button>
      </div>

      <Divider orientation="left">useContext</Divider>
      <div className="demo-item">
        <ThemeContext.Provider value={btnColor}>
          <Toolbar />
          <Button type="primary" onClick={handleUpdate4} style={{ marginTop: '16px' }}>
            更新样式
          </Button>
        </ThemeContext.Provider>
      </div>

      <Divider orientation="left">useReducer</Divider>
      <div className="demo-item">
        Num: {state.num}
        <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
        <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      </div>
    </div>
  )
}

export default Demo
