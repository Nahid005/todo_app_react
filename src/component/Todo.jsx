import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

import style from './Todo.module.css'

function Todo (props) {

    const {title, description, id} = props.todo

    const handleClick = (id) => {
        props.onRemoveTodo(id)
    }

    return (
        <div className={style.todoList}> 
            <article>
                <h4> {title} </h4>
                <p> {description} </p>
            </article>
            <div className={style.deleteButton}>
                <button onClick={()=> {handleClick(id)}}> <FaTrashAlt /> </button>
            </div>
        </div>
    )
}

export default Todo