import React, { useState } from 'react'
import classes from './index.module.css'
import logo from '../../assets/svg/logo.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className={classes['Home']}>
      <header className={classes['Home-header']}>
        <img src={logo} className={classes['Home-logo']} alt="logo" />
        <p>Hello React!</p>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default Home
