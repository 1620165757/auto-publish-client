/**
 * @author: zxs
 * @date: 2020/12/17
 */
import React from "react";
import {Layout, Menu} from "antd";
import './styles.css'
import menus from "../../configs/menus";
import routers from "../../configs/routers/routers";
import {Redirect, Route} from "react-router-dom";
import {connect} from 'react-redux'

const {Header, Sider, Content, Footer} = Layout;
const {SubMenu} = Menu;
const Index = (props) => {

    const menuToggle = (path: string) => {
        props.history.push(path)
    };

    return (
        <Layout>
            <Header>
                <div className=''>Header11111</div>
            </Header>
            <Layout>
                <Sider theme="light">
                    <Menu mode="inline"
                          defaultSelectedKeys={["subMenu1_opt1"]}
                          defaultOpenKeys={["subMenu1"]}
                          style={{height: '100%'}}>
                        {menus.map(v1 => (
                            v1.children.length > 0 ? (
                                <SubMenu key={v1.key} title={v1.name}>
                                    {v1.children.map(v2 => (
                                        <Menu.Item key={v2.key} onClick={() => menuToggle(v2.path)}>
                                            {v2.name}
                                        </Menu.Item>
                                    ))}
                                </SubMenu>
                            ) : (
                                <Menu.Item key={v1.key}>{v1.name}</Menu.Item>
                            )
                        ))}
                    </Menu>
                </Sider>
                <Content>
                    <Route path='/' exact render={() => <Redirect to={routers[0].path}/>}/>
                    {routers.map(v => (
                        <Route key={v.name} path={v.path} component={v.component}/>
                    ))}
                </Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    )
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(Index)

