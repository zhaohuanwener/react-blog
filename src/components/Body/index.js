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


class Body extends React.Component {
    // constructor(props) {
    //     super(props)
    //     console.log(props)
    // }
    render() {
        const { match } = this.props
        return <div className="body">
            <h1>body</h1>
            {/* <Route path="/write" component={WriteBlog}/> */}
        </div>
    }
}

export default Body