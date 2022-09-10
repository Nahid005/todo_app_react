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

    const id = Math.floor(Math.random()*10)
    
    return (
        <div className={style.container}>
            <NewTodo onAddNewTodo = {onAddNewTodo}/>
            <Todos todos={todos} id={id}/>
        </div>
    )
}

export default Home