import React, { useState } from 'react'

import "./FormTask.css"

const AddTask = ({ handleTaskAdd }) => {
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");

    //Capturando o valor que for digitado pelo usuário
    const handleInput = (e) => {
        setId(Math.floor(Math.random() * 999999));
        setTitle(e.target.value);
    }

    //Adicinando a tarefa com o click do botao atraves da props do App
    const handleClickButtonAdd = (e) => {
        e.preventDefault();

        handleTaskAdd(title, id);
        setTitle("");
        setId("");
    }

    return (
        <div className="container-add-task">
            <form onSubmit={handleClickButtonAdd}>
                <div className='header-form'><label>Minhas tarefas</label></div>
                <input 
                    type="text" 
                    onChange={handleInput}
                    placeholder="Nova tarefa"
                    name="title"
                    value={title} 
                    className="input-title"
                />
                <input 
                    type="submit" 
                    value="Adicionar" 
                    className="add-task-button"
                />
            </form>
        </div>    
    );
}
 
export default AddTask;