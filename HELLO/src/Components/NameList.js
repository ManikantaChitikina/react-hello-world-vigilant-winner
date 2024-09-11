import React from 'react'
import Person from './Person'
function NameList() {
     const names=['Bruce','Clark','Diana']
    // const persons=[
    //     {
    //         id:1,
    //         name:'Bruce',
    //         age:30,
    //         skill:'React'
    //     },
    //     {
    //         id:2,
    //         name:'Clark',
    //         age:25,
    //         skill:'Angular'
    //     },
    //     {
    //         id:3,
    //         name:'Diana',
    //         age:28,
    //         skill:'Vue'
    //     }
    // ]

    // const nameList= names.map(name => <h2>{name}</h2>)
// const PersonsList= persons.map(person => <Person key={person.id} person={person}/>)
const nameList= names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
  return (
    
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
        {/* {names.map(name => <h2>{name}</h2>)} */}
        {/* {nameList} */}
        {/* {PersonsList} */}
        {nameList}
      
    </div>
  )
}

export default NameList
