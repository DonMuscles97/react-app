import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import 'materialize-css/dist/css/materialize.min.css'

// import "materialize-css/dist/js/materialize.min.js";


function App() {

  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Making breakfast',
    day: 'April 26th at 7:30 am',
    reminder: true,
},
{
    id: 2,
    text: 'Starting work',
    day: 'April 26th at 9:00 am',
    reminder: true,
},
{
    id: 3,
    text: 'Going to the gym',
    day: 'April 26th at 6:00pm',
    reminder: true,
},])

// delete task from task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id != id))
}

  return (
    <div className="App  row">
     <div className="col m6 z-depth-5 offset-m3" >
     <Header className="row"/>
     {tasks.length > 0 ? <Tasks tasks={tasks} event={deleteTask} /> : 'There are no tasks to delete'}
     
     </div>
    </div>
  );
}



export default App;
