import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import WriteBlog from '../WriteBlog'
import {
    Form,
    Col,
    ControlLabel,
    FormControl,
    FormGroup,
    Button
} from 'react-bootstrap'

import List from '../List/List'
import './Body.less'
import topics from './topics'

class Body extends React.Component {
    // constructor(props) {
    //     super(props)
    //     console.log(props)
    // }
    render() {
        const { match } = this.props
        return <div className="body">
            {/* <h1>body</h1> */}
            <List data={topics} activePage={1}/>
            {/* <Route path="/topic/:id" component={WriteBlog}/> */}
            {/* <Route to> */}
        </div>
    }
}

export default Body