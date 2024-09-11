import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    // return (
    //     <div>
    //      <div> Welcome Manikanta</div>
    //      <div> Welcome Guest</div>
    
    //   </div>
    // )
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Manikanta</div>
    // }
    // else{
    //     return <div>Welcome Guest</div>
    //     }
    // let message
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Manikanta</div>
    // }
    // else{
    //     return <div>Welcome Guest</div>
    //     }
    //     return <div>{message}</div>
    return(
        this.state.isLoggedIn?<div>Welcome Manikanta</div>:<div>Welcome Guest</div>
    )
    // return this.state.isLoggedIn && <div>Welcome Manikanta</div>
  }
}

export default UserGreeting
