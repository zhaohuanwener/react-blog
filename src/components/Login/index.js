import React , { Component } from 'react'
import PropTypes from 'prop-types';
import './index.less'
import { 
    Modal, 
    FormGroup, 
    InputGroup, 
    FormControl, 
    Form, 
    Button, 
    Checkbox, 
    Glyphicon
 } from 'react-bootstrap'

const { Header, Body, Footer, Title } = Modal

class Login extends Component {

    hide = () => {
        const { toggoleModal } = this.props
        toggoleModal()
    }

    repPwd = () => {
        const { reg } = this.props
        if (reg) {
            return <FormGroup controlId="formHorizontalEmail" className="form-group">
                     <InputGroup>
                       <InputGroup.Addon>
                         <Glyphicon glyph="lock" />
                       </InputGroup.Addon>
                       <FormControl type="password" placeholder="重复密码" />
                     </InputGroup>
                   </FormGroup>

        }
    }

    submit = () => {
        const { loading, dispatch, toggoleLoading } = this.props
        toggoleLoading()
    }

    onFormEnter = (e) => {
        const keyCode = e.keyCode || e.which
        if (keyCode === 13) {
            this.submit()
        }
    }

    render() {
        const { loading, title, show } = this.props
        return <div>
                 <Modal dialogClassName="static-modal" show={ show } keyboard={ false } backdrop={ true } onHide={ this.hide }>
                   <Header closeButton={ true }>
                     <Title>
                       { title }
                     </Title>
                   </Header>
                   <Body>
                     <div className="form-box" onKeyDown={this.onFormEnter}>
                       <Form horizontal>
                         <FormGroup controlId="formHorizontalEmail" className="form-group">
                           <InputGroup>
                             <InputGroup.Addon>
                               <Glyphicon glyph="user" />
                             </InputGroup.Addon>
                             <FormControl type="text" placeholder="用户名" />
                           </InputGroup>
                         </FormGroup>
                         <FormGroup controlId="formHorizontalEmail" className="form-group">
                           <InputGroup>
                             <InputGroup.Addon>
                               <Glyphicon glyph="lock" />
                             </InputGroup.Addon>
                             <FormControl type="password" placeholder="密码"/>
                           </InputGroup>
                         </FormGroup>
                         { this.repPwd() }
                         <FormGroup>
                            <Button 
                                block 
                                bsStyle="success" 
                                bsSize="large" 
                                onClick={ this.submit } 
                                disabled={ loading }
                            >
                             { loading ? `${title}中...` : title }
                           </Button>
                         </FormGroup>
                       </Form>
                     </div>
                   </Body>
                 </Modal>
               </div>
    }
}

Login.defaultProps = {
    loading: false,
    show: true,
    reg: false,
    title: '登陆'
}

Login.propTypes = {
    loading: PropTypes.bool,
    show: PropTypes.bool,
    reg: PropTypes.bool,
    title: PropTypes.string,
    toggoleLoading: PropTypes.func.isRequired,
    toggoleModal: PropTypes.func.isRequired,
}

export default Login


