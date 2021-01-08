import React from "react";
import {Redirect, Route} from 'react-router-dom'
import Login from "./src/login/Login";
import './styles.less'
import UserIndex from "./src/user";
import Index from "./src/pages/index";


class App extends React.Component {

    render() {
        return (
            <div className='app-wrapper'>
                <Route exact path='/' render={() => <Redirect to='/index'/>}/>
                <Route path='/index' component={Index}/>
                <Route path='/login' component={Login}/>
                <Route path='/user' component={UserIndex}/>
            </div>
        );
    }
}

export default App

