import './App.css'
import { useState } from 'react';
import TaskBar from './components/TaskBar';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {

    const [tasks, setTasks] = useState([]);
    const handleSubmit = (task) => {
        setTasks([...tasks, task])
    }

    return (
        <div className="app">
            <Header/>
            <TaskBar onSubmit={handleSubmit}/>
            <TodoList tasks={tasks}/>
        </div>
    )
}

export default App;