import * as React from "react";
import {Redirect, Route} from "react-router-dom";
import UserList from "./userList/UserList";
import UserDetail from "./userDetail/UserDetail";
import UserEdit from "./userEdit/UserEdit";

class UserIndex extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/user' render={() => <Redirect to="/user/userList"/>}/>
                <Route path='/user/userList' component={UserList}/>
                <Route path='/user/userDetail' component={UserDetail}/>

                <Route path='/user/userEdit' component={UserEdit}/>
            </div>
        )
    }
}

export default UserIndex
