import {Form, Input} from "antd";
import React from "react";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

class OtherInfo extends React.Component<any, any> {

    render() {
        return (
            <Form
                {...layout}
                name="basic2">
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}>
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}>
                    <Input.Password/>
                </Form.Item>

                {/*<Form.Item {...tailLayout}>*/}
                {/*    <Button type="primary" htmlType="submit">*/}
                {/*        Submit*/}
                {/*    </Button>*/}
                {/*</Form.Item>*/}
            </Form>
        );
    }

}

export default OtherInfo;