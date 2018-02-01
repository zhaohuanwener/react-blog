import { connect } from 'react-redux'
import { getTopics, tabSelect } from '../actions'
import List from '../components/List/List'

const mapStateToProps = (state) => {
    return state.list
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        pageClick: (page, tab) => {
            console.log(page, tab)
            // dispatch(pageClick(page))
        },
        getTopics: (tab, page) => {
            console.log('get topics for tab', tab)
            dispatch(getTopics(tab, page))
        },
        tabSelect: (tab) => {
            dispatch(tabSelect(tab))
            // dispatch(getTopics(tab, 1))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
