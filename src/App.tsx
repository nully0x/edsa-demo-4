import  { useState } from 'react'
import TaskList from './Components/TaskList'
import AddTaskForm from './Components/AddTaskForm'
import './App.css'


interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false
    }
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

    const toggleTask = (id: number) => {
      const updatedTasks = tasks.map(task => {
        if(task.id === id) {
          return {...task, completed: !task.completed}
        }
        return task;
      })
      setTasks(updatedTasks);
    }

    return (
      <div className="App">
        <h1>Task Manager</h1>
        <AddTaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      </div>
    );
  }


export default App;