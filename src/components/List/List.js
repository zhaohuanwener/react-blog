import React, { Component } from 'react'
import {
    Nav,
    NavItem,
    ListGroup,
} from 'react-bootstrap'
import {
    NavLink
} from 'react-router-dom'

// import {
//     getTopics
// } from '../../actions'

import './List.less'
import ListItem from '../ListItem/ListItem'
import Pager from '../Pagination/Pagination'
// import topics from './topics'

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

    componentDidMount() {
        const { getTopics, dispatch, match } = this.props
        const { tab = 'all' } = match.params
        getTopics(tab, 1)
    }

    render() {
        const { activeTab, tabSelect, pageClick, match, topics } = this.props
        console.log('list render ', topics)
        const { tab = 'all' } = match.params
        return <div className="topic-list">
            <ul className="nav nav-pills">
                    {this.renderNav(tab)}
            </ul>
            <ListGroup>
                {this.renderList(topics)}
            </ListGroup>
            <div className="pager">
                <Pager active={2} total={20} pageClick={pageClick} tab={tab}/>
            </div>
        </div>
    }
    
    renderNav = (tab) => tabConfig.map(tc => {
        const className = tc.tab === tab ? 'active' : ''
        const url = `/topics/${tc.tab}`
        return <li role="presentation" className={className} key={`tab-${tc.tab}`}><NavLink to={url}>{tc.name}</NavLink></li>
    })

    renderList = (topics = []) => {
        if (!list.length) {
            return 
        }
        const { match } = this.props
        const ALLTAB = 'all'
        const { tab = ALLTAB } = match.params
        const data = tab === ALLTAB ? topics : topics.filter(t => {
            if (tab === 'good') {
                return t.good
            }
            return t.tab === tab
        })
        return data.map(function(d) {
            const tabCfg = tabConfig.filter(t => t.tab === d.tab)[0] || {}
            d.tabName = tabCfg.name || ''
            return <ListItem data={d} key={d.id}></ListItem>
        })
    }

}


export default List