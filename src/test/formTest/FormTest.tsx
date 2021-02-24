import React from "react";
import {Form, Tabs} from "antd";
import Form2 from "./components/Form2";
import Form1 from "./components/Form1";

const {TabPane} = Tabs;
const FormTest = () => {
    const onFormFinish = (name, {values, forms}) => {
        console.log("onFormFinish", name, values, forms);
        // console.log("onFormFinish", );
        forms.basic1.validateFields().then(res => {
            console.log("111", res);
        });
    };

    return (
        <div>
            <Form.Provider onFormFinish={onFormFinish}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Tab 1" key="1">
                        <Form1/>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <Form2/>
                    </TabPane>
                </Tabs>
            </Form.Provider>
        </div>
    );
};

export default FormTest;