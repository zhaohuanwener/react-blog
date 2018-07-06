import Topic from '../components/Topic/Topic'
import { connect } from 'react-redux'
import { getTopicDetail } from '../actions'

const mapStateToProps = ({topic}) => topic

const mapDispatchToProps = (dispatch, props) => {
    return {
        getTopicDetail: (id) => {
            dispatch(getTopicDetail(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topic)