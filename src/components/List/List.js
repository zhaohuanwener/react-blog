import React, { Component } from 'react'
import {
    Nav,
    NavItem,
    ListGroup,
} from 'react-bootstrap'

import './List.less'
import ListItem from '../ListItem/ListItem'
import Pager from '../Pagination/Pagination'

const tabConfig = [{
    tab: 'all',
    name: '全部'
}, {
    tab: 'share',
    name: '分享'
}, {
    tab: 'ask',
    name: '问答',
}, {
    tab: 'good',
    name: '精华'
}, {
    tab: 'job',
    name: '招聘'
}]

class List extends Component {

    render() {
        const { activeTab, tabSelect, pageClick } = this.props
        return <div>
            <Nav bsStyle="pills" activeKey={activeTab} onSelect={tabSelect}>
                {this.renderNav()}
            </Nav>
            <ListGroup>
                {this.renderList()}
            </ListGroup>
            <div className="pager">
                <Pager active={2} total={5} pageClick={pageClick}/>
            </div>
        </div>
    }

    renderNav = () => tabConfig.map(tc => <NavItem eventKey={tc.tab} key={`tab-${tc.tab}`}>
        {tc.name}
    </NavItem>)

    renderList = () => {
        const { data = [] } = this.props
        return data.map(function(d) {
            const tabCfg = tabConfig.filter(t => t.tab === d.tab)[0] || {}
            d.tabName = tabCfg.name || ''
            return <ListItem data={d} key={d.id}></ListItem>
        })
    }

}


export default List