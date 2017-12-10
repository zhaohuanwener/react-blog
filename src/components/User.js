import React ,{ Component } from 'react'
import { Dropdown, Avatar, Menu, Icon, Button, message } from 'antd'

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
        const { isLogin } = this.state
        if (!isLogin) {
            return <div>
                <Button ghost size="small">注册</Button>
                <Button ghost size="small">登陆</Button>
            </div>
        }
        return <div>
            <span style={style.username}> {this.state.userName} </span>
            <Avatar src={this.state.avatarSrc} size="large"></Avatar>
            <Button size="small" ghost target="_blank" onClick={this.logout}>退出</Button>
        </div>
            
    }
}

const style = {
    username: {
        marginBottom: 20,

    }
}


