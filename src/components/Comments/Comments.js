import React, { Component } from 'react'
import {
    ListGroup,
} from 'react-bootstrap'
import CommentItem from '../CommentItem/CommentItem'
import './Comments.less'

class Comments extends Component {
    render() {
        const { data } = this.props
        return <div className="panel panel-default">
            <div className="panel-heading">
                <h5>{data.length} 回复</h5>
            </div>
            <ListGroup>
                {this.renderList(data)}
            </ListGroup>
        </div>
    }

    renderList = (data) => {
        return data.map(d => <CommentItem data={d} key={`cmt-${d.id}-`}></CommentItem>)
    }
}

export default Comments