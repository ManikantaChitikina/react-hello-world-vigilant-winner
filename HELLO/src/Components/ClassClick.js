import React, { Component } from 'react'

export class ClassClick extends Component {
    ClickHandler()
    {
        console.log("Click Handler");
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickHandler}>ClickMe</button>
        
      </div>
    )
  }
}

export default ClassClick
