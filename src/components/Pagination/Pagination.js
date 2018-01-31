import React, { Component } from 'react'
import { HashRouter, Switch, Link, Router, Route, BrowserRouter } from 'react-router-dom'
import {
    ButtonToolbar,
    ButtonGroup,
    Button,
} from 'react-bootstrap'


class Pager extends Component {
    render() {
        const { total = 10, active = 1, max = 10, pageClick, tab } = this.props
        const totalCount = total < max ? total : max
        const items = []
        for (let i = 1; i <= totalCount; i++) {
            items.push(
                <Button key={`page-${i}`} bsStyle={active === i ? 'primary' : 'default'} onClick={() => {
                    pageClick(i, tab)
                }}>{i}</Button>
            )
        }
        return <ButtonToolbar>
        <ButtonGroup>
          {items}
        </ButtonGroup>
      </ButtonToolbar>;
    }

    renderItems = () => {

    }
}

export default Pager