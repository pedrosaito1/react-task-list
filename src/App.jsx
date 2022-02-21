import { useEffect, useState } from 'react';

import './assets/App.css';

import AddTask from './components/FormTask/FormTask';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(data);
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  //Adicionando uma nova tarefa
  const handleTaskAdd = (title, id) => {
    //Se for digitado vazio não vai ser adicionado a task
    if(id > 0) {
      const taskList = [...tasks, {
        title: title,
        id: id,
        completed: false,
        },
      ];
      setTasks(taskList);
    }
  }

  //Alterando status da task
  const handleTaskCompleted = (taskId) => {
    const taskList = tasks.map((task) => {
      if(task.id === taskId) {
        return {...task, completed: !task.completed}
      }

      return task;
    });
    setTasks(taskList);
  }

  //Removendo uma task 
  const handleTaskDelete = (taskId) => {
    const taskList = tasks.filter((task) => task.id !== taskId)

    setTasks(taskList);
  };

  return (
      <>
        <div className="container">
          <AddTask handleTaskAdd={handleTaskAdd}/>
          <Tasks 
            tasks={tasks}
            handleTaskCompleted={handleTaskCompleted}
            handleTaskDelete={handleTaskDelete}
          />
        </div>
      </>
    )
}

export default App;
