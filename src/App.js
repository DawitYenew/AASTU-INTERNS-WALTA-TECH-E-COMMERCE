import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Taking medicine',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        }
    ])
    
    //Add task
    const addTask = (task) => {
     const id = Math.floor(Math.random() * 10000) + 1
     const newTask = {id, ...task}
     setTasks([...tasks, newTask])
    }
    // delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }
    
    // toggle a reminder
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => 
          task.id === id ? { ...task, reminder: 
            !task.reminder } : task
          )
      )
    }

  return (
    <div className="container">
      <Header title = 'Task scheduler'/>
      <AddTask onAdd={addTask}/>

      {tasks.length > 0 ? (
        <Tasks tasks = {tasks} 
          onDelete = {deleteTask} 
          ontoggle = {toggleReminder}/>
        ) : (
          <h2 style={{color: 'red'}}>NO TASK!</h2>
        )}
    </div>
  );
} 

export default App;
