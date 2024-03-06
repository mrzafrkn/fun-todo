import './App.css'
import TaskBar from './components/TaskBar';
import TodoList from './components/TodoList';
import Header from './components/Header';
function App() {



    return (
        <div className="app">
            <Header/>
            <TaskBar onSubmit={handleSubmit}/>
            <TodoList tasks={tasks} onDone={handleDone} onDelete={handleDelete} onEdit={handleEdit}/>
        </div>
    )
}

export default App;