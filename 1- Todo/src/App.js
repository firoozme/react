import { useState } from "react";
import Button from "./Button";
import Task from "./Task.js";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handelInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTaskButton = () => {
    const task = {
      taskId: taskList.length === 0 ? 1 : taskList[taskList.length - 1].taskId + 1,
      taskName: newTask,
      isCompleted: false,
    };

    setTaskList([...taskList, task]);
  };

  const deleteTaskButton = (taskId) => {
    setTaskList(taskList.filter((task) => taskId !== task.taskId));
  };
  const completeTaskButton = (taskId) => {
    let newTaskList = taskList.map((task) => {
      if (task.taskId === taskId) return { ...task, isCompleted: !task.isCompleted };
      else return task;
    });
    setTaskList(newTaskList);
  };
  return (
    <div>
      <input type="text" onChange={handelInputChange} />
      <Button onClick={addTaskButton}>Add Task</Button>
      <ul>
        {taskList.map((task, index) => {
          return <Task key={index} completeTaskButton={completeTaskButton} deleteTaskButton={deleteTaskButton} task={task} />;
        })}
      </ul>
    </div>
  );
}
export default App;
