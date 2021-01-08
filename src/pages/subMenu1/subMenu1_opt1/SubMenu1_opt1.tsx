/**
 * @author: zxs
 * @date: 2020/12/17
 */
import React from "react";
import {Button} from "antd";
import {Link} from "react-router-dom";

const SubMenu1_opt1 = ()=>{

    const qiankunTest = ()=>{
        // @ts-ignore
        global.actions.setGlobalState({
            data: 'qiankun' + Math.random()
        })
    };

    return(
        <div>
            <Button type='primary'><Link to='/index/subMenu1_opt1/qiankun'>打开qiankun应用</Link></Button>
            <Button type='dashed' onClick={qiankunTest}>click me</Button>
            <div id='qiankun'/>
        </div>
    )
};

export default SubMenu1_opt1
