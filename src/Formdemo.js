import React from 'react';
class Formdemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    clickData(e) {
        var a = parseInt(this.state.txt1);
        var b = parseInt(this.state.txt2);
        var action = e.target.value;
        if (action == "+") {
            var c = a + b;
        } else if (action == "-") {
            var c = a - b;
        }
        this.setState({ msg: c });
    }

    render() {
        return (
            <>
                No1:<input type='text' onChange={(e) => this.setState({ txt1: e.target.value })} />
                No2:<input type='text' onChange={(e) => this.setState({ txt2: e.target.value })} />
                <input type='button' value="+" onClick={this.clickData.bind(this)} />
                <input type='button' value="-" onClick={this.clickData.bind(this)} /><br />
                {this.state.msg}
            </>
        );
    }
}

export default Formdemo;