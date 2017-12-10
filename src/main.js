import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import Home from './components/Home'

const app = <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </HashRouter>

ReactDom.render(app, document.querySelector('#app'))

