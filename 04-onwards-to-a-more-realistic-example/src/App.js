import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const setTasksHandler = useCallback((data) => {
    const loadedTasks = [];
    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  let { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-my-burger-72b2e-default-rtdb.firebaseio.com/tasks.json",
      },
      setTasksHandler
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
