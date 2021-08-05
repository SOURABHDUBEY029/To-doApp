// let MyComp = () => {
//     return (
//         <div>
//             <h1>This is functional component</h1>
//             <p>This is second component</p>
//             <ul>
//                 <li>First item</li>
//                 <li>Second item</li>
//             </ul>
//         </div>
//     );
// };

// export default MyComp;

// import React from "react";

// class MyComp extends React.Component{
//     state = {
//         someNumber : 5
//     }

//     render = () => {
//         return (
//             <div>
//                 <h1> {this.state.someNumber} </h1>
//             </div>
//         );
//     };
// }
// export default MyComp;

//3 chije - h1 , p, ul

import React from "react";

class MyComp extends React.Component {
  state = {
    someNumber: 0,
  };

  render = () => {

    console.log("Rendered function is executed");

    return (
      <div>
        <button
          onClick = { () => {
            
            this.setState({someNumber: this.state.someNumber + 1  })

          }  }
        >
          increment
        </button>

        <button onClick = { () =>{
            this.setState({someNumber: this.state.someNumber - 1})
        }}>Decrement</button>

        <h1>{this.state.someNumber}</h1>
        
      </div>
    );
  };
}

export default MyComp;

