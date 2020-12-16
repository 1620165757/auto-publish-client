import test1 from './src/test1'
import React from 'react';
// import test2 from './src/test2'
const indexFunc = () => {
    console.log('-------12321-------',test1());
};

indexFunc();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css'
// import App from "./App";
// import {BrowserRouter} from "react-router-dom";
// import {Provider} from 'react-redux'
// import userReducer from './src/reducers/userReducer'
// import {createStore} from "redux";
// import {registerMicroApps, start, initGlobalState, MicroAppStateActions} from 'qiankun';

// let store = createStore(userReducer);
// ReactDOM.render(
//     <Provider store={store}>
//         <BrowserRouter basename='/'>
//             <App/>
//         </BrowserRouter>
//     </Provider>,
//     document.getElementById('root')
// );
//
// const state = {
//     data:'123321'
// };
// const actions: MicroAppStateActions = initGlobalState(state);
// @ts-ignore
// global.actions = actions;
// actions.onGlobalStateChange((state, prev) => {
//     console.log('onGlobalStateChange',state, prev);
// });
// actions.setGlobalState(state);

// registerMicroApps([
//     {
//         name: 'qiankun-app',
//         entry:'//192.168.200.114:3001/',
//         container:'#qiankun',
//         activeRule:'/user/userEdit',
//         props:{
//             data:'qiankun-test'
//         }
//     }
// ]);
//
// start();


