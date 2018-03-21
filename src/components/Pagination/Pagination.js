import React, { Component } from 'react'
import { HashRouter, Switch, Link, Router, Route, BrowserRouter } from 'react-router-dom'
import {
    ButtonToolbar,
    ButtonGroup,
    Button,
} from 'react-bootstrap'

import {
    range
} from 'lodash'

export default ({total = 10, active = 1, max = 5, pageClick, tab}) => {
    const totalCount = total < max ? total : max
    const start = active >= 3 ? active - 2 : 1
    const end = (active >= 3 ? active + 2 : max) + 1
    const items = range(start,  end).map(i => <Button key={`page-${i}`} bsStyle={active === i ? 'primary' : 'default'} onClick={() => {
        pageClick(i, tab)
    }}
    disabled={active === i}
    >{i}</Button>)
    return <ButtonToolbar>
    <ButtonGroup>
      {items}
    </ButtonGroup>
  </ButtonToolbar>;
}
