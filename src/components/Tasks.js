import Task from './Task'

const Tasks = ({tasks, event, reminder}) => {
    
    return (
        <>
            <ul className="collection left-align">
            {tasks.map((task) => (
            <Task className="collection-item" key={task.id} task={task} event={event} reminder={reminder}/>
            ))}
            </ul>
            
        </>
    )
}

export default Tasks
  