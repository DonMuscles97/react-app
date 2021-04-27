import Task from './Task'

const Tasks = ({tasks}) => {
    
    return (
        <>
            <ul className="collection left-align">
            {tasks.map((task) => (
            <Task className="collection-item" key={task.id} task={task}/>
            ))}
            </ul>
            
        </>
    )
}

export default Tasks
