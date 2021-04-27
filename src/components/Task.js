const Task = ({task}) => {
    return (
        <>
            <li className="collection-item">{task.text}<br></br>
            <small>{task.day}</small>
            </li>
            

        </>
    )
}

export default Task
