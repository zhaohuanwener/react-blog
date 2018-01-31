import React, { Component } from 'react'
import data from './data'
import moment from 'moment'
import { renderContent , formatDate } from '../../common/utils.js'

import Comments from '../Comments/Comments'


import './Topic.less'
class Topic extends Component {
    render() {
        const { match, topic = data } = this.props
        return <div>
            <div className="panel  content">
                <div className="panel-heading">
                    <h4>{topic.title}</h4>
                    <span className="author">
                        作者:{topic.author.loginname}
                    </span>
                    <span className="source">
                        发布于:{formatDate(topic.create_at)}
                    </span>
                    <span className="source">
                        {topic.visit_count}次浏览
                    </span>
                </div>
                <div className="panel-body">
                    <div dangerouslySetInnerHTML={renderContent(topic.content)}></div>
                </div>
            </div>
            <Comments data={topic.replies}></Comments>
        </div>
    }
}

export default Topic