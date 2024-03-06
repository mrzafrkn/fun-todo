import { createContext, useState, useEffect } from "react";

const TodoContext = createContext()

function Provider({children}) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks()
    },[])

    const fetchTasks = async() => {
        const response = await axios.get('http://localhost:3001/tasks')
        setTasks(response.data)
    }

    const handleSubmit = async(task) => {
        if(task.taskText !== ''){
            const response = await axios.post('http://localhost:3001/tasks', {
                taskText:task.taskText,
                taskLevel:task.taskLevel,
                isDone:task.isDone
            })
            const updatedTasks = [...tasks, response.data]
            setTasks(updatedTasks)
        } 
        else window.alert('Please add task!')  
    }

    const handleEdit = (id, newText) => {
        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                return {...task, taskText:newText}
            }
            return task
        })
        setTasks(updatedTasks)
    }

    const handleDone = async(id, done) => {
        const response = await axios.patch(`http://localhost:3001/tasks/${id}`,{
           isDone:done
        })

        const updatedTasks = tasks.map(task => {
            if(task.id === id){
                return {...task, ...response.data}
            //    return task.isDone ? {...task, isDone:false} : {...task, isDone:true}
                
            }
            return task
        })
        setTasks(updatedTasks)
        console.log(tasks)
    }
    const handleDelete = async(id) => {
        await axios.delete(`http://localhost:3001/tasks/${id}`)
        const updatedTasks = tasks.filter(task => task.id !== id) 
        setTasks(updatedTasks)
    }
    
}


export {Provider}
export default TodoContext