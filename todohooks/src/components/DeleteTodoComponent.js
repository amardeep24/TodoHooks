import React, { useContext } from 'react'
import { deleteTodo } from '../store/TodoActions';
import TodoContext from '../store/TodoContext';

export const DeleteTodoComponent = ({ id }) => {

    const { dispatch } = useContext(TodoContext);

    const removeTodo = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <div>
            <button onClick={() => removeTodo(id)}>Delete Todo</button>
        </div>
    )
}
