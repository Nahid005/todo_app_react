import React, {useState} from 'react'

import Todos from './Todos'
import NewTodo from './newTodo'
import style from './Home.module.css'

function Home () {

    const [todos, setTodos] = useState([])

    const onAddNewTodo = (addTodo) => {
        setTodos((previousTodo) => {
            return [...previousTodo, addTodo]
        })
    }

    const onRemoveTodo = (removeElement) => {
        const filterTodo = todos.filter((todo) => todo.id !== removeElement)
        setTodos(filterTodo)
    }

    return (
        <div className={style.container}>
            <NewTodo onAddNewTodo = {onAddNewTodo}/>
            <Todos todos={todos} onRemoveTodo = {onRemoveTodo} />
        </div>
    )
}

export default Home