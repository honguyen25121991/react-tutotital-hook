import { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";
const Home = () => {
  // const [name, setName] = useState("");
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([
    { id: "todo 1", name: "Whatching Youtube" },
    { id: "todo 2", name: "Using Facebook" },
    { id: "todo 3", name: "Reading Book" },
  ]);

  const myInfo = {
    address: "HCM",
    age: 23,
  };
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
      <AddTodo
        todo={todo}
        setTodo={setTodo}
        handleClickButton={handleClickButton}
      />
      <DisplayTodo
        listTodo={listTodo}
        lastName={"Eric"}
        myInfo={myInfo}
        handleDeleteTodoInParent={handleDeleteTodo}
      />
      {/* x=y x<-y */}
      Hello Todo list with name
      {/* {todo} */}
    </div>
  );
};
export default Home;

// class Home extends React.Component {
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
