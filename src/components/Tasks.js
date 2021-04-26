

const Tasks = ({tasks}) => {
    
    return (
        <>
            <ul className="collection ">
            {tasks.map((task) => (
            <li className="collection-item" key={task.id}>{task.text}</li>
            ))}
            </ul>
            
        </>
    )
}

export default Tasks
