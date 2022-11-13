import React, {Component} from "react";
export default class LoginClass extends Component{
    constructor(props){
        super(props)
        this.state ={
            email: '',
            passwor: '',
            country: 'not selected'
        }

        this.countries=['Canada', 'UAS', "UK", 'UEA', 'Mexico' ]
        
        
    }
    onVlaueChange =(event) =>{
        //console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }
    onSubmitForm = (event) =>{
        event.preventDefault()
        console.log("Form Submition: " + JSON.stringify(this.state))

    }


render(){
    return(
        <>
        <h1> Login Class Form</h1>
        
        <form method ="post" onSubmit={(e) => this.onSubmitForm(e)}>
        <input
        name='email'
            type="text"
            onChange={(e) => this.onVlaueChange(e)}
            placeholder="Enter Email"/>
        <input
        name='password'
            type="password"
            onChange={(e) => this.onVlaueChange(e)}
            placeholder="Enter Password"/>

            <input
                name='gender'
                type='radio'
                value='Male'
                onClick={(e) => this.onSubmitForm(e)}/>Male


            <input
                name='gender'
                type='radio'
                value='Female'
                onClick={(e) => this.onSubmitForm(e)}/>Female

            <select name='country' onChange={(e) => this.onVlaueChange(e)}> 
                {
                    this.countries.map((country) =>(
                        <option key= {country} value={country}>{country}</option>
                    ))
                }
            </select>

            <input
                name='btnSubmit'
                type="submit"
                value="Login"
                //onClick={(e) => this.onSubmitForm(e)} 
                />
               

</form>
        </>
    )}

}

//rfc to add class