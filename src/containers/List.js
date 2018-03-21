import { connect } from 'react-redux'
import { getTopics, tabSelect, setPage } from '../actions'
import List from '../components/List/List'

const mapStateToProps = state => state.list

const mapDispatchToProps = (dispatch, props) => ({
    pageClick: (page, tab) => {
        dispatch(getTopics(tab, page))
        dispatch(setPage(page))
    },
    getTopics: (tab, page) => {
        dispatch(getTopics(tab, page))
    },
    tabSelect: (tab) => {
        dispatch(tabSelect(tab))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
