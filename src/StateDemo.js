import React from 'react';
class StateDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user:{
                name:"Akash",
                gender:"Male",
                age:10
            }
        }
    }
     
    render() {

        return (<>
             Name is {this.state.user.name}
             Gender : {this.state.user.gender}
             Age : {this.state.user.age}
             <input type='button' onClick={()=>this.setState({user:{...this.state.user,age:20}})}/>
        </>)
    }
}
export default StateDemo