import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import WriteBlog from '../WriteBlog'
import {
    Form,
    Col,
    ControlLabel,
    FormControl,
    FormGroup,
    Button
} from 'react-bootstrap'

import List from '../../containers/List'
// import List from '../List/List'
import Topic from '../../containers/Topic'
import './Body.less'
// import topics from './topics'

class Body extends React.Component {
    render() {
        const { match } = this.props
        return <div className="body">
            <Switch>
                <Route path="/topic/:id" component={Topic}/>
                <Route path="/topics/:tab" component={List}/>
                <Route path="/" component={List}/>
            </Switch>
        </div>
    }
}

export default Body