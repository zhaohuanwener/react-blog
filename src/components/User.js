import React ,{ Component } from 'react'
import { NavDropdown, MenuItem } from 'react-bootstrap'

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarSrc: props.avatarSrc || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            userName: props.userName || 'zhaohuanwen',
            isLogin: false
        }
    }

    logout = () => {
        message.info('logout')
    }

    render() {
        return <NavDropdown eventKey={3} title={this.state.userName} style={style.MenuItem}
       id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>个人中心</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>退出登陆</MenuItem>
        </NavDropdown>
            
    }
}

const style = {
    MenuItem: {
        minWidth: 160,
        // border: '1px solid red'
    }
}


