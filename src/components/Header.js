import React, { Component } from 'react'
import { NavItem, Nav, Navbar, NavDropdown, MenuItem, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types';

import User from './User'
import Login from './Login'

const { Brand } = Navbar

class Header extends Component {

    handleSelect = (key) => {
        this.setState({
            activeKey: key
        })
    }

    showLogin = () => {
        this.setState({
            showModal: true,
            reg: false
        })
    }

    showReg = () => {
        this.setState({
            showModal: true,
            reg: true
        })
    }

    setUserBox = () => {
        const { isLogin } = this.props
        if (!isLogin) {
            return <Nav pullRight>
                     <NavItem eventKey={ 1 } href="#" onClick={this.showLogin}>登陆</NavItem>
                     <NavItem eventKey={ 2 } href="#" onClick={this.showReg}>注册</NavItem>
                   </Nav>
        }
        return <Nav pullRight>
                 <User/>
               </Nav>
    }

    render() {
        return <div>
                 <Navbar>
                   <Navbar.Header>
                     <Brand>
                       <a href="/">首页</a>
                     </Brand>
                   </Navbar.Header>
                   <Nav>
                     <NavItem eventKey={ 1 } href="#">Link</NavItem>
                     <NavItem eventKey={ 2 } href="#">Link</NavItem>
                   </Nav>
                   { this.setUserBox() }
                 </Navbar>
                 <Login/>
               </div>
    }
}

Header.defaultProps = {
    // activeKey: 1,
    isLogin: false,
    showModal: false
}

// Header.propTypes = {
//     isLogin: PropTypes.bool.isRequired,
//     showModal: false
// }

export default Header