import { useState } from "react";

function TaskBar({onSubmit}) {
const [task, setTask] = useState('');

const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask('');
}

const handleChange = (e) => {
    setTask(e.target.value);
}

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={task} onChange={handleChange} type="text" placeholder="Add new task"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TaskBar;