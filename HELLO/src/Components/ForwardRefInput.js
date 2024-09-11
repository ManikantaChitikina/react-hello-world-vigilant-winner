import React from 'react'

// function ForwardRefParentInput() {
//   return (
//     <div>
//       <input type='text'></input>
//     </div>
//   )
// }
const ForwardRefInput=React.forwardRef((props, ref) => {
        return (
       <div>
         <input type='text' ref={ref}></input>
       </div>
     ) 
   }
)

export default ForwardRefInput
