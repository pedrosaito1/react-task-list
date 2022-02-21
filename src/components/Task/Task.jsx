import React, { useEffect, useState } from 'react'
import { CgTrash } from 'react-icons/cg'

import "./Task.css";

const Task = ({ task, handleTaskCompleted, handleTaskDelete }) => {
    const [completed, setCompleted] = useState("");

    useEffect(() => {
        setCompleted(task.completed)
    }, [])

    //Capturando evento do checked e passando para a props do App
    const handleTaskCheckbox = (e) => {
        setCompleted(e.target.checked);
        handleTaskCompleted(task.id);
    }

    return (
        <div className="container-task">
            {/*Se a tarefa estiver com status de completed, a decoração do texto vai mudar para line-through*/}
            <div className="title-task" style={completed === true ? {textDecoration: 'line-through'}:{}}>
                {task.title}
            </div>

            <div className="container-btn">
                <button 
                    className="container-remove-btn" 
                    onClick={() => 
                    handleTaskDelete(task.id)}
                >
                    <CgTrash />
                </button>
                <input 
                    type="checkbox"
                    name="completed"
                    className='container-checked-box'
                    onChange={handleTaskCheckbox}
                    checked={completed}
                />
            </div>
        </div>
    )
};
 
export default Task;