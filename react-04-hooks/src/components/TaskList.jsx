import { useContext, useEffect, useRef } from "react";
import AppContext from "../context/AppContext";
import Task from "./Task";

function TaskList() {
  const { tasks, addTask } = useContext(AppContext);
  const inputRef = useRef("");
  //   const parrafoRef = useRef("");
  //   const countRef = useRef(0);

  //   const handleInput = () => {
  //     countRef.current++;
  //     console.log(countRef.current);
  //     console.log(inputRef.current.value);
  //     // parrafoRef.current.textContent = inputRef.current.value;
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Date.now(),
      title: inputRef.current.value,
    };
    inputRef.current.value = "";
    // console.log(task);
    addTask(task);
  };

  return (
    <>
      <h2>Lista de tareas</h2>

      {/* <p ref={parrafoRef}></p> */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="tarea">Tarea: </label>
        <input type="text" ref={inputRef} id="tarea" />
        <button type="submit">Crear</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <Task key={`task-${task.id}`} title={task.title} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
