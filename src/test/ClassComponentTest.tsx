import * as React from "react";
import {Button} from "antd";
import Components1 from "./components/Components1";

class ClassComponentTest extends React.Component<any, any> {

    state = {
        count: Math.random(),
        count1: 0
    }

    changeCount = () => {
        this.setState({
            count: Math.random()
        });
    }

    changeCount1 = () => {
        this.setState({
            count1: Math.random()
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.changeCount}>click me</Button>
                <Button onClick={this.changeCount1}>click me1</Button>
                <Components1 count={this.state.count}/>
            </div>
        );
    }
}

export default ClassComponentTest;
