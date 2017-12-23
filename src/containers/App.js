import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
// import * as TodoActions from '../actions/types'


const App = () => {
  return <div>
    <Header />
  </div>
}


// const mapStateToProps = state => state.header

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(TodoActions, dispatch)
// })

export default App
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

