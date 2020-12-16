import * as React from "react";
import './styles.less'
import {Button, Form, Input} from "antd";
import httpRequest from "../utils/axios";
import {setCookie} from "../utils";
import {connect} from 'react-redux'
import {SAVE_USER} from "../action/userAction";

const layout = {
    wrapperCol: {span: 24},
};
const tailLayout = {
    wrapperCol: {span: 24},
};

class Login extends React.Component<any, any> {

    onFinish = async values => {
        const response = await httpRequest.post('/login', {
            account: values.username,
            password: values.password
        });
        if (response.code === 1) {
            setCookie('token', response.token);
            sessionStorage.setItem('userInfo', JSON.stringify(response.data));
            this.props.dispatch({
                type: SAVE_USER,
                payload: response.data
            });
            this.props.history.push('/user')
        }
    };

    onFinishFailed = errorInfo => {

    };

    render() {
        return (
            <div className='login-wrapper'>
                <div className='login-container'>
                    <div className='login-content'>
                        <Form {...layout}
                              name="basic"
                              initialValues={{remember: true}}
                              onFinish={this.onFinish}
                              onFinishFailed={this.onFinishFailed}>
                            <Form.Item label="" name="username" rules={[{required: true, message: '请输入用户名!'}]}>
                                <Input placeholder='请输入用户名'/>
                            </Form.Item>

                            <Form.Item label="" name="password" rules={[{required: true, message: '请输入密码!'}]}>
                                <Input.Password placeholder='请输入密码'/>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Login)
