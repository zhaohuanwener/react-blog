import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { NavItem, 
    ListGroupItem,
    Image
} from 'react-bootstrap'

import moment from 'moment'
import './ListItem.less'

const format = created => moment(created).format('YYYY-MM-DD HH:mm:ss')


class Item extends Component {
    render() {
        const { data } = this.props
        const { top, tabName, good } = data
        return <ListGroupItem className="item">
            <Image src={data.author.avatar_url} circle className="item-avatar"/>
            <span className="item-count">
                <span>{data.reply_count}</span>/<span>{data.visit_count}</span>
            </span>
            <span className="item-tab">
                {this.renderTab(top, tabName, good)}
            </span>
            <span className="item-title">
                <Link to={`/topic/${data._id}`}>
                    {data.title}
                </Link>
            </span>
            <span className="item-time">发表于{' ' + format(data.create_at)}</span>
        </ListGroupItem>
    }

    renderTab = (top, tabName, good) => {
        const styleName = (top || good) ? 'item-tab-top' : 'item-tab-other'
        const text = top ? '置顶' : ( good ? '精华' : tabName )
        return <span className={styleName}>{text}</span>
    }
}


export default Item