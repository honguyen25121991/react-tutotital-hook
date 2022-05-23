import React, { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
const Todolist = () => {
  // const [name, setName] = useState("");
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: "todo 1", name: "Whatching Youtube" },
    { id: "todo 2", name: "Using Facebook" },
    { id: "todo 3", name: "Reading Book" },
  ]);

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  // console.log(">>check data:", listTodo);
  const handleClickButton = () => {
    let todoId = randomIntFromInterval(4, 652);
    let todoItem = {
      id: `todo${todoId}`,
      name: todo,
    };
    setListTodo([...listTodo, todoItem]);
    // let currentTodoList = _.clone(listTodo);
    // currentTodoList.push(todoItem);
    // console.log(">>> check currentTodoList:", currentTodoList);
    // setListTodo(currentTodoList);
    // console.log(" >>>Event");
  };
  const handleDeleteTodo = (id) => {
    let currentTodoList = _.clone(listTodo);
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setListTodo(currentTodoList);
  };
  return (
    <div>
      <AddTodo />
      <label>ToDo name's : </label>
      <input
        value={todo}
        type="text"
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <br />
      <button
        type="button"
        onClick={(event) => {
          handleClickButton(event, event.target.value);
        }}
      >
        Submit
      </button>
      <br />
      <br />
      Hello Todo list with name
      {/* {todo} */}
      <div>-----List todo :------</div>
      {listTodo.map((item, index) => {
        console.log("Check item", item);
        console.log("Check index", index);

        return (
          <div
            key={item.id}
            onClick={() => {
              handleDeleteTodo(item.id);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
export default Todolist;

// class Todolist extends React.Component {
//   //khai báo state
//   state = {
//     name: "",
//   };
//   //gán lại giá tị của state dúng setState
//   render() {
//     return (
//       <div>
//         <label>Your Name : </label>
//         <input
//           type="text"
//           onChange={(event) => this.setState({ name: event.target.value })}
//         />
//         <br />
//         <br />
//         Hello Todo list with name {this.state.name}
//       </div>
//     );
//   }
// }
