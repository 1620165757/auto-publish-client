import * as React from 'react';
import {Redirect, Route} from 'react-router-dom';
import UserList from './userList/UserList';
import AddUser from "./addUser/addUser";

class UserIndex extends React.Component {

    render() {
        return (
            <div className='whole-page'>
                <Route exact path='/index/user' render={() => <Redirect to="/index/user/userList"/>}/>
                <Route path='/index/user/userList' component={UserList}/>
                <Route path='/index/user/addUser' component={AddUser}/>
            </div>
        );
    }
}

export default UserIndex;
