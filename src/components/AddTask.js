import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }


        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form center-align" onSubmit={onSubmit}>
            <div className="row">
                <div className="col m9 offset-m2">
                    <div className="row">
                        <div className="col s10">
                            <div className="input-field">
                                <label htmlFor="">Task</label>
                                <input type="text" name="" id="" value={text} onChange={(e) => setText(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s10">
                            <div className="input-field">
                                <label htmlFor="">Task</label>
                                <input type="text" name="" id="" value={day} onChange={(e) => setDay(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <div className="row left">
                        <label>
                            <input id="indeterminate-checkbox" checked={reminder} type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
                            <span>Set Reminder</span>
                        </label>
                    </div>
                    <button class="btn waves-effect waves-light pink" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddTask
