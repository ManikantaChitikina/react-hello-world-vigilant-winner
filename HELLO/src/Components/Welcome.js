import { React, Component } from "react";

class Welcome extends Component{
    render(){
        // return <h1>Class Component </h1>
    // return <h1>Hello {this.props.name} also know as {this.props.heroName}</h1>
    const {name, heroName}= this.props
    return(
        <h1>Hello {name} also know as {heroName}</h1>
    ) 
    }
}
export default Welcome;