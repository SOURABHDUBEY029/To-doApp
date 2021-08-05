// let App = () => {
//   return (
//     <div>
//       <h1>This is our first react app.</h1>
//     </div>
//   );
// };

// export default App;


import React from "react";
import "./App.css"
import List from "./List";
import Input from "./Input";


class App extends React.Component {
  state = {
    tasks: ["make coffee", "make notes", "go for a jog", "new task"],
    currInput: "",
  };

  deleteTask = (singleTask) =>{
    let currTaskArr = this.state.tasks;

              let filteredArr = currTaskArr.filter((element) => {
                return element !== singleTask;
              });
              this.setState({tasks: filteredArr});
  }

  handleCurrInput = (value) => {
    this.setState({currInput: value});
  }

  handleTasks = () =>{
    this.setState({
      tasks: [...this.state.tasks, this.state.currInput],
      currInput: ""
    })
  }

  render = () => {
    return (
      <div>
        <Input
        handleCurrInput={this.handleCurrInput}
        handleTasks={this.handleTasks}
        currInput={this.state.currInput}
        />
        <List tasks = {this.state.tasks} deleteTask = {this.deleteTask}/>
      </div>
    );
  };
}

export default App;