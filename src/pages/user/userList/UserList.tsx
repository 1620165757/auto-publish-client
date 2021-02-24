import * as React from "react";
import './styles.less';
import httpRequest from "../../../utils/axios";
import {Button, Table} from "antd";
// import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {initGlobalState} from "qiankun";

// import AddUser from "../addUser/addUser";

class UserList extends React.Component<any, any> {

    state = {
        list: []
    };

    addUser = () => {
        this.props.history.push('/index/user/addUser');
    };

    componentDidMount() {
        this.getUserList();
    }

    getUserList = async () => {
        const response: any = await httpRequest.get('/getUserList');
        if (response?.code === 1) {
            console.log('getUserList', response.data);
            this.setState({
                list: response.data
            });
        }
    };

    gotoDetail = () => {
        this.props.history.push('/user/userDetail');
    };

    gotoEdit = () => {
        this.props.history.push('/user/userEdit');
    };

    setQianKunState = () => {
        initGlobalState({
            data: '1232123'
        });
    };

    columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '密码',
            dataIndex: 'password',
        },
        {
            title: '描述',
            dataIndex: 'desc',
        },
        {
            title: '地址',
            dataIndex: 'address',
        }
    ]

    render() {
        const {list} = this.state;
        return (
            <div className='main-wrapper'>
                <div className='main-content'>
                    <div className='content-header'>
                        <Button type='primary' onClick={this.addUser}>新增</Button>
                    </div>
                    <div className='content-body'>
                        <Table
                            dataSource={list}
                            rowKey='id'
                            columns={this.columns}/>
                        {/*<Button onClick={this.setQianKunState}>click me</Button>*/}
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(UserList);
