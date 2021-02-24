import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import userReducer from "./reducers/userReducer";
import {createStore} from "redux";
// import {registerMicroApps, start, initGlobalState, MicroAppStateActions} from "qiankun";

// ReactDOM.render(
//     <div>111</div>,
//     document.getElementById("root")
// );
let store = createStore(userReducer);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/">
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// const state = {
//     data: "qiankun" + Math.random()
// };
// const actions: MicroAppStateActions = initGlobalState(state);
//
// // @ts-ignore
// global.actions = actions;
// actions.onGlobalStateChange((state, prev) => {
//     console.log("onGlobalStateChange_主应用", state, prev);
// },true);
//
//
// registerMicroApps([
//     {
//         name: "qiankun-test",
//         entry: "//192.168.200.114:3000/",
//         container: "#qiankun",
//         activeRule: "/index/subMenu1_opt1/qiankun",
//         props: {
//             data: "qiankun1111111"
//         }
//     }
// ]);
//
// start();


