import React, { Component } from 'react'
import {
    NavLink
} from 'react-router-dom'

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

export default ({tabs = tabConfig, activeTab, tabSelect}) => {
    const items = tabs.map(tc => {
        const { tab } = tc
        const className = tab === activeTab ? 'active' : ''
        const url = `/topics/${tab}`
        return <li role="presentation" className={className} key={`tab-${tab}`} onClick={() => {
            tabSelect(tab)
        }}>
            <NavLink to={url}>
                {tc.name}
            </NavLink>
        </li>
    })
    return  <ul className="nav nav-pills">
        {items}
    </ul>
}