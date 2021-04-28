const Task = ({task, event, reminder}) => {
    return (
        <>
            <li className={`collection-item ${task.reminder ? '' : 'reminder'}`} onDoubleClick={() => reminder(task.id)}>{task.text}<br></br>
            <small>{task.day}</small>
            <i id="trash" onClick={() => event(task.id)} className="material-icons right red-text" >delete</i>
            </li>
            

        </>
    )
}

export default Task
