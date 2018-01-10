import React from 'react'
import ReactDOM from 'react-dom'
import {
    Form,
    Col,
    ControlLabel,
    FormControl,
    FormGroup,
    Button
} from 'react-bootstrap'

import './index.less'


class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            intr: '',
            content: ''
         };
    }

    onIptChange = (e, sta) => {
        const { value } = e.target
        this.setState({ [sta]: value });
    }

    onTitleChange = (e) => {
        this.onIptChange(e, 'title')
    }

    onIntrChange = (e) => {
        this.onIptChange(e, 'intr')
    }

    onContentChange = (e) => {
        this.onIptChange(e, 'content')
    }

    render() {
        return (
            <div className="editor">
                <Form horizontal >
                    <FormGroup className="editor-input">
                        <FormControl type="text" placeholder="标题" onChange={this.onTitleChange} focus/>
                    </FormGroup>

                    <FormGroup className="editor-input">
                        <FormControl type="text" placeholder="简介" onChange={this.onIntrChange}/>
                    </FormGroup>

                    <FormGroup className="editor-input textarea">
                        <FormControl componentClass="textarea" placeholder="正文"
                            bsSize="large"
                            className="editor-textarea"
                            cols="24"
                            onChange={this.onContentChange}
                        />
                    </FormGroup>

                    <FormGroup className="editor-input">
                        <Button bsStyle="primary"  bsSize="large" className="sub-btn">提交</Button>
                    </FormGroup>
                </Form>
            </div>

        );
    }
}



export default MyEditor