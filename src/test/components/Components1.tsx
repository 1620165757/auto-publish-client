import React from "react";

class Components1 extends React.Component<any, any> {

    state = {
        data: "",
        count: 0
    }

    static getDerivedStateFromProps(nextProps: any, prevState: any) {
        console.log("getDerivedStateFromProps");
        if (nextProps.count !== prevState.count) {
            return {
                ...prevState,
                count: nextProps.count
            };
        }
        return prevState;
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getData();
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        console.log("shouldComponentUpdate", nextProps, nextState, this.state);
        return nextState.count !== this.state.count;
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot: any) {
        if (this.state.count !== prevState.count) {
            this.getData();
        }
    }

    getData = () => {
        this.setState({
            data: "string" + this.state.count
        });
    };

    render() {
        console.log("Components1");
        return (
            <div>
                {this.state.data}
            </div>
        );
    }
}

export default Components1;