import React from 'react'

import Todo from './Todo'

function Todos (props) {
    return (
        <div>
            {props.todos.map((todo, index) => <Todo key={index} todo={todo} id={props.id} /> )}
        </div>
    )
}

export default Todos