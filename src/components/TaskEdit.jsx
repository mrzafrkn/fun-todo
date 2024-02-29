import { useState } from "react"
function TaskEdit({onSubmit, task}) {
  const [newText, setNewText] = useState(task.taskText)

  const handleTextChange = (e) => {
    setNewText(e.target.value)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    onSubmit(task.id, newText)
  }
  return (
    <form onSubmit={handleEditSubmit}>
        <input onChange={handleTextChange} value={newText}/>
        <button>Save</button>
    </form>
  )
}

export default TaskEdit