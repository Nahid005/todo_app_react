import React from 'react'

import style from './Todo.module.css'

function Todo (props) {

    const {title, description, id} = props.todo

    const handleClick = () => {
        alert(id)
    }


    return (
        <div className={style.todoList}> 
            <article>
                <h4> {title} </h4>
                <p> {description} </p>
            </article>
            <div className={style.deleteButton}>
                <button onClick={handleClick}> delete </button>
            </div>
        </div>
    )
}

export default Todo