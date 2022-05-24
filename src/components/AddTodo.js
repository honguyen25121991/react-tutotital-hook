const AddTodo = (props) => {
  const { todo, setTodo, handleClickButton } = props;
  return (
    <div>
      <label>ToDo name's :{todo} </label>
      <br />
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
        onClick={() => {
          handleClickButton();
        }}
      >
        Submit
      </button>
      <br />
      <br />
    </div>
  );
};
export default AddTodo;
