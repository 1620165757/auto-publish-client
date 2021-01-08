/**
 * @author: zxs
 * @date: 2020/12/17
 */
import {RouterType} from "./types";

const menus: Array<RouterType> = [
    {
        name: "subMenu1",
        key: 'subMenu1',
        level: 1,
        children: [
            {
                name: "subMenu1_opt1",
                key: "subMenu1_opt1",
                path: "/index/subMenu1_opt1",
                level: 2,
            },
            {
                name: "subMenu1_opt2",
                key: "subMenu1_opt2",
                path: "/index/subMenu1_opt2",
                level: 2,
            }
        ]
    },
    {
        name: "subMenu2",
        key: 'subMenu2',
        level: 1,
        children: [
            {
                name: "subMenu2_opt1",
                key: "subMenu2_opt1",
                path: "",
                level: 2,
            },
            {
                name: "subMenu2_opt2",
                key: "subMenu2_opt2",
                path: "",
                level: 2,
            }
        ]
    }
];
export default menus
