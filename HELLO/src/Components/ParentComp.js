import React, { Component ,PureComponent} from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'
 class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Manikanta'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState = {
                name:'Manikanta'
             } 
        },2000)
    }
    
  render() {
    console.log("parent component")
    return (
      <div>
       Parent Component 
      {/* <RegComp name={this.state.name}></RegComp>
      <PureComp name={this.state.name}></PureComp> */}
      <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
