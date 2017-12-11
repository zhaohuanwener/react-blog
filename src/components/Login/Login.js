import React ,{ Component } from 'react'
import './Login.less'
import { 
    Modal, 
    FormGroup, 
    InputGroup, 
    FormControl,
    Form, 
    Button,
    Col,
    ControlLabel,
    Checkbox,
    Glyphicon
 } from 'react-bootstrap'

const {
    Header,
    Body,
    Footer,
    Title
} = Modal

 class Login extends Component {
     constructor(props) {
         super(props)
         this.state = {}
     }

     componentWillReceiveProps(props) {
        const { reg } = props
        this.setState({
            reg,
            show: props.show,
            title: reg ? '注册' : '登陆'
        })
     }

     hide = () => {
         this.setState({
            show: false,
            reg: false
         })
     }

     repPwd = () => {
         const { reg } = this.state
         if (reg) {
             return <FormGroup controlId="formHorizontalEmail" classNmae="form-group">
                <InputGroup>
                    <InputGroup.Addon>
                        <Glyphicon glyph="lock" />
                    </InputGroup.Addon>
                    <FormControl type="password" placeholder="重复密码"/>
                </InputGroup>
            </FormGroup>
             
         }
     }

     render() {
         return <div>
            <Modal
                dialogClassName="static-modal"
                show={this.state.show}
                keyboard={false}
                backdrop={true}
                onHide={this.hide}
            >
            <Header
                closeButton={true}
            >
                <Title>{this.state.title}</Title>
            </Header>

            <Body>
                <div className="form-box">
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail" classNmae="form-group">
                            <InputGroup>
                                <InputGroup.Addon>
                                    <Glyphicon glyph="user" />
                                </InputGroup.Addon>
                                <FormControl type="text" placeholder="用户名"/>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalEmail"  classNmae="form-group">
                            <InputGroup>
                                <InputGroup.Addon>
                                    <Glyphicon glyph="lock" />
                                </InputGroup.Addon>
                                <FormControl type="password" placeholder="密码"/>
                            </InputGroup>
                        </FormGroup>
                            
                        {this.repPwd()}

                        <FormGroup>
                            <Col smOffset={2} sm={5}>
                                <Button  block bsStyle="success">
                                    {this.state.title}
                                </Button>
                            </Col>
                            <Col smOffset={2} sm={5}>
                                <Button  block bsStyle="success">
                                    {this.state.title}
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </Body>
{/* 
            <Footer>
                <Button onClick={this.hide}>取消</Button>
                <Button bsStyle="primary">确定</Button>
            </Footer> */}

            </Modal>
        </div>
     }
 }

 
 export default Login


