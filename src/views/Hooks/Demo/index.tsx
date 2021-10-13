import React, { useState, useEffect, useReducer, useRef, useCallback, useLayoutEffect } from 'react'
import { Divider, Button, Input } from 'antd'
import classes from './index.module.css'

import { themes, ThemeContext } from './theme-context'
import Toolbar from './Toolbar'
import Child from './child'
import ChildMemo from './childMemo'
import ChildInput from './childInput'
import FancyInput from './fancyInput'

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
  const inputEl = useRef<HTMLInputElement>(null)
  const antdInputEl = useRef<Input>(null)
  // const fancyInputEl = useRef<HTMLInputElement>(null)
  const fancyInputEl = useRef<any>(null)

  const box1 = useRef<HTMLDivElement>(null)
  const box2 = useRef<HTMLDivElement>(null)

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

  const getList = useCallback((n: number) => {
    return Array.apply(Array, Array(n)).map((item, i) => ({
      id: i,
      name: '张三' + i,
    }))
  }, [])

  const handleButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current && inputEl.current.focus()
  }

  const handleChildButtonClick = () => {
    antdInputEl.current && antdInputEl.current.focus()
  }

  const handleFancyButtonClick = () => {
    // fancyInputEl.current && fancyInputEl.current.focus()
    fancyInputEl.current && fancyInputEl.current.setValue((val: any) => val + 1)
  }

  useEffect(() => {
    if (box1.current) {
      box1.current.style.marginLeft = 100 + 'px'
    }
  }, [])

  useLayoutEffect(() => {
    if (box2.current) {
      box2.current.style.marginLeft = 100 + 'px'
    }
  }, [])

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
      <div className={classes['demo-item']}>
        obj：{JSON.stringify(obj)}
        <Button type="primary" onClick={handleUpdate2} style={{ marginLeft: '16px' }}>
          函数式更新
        </Button>
      </div>

      <Divider orientation="left">useEffect</Divider>
      <div className={classes['demo-item']}>
        <Button type="primary" onClick={handleUpdate3} style={{ marginLeft: '16px' }}>
          更新数据
        </Button>
      </div>

      <Divider orientation="left">useContext</Divider>
      <div className={classes['demo-item']}>
        <ThemeContext.Provider value={btnColor}>
          <Toolbar />
          <Button type="primary" onClick={handleUpdate4} style={{ marginTop: '16px' }}>
            更新样式
          </Button>
        </ThemeContext.Provider>
      </div>

      <Divider orientation="left">useReducer</Divider>
      <div className={classes['demo-item']}>
        Num: {state.num}
        <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
        <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
      </div>

      <Divider orientation="left">useCallback</Divider>
      <div className={classes['demo-item']}>
        <Child getList={getList} />
        <hr />
        避免子组件做没必要的渲染
        <ChildMemo getList={getList} />
        <Button type="primary" onClick={handleUpdate1} style={{ marginTop: '16px' }}>
          普通更新 {count}
        </Button>
      </div>

      <Divider orientation="left">useMemo</Divider>

      <Divider orientation="left">useRef</Divider>
      <div className={classes['demo-item']}>
        <input ref={inputEl} />
        <Button onClick={handleButtonClick} style={{ marginTop: '16px', marginBottom: '16px' }}>
          Focus the input
        </Button>
        <ChildInput ref={antdInputEl} />
        <Button onClick={handleChildButtonClick} style={{ marginTop: '16px' }}>
          Focus the child input
        </Button>
      </div>

      <Divider orientation="left">useImperativeHandle</Divider>
      <div className={classes['demo-item']}>
        <FancyInput ref={fancyInputEl} />
        <Button onClick={handleFancyButtonClick} style={{ marginTop: '16px' }}>
          Focus the child input
        </Button>
      </div>

      <Divider orientation="left">useLayoutEffect</Divider>
      <div className={classes['demo-item']}>
        <div className={`${classes.box} ${classes.box1}`} ref={box1}>
          UseEffect
        </div>
        <div className={`${classes.box} ${classes.box2}`} ref={box2}>
          UseLayoutEffect
        </div>
      </div>
    </div>
  )
}

export default Demo
