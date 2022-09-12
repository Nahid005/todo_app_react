import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import style from './newTodo.module.css'

function newTodo (props) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newTodo, setNewTodo] = useState({title : '', description: '', id:'',})

    const {title, description} = newTodo

    const handleTodo = (e) => {
        const name = e.target.name
        setNewTodo((oldTodo) => {
            return {...oldTodo, id:uuidv4(), [name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddNewTodo(newTodo)
        setNewTodo({
            title: '',
            description: ''
        })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="title"> Enter Your Title </label>
                    <input type="text" id='title' name='title' value={title} onChange={handleTodo}  />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="description"> Enter Your Description </label>
                    <textarea type="text" id='description' name='description' value={description} onChange={handleTodo}  />
                </div>
                <div className={style.addButton}>
                    <button type="submit"> Add New Todo </button>
                </div>
            </form>
        </div>
    )
}

export default newTodo;