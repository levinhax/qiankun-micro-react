import React from 'react'
// import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageRouter from './router/Router'
import PageLoading from './components/pageLoading'

function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/micro2' : '/'}>
      {/* <PageRouter /> */}
      <React.Suspense fallback={<PageLoading />}>
        <Switch>
          <Route path="/" component={PageRouter} />
        </Switch>
      </React.Suspense>
    </Router>
  )
}

export default App
