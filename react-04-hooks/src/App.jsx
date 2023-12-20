import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import TaskList from "./components/TaskLIst";
import AppContext from "./context/AppContext";
import Counter from "./components/Counter";

function App() {
  const [tasks, setTasks] = useState([]);

  const text = "Copyright 2023";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=7"
        );
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const data = {
    tasks,
    text,
    addTask,
  };

  return (
    <>
      <h1>App</h1>
      <AppContext.Provider value={data}>
        <TaskList />
        <Footer />
      </AppContext.Provider>
      {/* <Counter /> */}
    </>
  );
}

export default App;
