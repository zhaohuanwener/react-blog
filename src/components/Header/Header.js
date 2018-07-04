import React, { Component } from 'react'
import { NavItem, 
    Nav, 
    Navbar, 
    NavDropdown, 
    MenuItem, 
    Modal, 
    FormGroup, 
    FormControl 
} from 'react-bootstrap'
import PropTypes from 'prop-types';

import './Header.less'
import logo from '../../assets/cnode_logo.svg'

import User from '../User'
import Login from '../Login'
// import Login from '../../containers/Login'

const { Brand } = Navbar

class Header extends Component {

    handleSelect = (key) => {
        this.setState({
            activeKey: key
        })
    }

    showLogin = () => {
        const { toogleLoginModal, toogleRegModal} = this.props
        toogleLoginModal(true)
        toogleRegModal(false)
    }

    showReg = () => {
        const { toogleRegModal, toogleLoginModal } = this.props
        toogleRegModal(true)
        toogleLoginModal(true)
    }

    setUserBox = () => {
        const { isLogin, userName } = this.props
        if (!isLogin) {
            return <Nav pullRight>
                     <NavItem eventKey={ 1 } href="#" onClick={this.showLogin}>登陆cdscds</NavItem>
                     <NavItem eventKey={ 2 } href="#" onClick={this.showReg}>注册</NavItem>
                   </Nav>
        }
        return <Nav pullRight>
                 <User userName={userName}/>
               </Nav>
    }

    render() {
        return <div>
            <Navbar
                inverse
            >
                <ul className="nav navbar-nav">
                    <li>
                        <a href="/" className="brand-a">
                            <img src={logo} />
                        </a>
                    </li>
                </ul>
            { this.setUserBox() }
            </Navbar>
            <Login show={ this.props.showModal }
            reg={ this.props.reg } 
            toogleLoginModal={ this.props.toogleLoginModal }
            toggoleLoading={this.props.toggleLoginLoading}
            submit = { this.props.loginSubmit }
            title={this.props.title}
            loading={this.props.loginLoading}
            />
        </div>
    }
}


Header.defaultProps = {
    showModal: false,
    isLogin: false,
    reg: false
}

Header.propTypes = {
    toogleLoginModal: PropTypes.func.isRequired,
    toggoleLoading: PropTypes.func.isRequired,
}


export default Header