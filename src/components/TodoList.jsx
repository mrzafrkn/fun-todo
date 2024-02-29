import ShowTodo from './ShowTodo';
function TodoList({tasks, onDone, onDelete, onEdit}) {

    const renderedTasks = tasks.map((task) => {
        return <ShowTodo task={task} onDone={onDone} onDelete={onDelete} onEdit={onEdit}/>
    })
    return (
       
        <div>
           {renderedTasks} 
        </div>    
 )
}

export default TodoList;