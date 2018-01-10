import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter, Route, Redirect, Switch, BrowserRouter, Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

// import browserHistory from 'history/browserHistory'


import App from './containers/App'
import Body from './containers/Body'
import WriteBlog from './containers/WriteBlog'
import reducer from './reducers'

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    ...reducer,
    routing: routerReducer
  }),
  applyMiddleware(middleware)
)

const root = document.querySelector('#app')

// console.log('BrowserHistory', h)

// const history = syncHistoryWithStore(browserHistory, store)

// ReactDom.render(<Provider store={store}>
//     { /* ConnectedRouter will use the store from Provider automatically */ }
//     <ConnectedRouter history={history}>
//       <div>
//         <Route exact path="/" component={App}/>
//       </div>
//     </ConnectedRouter>
// </Provider>, root)


ReactDom.render(<Provider store={store}>
  <BrowserRouter>
    <Route exact path="/" component={App} />
  </BrowserRouter>
</Provider>, root)

