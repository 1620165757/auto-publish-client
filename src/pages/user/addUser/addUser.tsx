import React from "react";
import {Button, Form, Input, Tabs} from "antd";
import validateForm from "./validateForm";
// import BasicInfo from "./components/basicInfo";
// import OtherInfo from "./components/otherInfo";

// const {TabPane} = Tabs;

class AddUser extends React.Component<any, any> {

    goBack = () => {
        this.props.history.goBack();
    };

    onFormFinish = (formName: string, info: { values, forms }) => {
        validateForm(info.forms);
        // console.log(formName, info.forms.form1.getFieldValue());
        // console.log(formName, info.forms.form1.getFieldError());
        // console.log(formName, info.forms.form1.getFieldsValue());
    };

    render() {
        return (
            <div className='main-wrapper'>
                <div className='main-content'>
                    <div className='content-header'>
                        <Button type='primary' onClick={this.goBack}>返回</Button>
                    </div>
                    <div>
                        <Form.Provider onFormFinish={this.onFormFinish}>
                            <Form name='form1'>
                                <Form.Item label="姓名" name="name" rules={[{required: true}]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="密码" name="password" rules={[{required: true}]}>
                                    <Input/>
                                </Form.Item>
                            </Form>
                            <Form name='form2'>
                                <Form.Item label="描述" name="desc" rules={[{required: true}]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="地址" name="address" rules={[{required: true}]}>
                                    <Input/>
                                </Form.Item>
                            </Form>

                            <Form>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>

                        </Form.Provider>
                        {/*<Tabs defaultActiveKey="1">*/}
                        {/*    <TabPane tab="信息一" key="1">*/}
                        {/*        <BasicInfo/>*/}
                        {/*    </TabPane>*/}
                        {/*    <TabPane tab="信息二" key="2">*/}
                        {/*        <OtherInfo/>*/}
                        {/*    </TabPane>*/}
                        {/*</Tabs>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;