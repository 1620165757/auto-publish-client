import * as React from "react";
import './styles.less'
import httpRequest from "../../utils/axios";
import {Avatar, Button, List, Skeleton} from "antd";
import {connect} from 'react-redux'
import {initGlobalState} from "qiankun";
import {Link} from "react-router-dom";

class UserList extends React.Component {

    state = {
        list: []
    };

    componentDidMount() {
        this.getUserList();
    }

    getUserList = async () => {
        const response = await httpRequest.get('/getUserList');
        if (response?.code === 1) {
            this.setState({
                list: response.data
            })
        }
    };

    gotoDetail = () => {
        this.props.history.push('/user/userDetail')
    };

    gotoEdit = () => {
        this.props.history.push('/user/userEdit')
    };

    setQianKunState = () => {
        initGlobalState({
            data: '1232123'
        })
    };

    render() {
        const {list} = this.state;
        return (
            <div className='main-wrapper'>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={list}
                    renderItem={item => (
                        <List.Item actions={[
                            <a key="list-loadmore-edit" onClick={this.gotoDetail}>detail</a>,
                            <Link to='/user/userEdit' target='_blank'>edit</Link>
                        ]}>
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                    title={<a href="https://ant.design">{item.name.last}</a>}
                                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"/>
                                <div>content</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
                <Button onClick={this.setQianKunState}>click me</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(UserList)
