import React, { Component } from 'react'
import { HashRouter, Switch, Link, Router, Route, BrowserRouter } from 'react-router-dom'

import Header from '../containers/Header'
import WriteBlog from './WriteBlog'
import Body from './Body'
// import createBrowserHistory from 'history/createBrowserHistory'
// const history = createBrowserHistory()

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { history } = this.props
        return <BrowserRouter>
             <div>
                <Header/>
                <Route path="/write" component={WriteBlog}/>
            </div>
        </BrowserRouter>
    }
}

const write = ({match}) => {
    return <BrowserRouter >
        <div>
            <Link to="/write/blog">blog</Link>
            <h1>write</h1>
            <Route path={`${match.url}/:type`} component={type}/>
        </div>
    </BrowserRouter>
}

const type = ({match, location}) => {
    return <div>
        <h1>{match.params.type}</h1>
        <h1>{JSON.stringify(location)}</h1>
        <h1></h1>
    </div>
}
export default App