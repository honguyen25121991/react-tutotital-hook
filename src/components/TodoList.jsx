import React from "react";

// const Todolist = () => {
//   return <div>Todo List</div>;
// };

class Todolist extends React.Component {
  //khai báo state
  state = {
    name: "",
  };
  //gán lại giá tị của state dúng setState
  render() {
    return (
      <div>
        <label>Your Name : </label>
        <input
          type="text"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <br />
        <br />
        Hello Todo list with name {this.state.name}
      </div>
    );
  }
}
export default Todolist;
