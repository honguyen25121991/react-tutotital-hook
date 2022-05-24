const DisplayTodo = (props) => {
  const { handleDeleteTodoInParent, listTodo } = props;
  const chillTodoFromChild = (id) => {
    handleDeleteTodoInParent(id);
  };
  return (
    <div>
      <div>-----List todo :------</div>
      {listTodo.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              chillTodoFromChild(item.id);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTodo;
