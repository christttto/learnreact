import React from "react"
import LogButton from "./LogButton"
/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            userLoggedIn: true
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState=>{//1
            const updatedUserLoggedIn = !prevState.userLoggedIn
            return{
                userLoggedIn: updatedUserLoggedIn
            }
        })//1
    }
    render(){
        return (
            <div>
                {this.state.userLoggedIn ?
                    <h1>loggedin</h1> :
                    <h1>logged out</h1>
                }
                <LogButton userLoggedIn={this.state.userLoggedIn} handleClick={this.handleClick}/>
            </div>
        )        
    }
    
}

export default App


