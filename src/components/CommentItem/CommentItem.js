import React, { Component } from 'react'
import {
    ListGroupItem,
    Image
} from 'react-bootstrap'
import { renderContent , formatDate } from '../../common/utils.js'
import './CommentItem.less'

class ComponentItem extends Component {
    render() {
        const { data = {} } = this.props
        return <ListGroupItem className="cmt-item">
            <span className="cmt-item-avatar">
                <Image src={data.author.avatar_url} circle />
            </span>
            <span className="author">{data.author.loginname}</span>
            <span className="time">{formatDate(data.create_at)}</span>
            <span className="cmt-up">
                <span className="glyphicon glyphicon-thumbs-up"></span>
                <span>{data.ups.length}</span>
            </span>
            <p dangerouslySetInnerHTML={renderContent(data.content)} className="content"></p>
        </ListGroupItem>
    }
}

export default ComponentItem