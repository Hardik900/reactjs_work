import React from "react";

class Form extends React.Component{
    constructor(){
        super();
        this.state={value: ""}
        // this.state={data: ""}
        // this.state = {
        //                 a:[
        //                     {value: ""},
        //                     // {data: ""},

        //                 ]
        //             }
        // this.Change= this.Change.bind(this)
        // this.Submit= this.Submit.bind(this)
    }
    Change=(e)=>{
        // console.log("change called")
        this.setState({value :e.target.value})
        // this.setState({data :e.target.data})
    }                                                                    
    Chang=(e)=>{
        this.setState({data :e.target.value})
    }

    Submit=(e)=>{
        console.log(e,"SDdddd")
        // console.log("submit called")
        console.log("Welcome user " +  this.state.value)
        console.log(this.state.value + " Mobile Number is " + this.state.data)
        e.preventDefault();
    }
    
    render(){
        const Style = {color:"white", fontSize:"20px"};
        return(
            <>
                <form onSubmit={this.Submit}>
                    <label style={Style}>Name</label>
                    <input type="text" value={this.state.value} onChange={this.Change}/><br/>
                    
                    <label style={Style}>Number</label>
                    <input type="number" value={this.state.data}  onChange={this.Chang} /><br/>
                    <input type="submit" value="submit"/>
                </form>
            </>
        )
    }
}

export default Form;