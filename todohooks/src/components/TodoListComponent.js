import React, { useContext } from 'react'
import { TodoComponent } from './TodoComponent'
import TodoContext from '../store/TodoContext'

export const TodoListComponent = (props) => {
    const { state } = useContext(TodoContext);

    return (
        <div>
            {state.todos.map(todo => <TodoComponent key={todo.id} title={todo.title} content={todo.content} id={todo.id}/>)}
        </div>
    )
}
