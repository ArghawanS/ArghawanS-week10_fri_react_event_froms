import React from "react";
export default class Student extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            x: 1
        }
        //this.handleAddEvent = this.handleAddEvent.bind(this)
    }
    handleAddEvent= () => {
        this.setState({x : this.state.x +1})
        console.log("Add Cliecked: "+ this.state.x)
    }
    handleAddEvent = (event) =>{
        console.log(event)
    }


    render(){
        return(
<>
        <h2>Student Component</h2>
        x:{this.state.x}
        <button 
            onClick={() =>this.handleAddEvent}>Add</button>
        <button 
            name = "btnEvent"
            value = "Event"
            onClick={(event) =>this.handleAddEvent(event)}>Event Object</button>
        </>
        )
    }

}