function Task(probs){
return (
    <li style={{background: probs.task.isCompleted ? 'green' : 'white'}}>
        {probs.task.taskName} 
              <button onClick={()=>{
                probs.completeTaskButton(probs.task.taskId)
              }}>complete</button>
              <button onClick={()=>{
              probs.deleteTaskButton(probs.task.taskId)
            }}> Remove</button></li>
)
}

export default Task;