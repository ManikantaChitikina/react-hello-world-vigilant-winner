import { React } from "react";

// function Greet(){
//     return <h1>Hello Manikanta </h1>
// }

// const Greet = ()=><h1>This is Functional Component</h1>

// const Greet = Props=>{
    // console.log(Props);
    // const Greet = ({name,heroName})=>{
        const Greet = Props=>{
            const {name,heroName}=Props
    return(
        <div>
        {/* <h1>Hello {Props.name} also know as {Props.heroName}</h1> */}
        {/* {Props.children} */}
        <h1>Hello {name} also know as {heroName}</h1>
        
        </div>
    )
}

export default Greet;
