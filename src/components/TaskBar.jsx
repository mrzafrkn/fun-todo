import { useState } from "react";
import Card from "./shared/Card";
import ImportanceLevel from "./ImportanceLevel";

function TaskBar({onSubmit}) {
const [taskText, setTaskText] = useState('');
const [taskLevel, setTaskLevel] = useState('Low') 
const handleFormSubmit = (e) => {
    e.preventDefault();
    const task = {
        taskText,
        taskLevel,
        isDone: false
    }
    onSubmit(task);
    setTaskText('');
}

const handleChange = (e) => {
    setTaskText(e.target.value);
}

    return (
        <Card>
            <form onSubmit={handleFormSubmit}>
                <input value={taskText} onChange={handleChange} type="text" placeholder="Add new task"/>
                <button type="submit">Add</button>
                <ImportanceLevel select={(level) => setTaskLevel(level)}/>
            </form>
        </Card>
    )
}

export default TaskBar;