import React, { Component } from 'react'
import moment from 'moment'
import { renderContent , formatDate } from '../../common/utils.js'
import NoData from '../NoData/NoData'
import Loading from '../Loading/Loading'
import Comments from '../Comments/Comments'
import {
    isUndefined,
    isNull
} from 'lodash'


import './Topic.less'
class Topic extends Component {

    componentDidMount() {
        const { getTopicDetail, match } = this.props
        const { id } = match.params
        getTopicDetail(id)
    }

    render() {
        const { match, topic } = this.props
        if (_.isUndefined(topic)) {
            return <Loading show={true}></Loading>
        }
        if (_.isNull(topic)) {
            return <NoData></NoData>
        }
        return <div>
            <div className="panel topic-content">
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