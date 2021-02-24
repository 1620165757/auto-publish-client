import * as React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Login from './login/Login';
import '../styles.less';
import Index from "./pages/Index";
// import ClassComponentTest from "./test/ClassComponentTest";
// import HooksComponentsTest from "./test/HooksComponentTest";
// import FormTest from "./test/formTest/FormTest";

class App extends React.Component {

    render() {
        return (
            <div className='app-wrapper'>
                {/*<ClassComponentTest/>*/}
                {/*<HooksComponentsTest/>*/}
                {/*<FormTest/>*/}
                <Route exact path='/' render={() => {
                    return <Redirect to='/index'/>;
                }}/>
                <Route path='/index' component={Index}/>
                <Route path='/login' component={Login}/>
            </div>
        );
    }
}

export default App;

