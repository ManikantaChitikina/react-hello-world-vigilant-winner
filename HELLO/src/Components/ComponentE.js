import React, { Component } from 'react'
import CompoentF from './CompoentF'
import UserContext from './UserContext'
 class ComponentE extends Component {
  render() {
    return (
      <div>
        ComponentE context {this.context}
        <CompoentF></CompoentF>
      </div>
    )
  }
}
ComponentE.contextType=UserContext
export default ComponentE
