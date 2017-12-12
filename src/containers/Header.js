import { connect } from 'react-redux'
import { toogle_loading } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state, ownProps) => {
    const { header } = state
    console.log(state, ownProps, 'mapStateToProps container from header')
    return {
        loading: login.loading,
        show: true,
        reg: false,
        title: '登录'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log('mapDispatchToProps ownProps from header', ownProps, toogle_loading(ownProps.loading))
    return {
        toggoleLoading: () => {
            dispatch(toogle_loading(ownProps.loading))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
