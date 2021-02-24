import React from "react";
import {Button, Form, Input, Table} from "antd";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const Form2 = () => {

    const dataSource = [
        {
            key: "1",
            name: "胡彦斌",
            age: 32,
            address: "西湖区湖底公园1号",
        },
        {
            key: "2",
            name: "胡彦祖",
            age: 42,
            address: "西湖区湖底公园1号",
        },
    ];

    const columns = [
        {
            title: "姓名",
            dataIndex: "name",
            key: "name",
            render: () => {
                return (
                    <Form.Item>
                        <Input/>
                    </Form.Item>
                );
            }
        },
        {
            title: "年龄",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "住址",
            dataIndex: "address",
            key: "address",
        },
    ];

    return (
        <div>
            <Form {...layout} name="basic2" >
                <Table dataSource={dataSource} columns={columns} size='small' pagination={false}/>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Form2;