import React, { Component } from 'react'
import {
    Nav,
    NavItem,
    ListGroup,
} from 'react-bootstrap'
import {
    NavLink
} from 'react-router-dom'

import './List.less'
import ListNav from '../ListNav/ListNav'
import ListItem from '../ListItem/ListItem'
import Pager from '../Pagination/Pagination'
import Loading from '../Loading/Loading'
import NoData from '../NoData/NoData'
import {
    isUndefined,
    isNull
} from 'lodash'


class List extends Component {
    componentDidMount() {
        const { getTopics, activeTab } = this.props
        getTopics(activeTab, 1)
    }

    componentWillReceiveProps(nextProps) {
        const nextTab = nextProps.activeTab
        const { getTopics, activeTab } = this.props
        if (nextTab !== activeTab) {
            getTopics(nextTab, 1)
        }
    }

    render() {
        const { tabs, activeTab, tabSelect, pageClick, match, topics, loading } = this.props
        return <div className="topic-list">
            <ListNav tabs={tabs} activeTab={activeTab} tabSelect={tabSelect}></ListNav>
            <ListGroup>
                <Loading show={loading}></Loading>
                {this.renderList(topics, tabs)}
            </ListGroup>
            <div className="pager-box">
                <Pager active={2} total={20} pageClick={pageClick} tab={activeTab}/>
            </div>
        </div>
    }
    

    renderList (topics, tabs) {
        if (isUndefined(topics)) {
            topics = []
        }
        if (isNull(topics)) {
            return <NoData/>
        }
        return topics.map(function(d) {
            const tabCfg = tabs.filter(t => t.tab === d.tab)[0] || {}
            d.tabName = tabCfg.name || ''
            return <ListItem data={d} key={d.id}></ListItem>
        })
    }

}


export default List