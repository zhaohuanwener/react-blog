import React, { Component } from 'react'
import { HashRouter, Switch, Link, Router, Route, BrowserRouter } from 'react-router-dom'
import {
    ButtonToolbar,
    ButtonGroup,
    Button,
} from 'react-bootstrap'


class Pager extends Component {
    render() {
        const { total = 10, active = 1 } = this.props
        const items = []
        for (let i = 1; i <= total; i++) {
            items.push(
                <Button key={`page-${i}`} bsStyle={active === i ? 'primary' : 'default'}>{i}</Button>
            )
        }
        return <ButtonToolbar>
        <ButtonGroup>
          {items}
        </ButtonGroup>
      </ButtonToolbar>;
    }
}

export default Pager