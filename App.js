import React from "react";
import {Route} from 'react-router-dom'
import Login from "./src/login/Login";
import './styles.less'
import UserIndex from "./src/user";


class App extends React.Component {

    componentDidMount() {
        console.log('test1111');
      const test =  import(/* webpackChunkName: "test" */'./src/test');
    }

    render() {
        return (
            <div className='app-wrapper'>
                <Route exact path='/' component={Login}/>
                <Route path='/user' component={UserIndex}/>
            </div>
        );
    }
}

export default App

