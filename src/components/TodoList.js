import './TodoList.css'
import ShowTodo from './ShowTodo';
function TodoList({tasks}) {
    const renderedTasks = tasks.map((task, index) => {
        return <ShowTodo task={task} key={index}/>
    })
    return (
       
        <div>
           {renderedTasks} 
        </div>    
 )
}

export default TodoList;