import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/useFetch";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest } = useFetch();
  useEffect(() => {

    const transformTasks = (taskObj) => {
      const loadedTasks = [];
  
      for (const taskKey in taskObj) {
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
  
      setTasks(loadedTasks);
    };
  
    sendRequest(transformTasks,{
      url: "https://reactguide-d1e11-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
       },);
  }, [sendRequest]);

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
        onFetch={sendRequest}
      />
    </React.Fragment>
  );
}

export default App;
