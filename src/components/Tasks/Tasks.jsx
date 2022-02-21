import React from 'react'

import Task from '../Task/Task'

//Componente para fazer o agrupamento das tasks
const Tasks = ({ tasks, handleTaskCompleted, handleTaskDelete, hasCompleted }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task 
                    task={task}
                    key={task.id}
                    handleTaskCompleted={handleTaskCompleted} 
                    handleTaskDelete={handleTaskDelete}
                />
            ))}
        </>
    );
}
 
export default Tasks;