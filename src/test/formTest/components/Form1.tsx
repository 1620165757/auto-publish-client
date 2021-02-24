import React from 'react';
import {Button, Form, Input} from 'antd';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const Form1 = () => {
    return (
        <div>
            <Form {...layout} name='basic1' initialValues={{remember: true}}>
                <Form.Item label="Username" name="username" >
                    <Input/>
                </Form.Item>

                <Form.Item label="Password" name="password" validateStatus="error">
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Form1;