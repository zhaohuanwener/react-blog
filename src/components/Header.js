import React, { Component } from 'react'
import { NavItem, Nav, Navbar, NavDropdown, MenuItem, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types';
import {
    NavLink,
    Route, 
    Switch,
    Link
} from 'react-router-dom'

import { push } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()

// import Header from '../containers/Header'
import WriteBlog from '../containers/WriteBlog'

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
        const { toogleLoginModal, toogleRegModal} = this.props
        toogleLoginModal()
        toogleRegModal(false)
    }

    showReg = () => {
        const { toogleRegModal, toogleLoginModal } = this.props
        toogleRegModal(true)
        toogleLoginModal()
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
            <Navbar
                collapseOnSelect
                // inverse
                // fixedTop
            >
                <Navbar.Header>
                    <Brand>
                        <a href="/">首页</a>
                    </Brand>
                </Navbar.Header>
                <ul className="nav navbar-nav">
                    <li className="active"><NavLink to="/write">写博客</NavLink></li>
                </ul>
            { this.setUserBox() }
            </Navbar>
            <Login show={ this.props.showModal }
            reg={ this.props.reg } 
            toogleLoginModal={ this.props.toogleLoginModal }
            toggoleLoading={this.props.toggoleLoading}
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