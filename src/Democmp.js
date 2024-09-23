import React from 'react';
class Democmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { islogin: true,msg:'On' };
    }
    updateData(){
        if(this.state.islogin){
            this.setState({islogin:false,msg:'Off'})
        }else{
            this.setState({islogin:true,msg:'On'})
        }
    }
    render() {
        
        return (
            <>
            <input type='button' onClick={this.updateData.bind(this)} value={this.state.msg} />
            <input type='button' onClick={()=>this.setState({islogin:!this.state.islogin})} value={this.state.islogin} />
             </>
        )
    }
}
export default Democmp;