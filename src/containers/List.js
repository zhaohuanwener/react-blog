import { connect } from 'react-redux'
import { toogleRegModal, toogleLoginModal, toogleLoading, getTopics } from '../actions'
import List from '../components/List/List'

const mapStateToProps = (state) => {
    console.log('state', state.list)
    return state.list
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        pageClick: (page, tab) => {
            console.log(page, tab)
            // dispatch(pageClick(page))
        },
        getTopics: (page, tab) => {
            console.log('get topics for tab', tab)
            dispatch(getTopics(page, tab))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
