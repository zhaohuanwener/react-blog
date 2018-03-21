import React ,{ Component } from 'react'
import { NavDropdown, MenuItem } from 'react-bootstrap'

export default ({ userName }) => {
    return <NavDropdown  title={userName} style={style.MenuItem}
    id="basic-nav-dropdown">
         <MenuItem eventKey={3.1}>个人中心</MenuItem>
         <MenuItem divider />
         <MenuItem eventKey={3.4}>退出登陆</MenuItem>
     </NavDropdown>
}

const style = {
    MenuItem: {
        minWidth: 160,
        // border: '1px solid red'
    }
}


