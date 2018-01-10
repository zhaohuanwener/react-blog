import { connect } from 'react-redux'
import Body from '../components/Body'

const mapStateToProps = state => state.body || {}

export default connect(mapStateToProps)(Body)