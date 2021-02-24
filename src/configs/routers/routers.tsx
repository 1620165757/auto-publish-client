/**
 * @author: zxs
 * @date: 2020/12/17
 */
// import SubMenu1_opt1 from '../../pages/subMenu1/subMenu1_opt1';
// import SubMenu1_opt2 from '../../pages/subMenu1/subMenu1_opt2';
import {RoutersTypes} from './types';
import UserIndex from '../../pages/user';

const routers:Array<RoutersTypes> = [
    {
        name: 'user',
        path: '/index/user',
        component: UserIndex
    },
    // {
    //     name: 'subMenu1_opt1',
    //     path: '/index/subMenu1_opt1',
    //     component: SubMenu1_opt1
    // },
    // {
    //     name: 'subMenu1_opt2',
    //     path: '/index/subMenu1_opt2',
    //     component: SubMenu1_opt2
    // }
];

export default routers;
