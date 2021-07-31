import React from 'react';
class UserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "name":"Guest",
            "age":22
        }
    }
    render(){
        return<div>
            <h1>Class Component using State</h1>
            <h3>Name:{this.state.name}</h3>
            <h3>Age:{this.state.age}</h3>
            <button onClick={()=>this.setState({...this.state,name:"Fareha",age:26})}>
                Update User
            </button>
        </div>
    }
}
export default UserComponent;