import React from 'react';

function TodoList(props) {
  const {title} = props;
  const [tasks, setTasks] = React.useState([ ]);

  const renderTasks = () => {
    return tasks.map( task => <div>{task}</div>)
  }

  const onClick = () => {
    setTasks([...tasks, 'task'])
  }

  return (
    <div>
      <h2>{title}</h2>
      <div>{renderTasks()}</div>
      <button onClick={onClick} > Add task </button>
    </div>
  );
}

export default TodoList;
