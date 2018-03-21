import React, { Component } from 'react'
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
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      username: '',
      pwd: '',
      repPwd: '',
      usernameValidationState: null,
      pwdValidationState: null,
      repPwdValidationState: null,
    }
  }


  resetState = () => {
    this.setState({
      usernameValidationState: null,
      pwdValidationState: null,
      repPwdValidationState: null,
      username: '',
      pwd: '',
      repPwd: '',
    })
  }

  hide = () => {
    const { toogleLoginModal, toggoleLoading } = this.props
    toogleLoginModal()
    this.hideLoading()
    this.resetState()
  }

  hideLoading = () => {
    this.setState({
      loading: false
    })
  }

  showLoading = () => {
    this.setState({
      loading: true
    })
  }
  repPwd = () => {
    const { reg } = this.props
    if (reg) {
      return <FormGroup controlId="formHorizontalEmail" className="form-group" validationState={this.state.repPwdValidationState}>
        <InputGroup>
          <InputGroup.Addon>
            <Glyphicon glyph="lock" />
          </InputGroup.Addon>
          <FormControl type="password" placeholder="重复密码" onChange={(e) => {
            this.inputChange(e, 'repPwd')
          }}/>
        </InputGroup>
      </FormGroup>

    }
  }

  submit = () => {
    const { toggoleLoading, reg } = this.props
    const { username, pwd, repPwd } = this.state
    const state = 'error'
    if (!username) {
      this.setState({
        usernameValidationState: state
      })
    }

    if (!pwd) {
      this.setState({
        pwdValidationState: state
      })
    }

    if (reg && !repPwd) {
      this.setState({
        repPwdValidationState: state
      })
    }
    if (username && pwd) {
      // if (!reg) {
      //   return this.showLoading()
      // }
      // if (repPwd) {
      //   this.showLoading()
      // }
      this.props.submit(username, pwd, repPwd)
    }
  }

  inputChange = (e, prop) => {
    const value = e.target.value.trim()
    const state = {
      [prop]: value
    }
    this.setState(state)
  }

  onFormEnter = (e) => {
    const keyCode = e.keyCode || e.which
    if (keyCode === 13) {
      this.submit()
    }
  }

  render() {
    const { show, loading, title } = this.props
    return <div>
      <Modal dialogClassName="static-modal" show={show} keyboard={false} backdrop={true} onHide={this.hide}>
        <Header closeButton={true}>
          <Title>
            {title}
          </Title>
        </Header>
        <Body>
          <div className="form-box" onKeyDown={this.onFormEnter}>
            <Form horizontal>
              <FormGroup className="form-group" validationState={this.state.usernameValidationState}>
                <InputGroup >
                  <InputGroup.Addon>
                    <Glyphicon glyph="user" />
                  </InputGroup.Addon>
                  <FormControl type="text" placeholder="用户名" onChange={(e) => {
                    this.inputChange(e, 'username')
                  }}/>
                  {/* <FormControl.Feedback /> */}
                </InputGroup>
              </FormGroup>

              <FormGroup className="form-group" validationState={this.state.pwdValidationState}>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="lock" />
                  </InputGroup.Addon>
                  <FormControl type="password" placeholder="密码"  onChange={(e) => {
                    this.inputChange(e, 'pwd')
                  }}/>
                </InputGroup>
              </FormGroup>
              {this.repPwd()}
              <FormGroup>
                <Button
                  block
                  bsStyle="success"
                  bsSize="large"
                  onClick={this.submit}
                  disabled={loading}
                >
                  {loading ? `${title}中...` : title}
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
  show: false,
  reg: false,
  loading: false
}

Login.propTypes = {
  show: PropTypes.bool,
  reg: PropTypes.bool,
}

export default Login


