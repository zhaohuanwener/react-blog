import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import reducer from './reducers'

const store = createStore(reducer)

// import Home from './components/Home'


ReactDom.render(<Provider store={store}>
  <HashRouter>
    <div>
      <Route exact path="/" component={ App } />
    </div>
  </HashRouter>
</Provider>, document.querySelector('#app'))

