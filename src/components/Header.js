import React, { Component } from 'react'
import { Menu, Icon, SubMenu, Avatar } from 'antd'
import User from './User'


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'mail'
        }
    }

    render() {
        return <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            theme="dark"
            mode="horizontal"
            style={style.nav}    
        >
              
        <Menu.Item key="mail" className="menuItem">
          <Icon type="home" /> 首页
        </Menu.Item>
            <div style={style.userBox}>
                <User ></User>
            </div>    
        
      </Menu>
    }
}

const style = {
    userBox: {
        border: '1px solid red',
        width: 250,
        height: 46,
        float: 'right',
        paddingTop: 10
    },
    nav: {
        height: 46,
        // border: '1px solid red',
    }
}

export default Header