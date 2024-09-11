import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    //   this.clickHandler =this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Good bye'   
    //     })
    //     console.log(this);
    // }
    clickHandler=()=>{
        this.setState({
            message:'Good bye'   
        })
        console.log(this);
    }

  render() {
    return (
      <div>
       
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
        <div>{this.state.message}</div>
      </div>
    )
  }
}

export default EventBind
