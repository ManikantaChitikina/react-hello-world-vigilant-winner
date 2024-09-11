import React from "react";

const Hello= () =>{
    // return(
    //     <div>
    // <h1>Welcome Manikanta</h1>
    //     </div>
    
    // )
    // return React.createElement('div',null,'Welcome Manikanta')
    // return React.createElement('div',null, React.createElement('h1',null,'Welcome Manikanta'))
    return React.createElement('div',{id:'Hello', className:'dummyclass'}, React.createElement('h1',null,'Welcome Manikanta'))
}


export default Hello;