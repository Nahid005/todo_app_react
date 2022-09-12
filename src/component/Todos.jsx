import React from 'react'

import Todo from './Todo'

function Todos (props) {
    return (
        <div>
            {props.todos.map((todo) => <Todo key={todo.id} todo={todo} onRemoveTodo = {props.onRemoveTodo} /> )}
        </div>
    )
}

export default Todos