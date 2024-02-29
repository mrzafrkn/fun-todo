import Card from "./shared/Card";
import TaskEdit from "./TaskEdit";
import { useState } from "react";
function ShowTodo({task, onDone, onDelete, onEdit}) { 
  const bgColor = task.taskLevel === 'Low' ? '#81b29a': task.taskLevel === 'Medium' ? '#ffc300' : task.taskLevel === 'High' ? '#c1121f': '#fff';
  const [inEditMode, setInEditMode] = useState(false);

    const handleDelClick = () => {
      onDelete(task.id)
    }

    const handleEditClick = () => {
      setInEditMode(!inEditMode)
    }

    const handleSubmit = (id, newText) => {
      setInEditMode(false)
      onEdit(id, newText)
    }

    const handleDoneClick = () => {
      onDone(task.id, !task.isDone)
    }

    let content = <p className={task.isDone === false ? 'new-task': 'done-task'} onClick={handleDoneClick}>{task.taskText}</p>
    if(inEditMode) {
      content = <TaskEdit task={task} onSubmit={handleSubmit}/>
    }

    return (
      <Card>
        <i onClick={handleDelClick} className="fa-solid fa-trash" ></i>
        <i onClick={handleEditClick} className="fa-solid fa-pen"></i>
        <div>{content}</div>
        <span style={{backgroundColor:bgColor}} className="task-level">{task.taskLevel}</span>
      </Card>
    
    )
}

export default ShowTodo;